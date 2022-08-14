import React from 'react';

let liamRequire = null;

// 获取内置组件
const getBuildInComponent = (function () {
  class Require extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        loaded: false,
        args: [],
      };
    }
    componentDidMount() {
      const self = this;
      const props = this.props;

      liamRequire(props.deps || [], function () {
        const args = Array.prototype.slice.call(arguments);
        if (typeof props.callback === 'function') {
          props.callback.apply(self, args);
        }
        self.setState({
          loaded: true,
          args,
        });
      });
    }
    render() {
      if (this.state.loaded) {
        if (typeof this.props.children === 'function') {
          return this.props.children.apply(this, this.state.args);
        }
        return this.props.children;
      } else {
        return null;
      }
    }
  }

  class JS extends React.PureComponent {
    componentDidMount() {
      const self = this;
      const props = this.props;
      let js = props.js;
      const results = [];
      if (js) {
        if (!Array.isArray(js)) {
          js = [js];
        }
        for (let index = 0; index < js.length; index++) {
          const child = js[index];
          try {
            results.push(child.call(self));
          } catch (error) {
            console.log('内部 JS 组件，执行代码出错', this, error);
          }
        }
      }
      this.results = results;
    }
    componentWillUnmount() {
      const results = this.results;
      if (results) {
        for (let index = 0; index < results.length; index++) {
          const result = results[index];
          if (typeof result === 'function') {
            try {
              result.call(self);
            } catch (error) {
              console.log('内部 JS 组件，清理代码出错', this, result, error);
            }
          }
        }
      }
    }
    render() {
      return this.props.children;
    }
  }

  const CSS = (function () {
    var appendStyle = function (css, id) {
      var head = document.getElementsByTagName('head')[0];
      var old = document.getElementById(id);
      var oldCss = '';
      if (old) {
        head.removeChild(old);
      }
      var style = document.createElement('style');
      style.type = 'text/css';
      style.id = id;
      try {
        style.appendChild(document.createTextNode(css));
      } catch (e) {
        if (style.styleSheet) {
          try {
            oldCss = style.styleSheet.cssText;
          } catch (e) {
            oldCss = '';
          }
          style.styleSheet.cssText = oldCss + css;
        }
      }
      head.appendChild(style);
      return style;
    };

    let count = 0;
    const getId = function () {
      return 'STYLE_9BF2C54E_251E_4680_BDB1_6FD088115E8E_' + count++;
    };
    return class extends React.PureComponent {
      componentDidMount() {
        const props = this.props;
        this.id = this.id || getId();
        let css = props.css;
        if (css) {
          if (!Array.isArray(css)) {
            css = [css];
          }
          this.styleNode = appendStyle(css.join('/n'), this.id);
        }
      }
      componentWillUnmount() {
        if (this.styleNode) {
          this.styleNode.parentNode.removeChild(this.styleNode);
        }
      }
      render() {
        return this.props.children;
      }
    };
  })();

  const componentMap = {
    css: CSS,
    js: JS,
    require: Require,
    // 'require.config': RequireConfig,
    // config: Config,
  };
  return function (type) {
    return componentMap[type];
  };
})();

// 请求出错
const getError = function (msg1) {
  return function (msg2) {
    throw new Error(
      '请求异步组件出错:' + JSON.stringify(msg1) + ',' + JSON.stringify(msg2)
    );
  };
};

// 根据字符串 path (如'a.b.c'),获取对象 obj 的对应属性
var getEvalStringFunction = function (object) {
  // new Function 构造函数参数
  var newArguments = [Function];
  // 构造函数生成的函数 的参数
  var fnArguments = [];

  for (var key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      var value = object[key];

      // export 经常有default
      if (key !== 'default') {
        newArguments.push(key);
        fnArguments.push(value);
      } else {
        console.log(
          '不支持使用 default 取值，请使用 _default 取代' +
            JSON.stringify(object)
        );
      }
    }
  }

  newArguments.push('_default');
  fnArguments.push(object['_default'] || object['default']);

  return function (string) {
    var newFn = new (Function.prototype.bind.apply(
      Function,
      newArguments.concat('return ' + string)
    ))();
    return newFn.apply(null, fnArguments);
  };
};

const cache = {};

let getComponent = function (ctx) {
  
  liamRequire = this.require;
  const { schema } = ctx;
  const componentName = schema.type;

  // 如果前面的 getComponent 已经找到了 component,不用再处理了
  if (ctx.component) {
    return;
  }

  // 如果组件名不是字符串，那就是真实的组件，直接返回即可
  if (typeof componentName !== 'string') {
    ctx.component = componentName;
    return;
  }

  // 内置组件
  const buildInComponent = getBuildInComponent(componentName);

  if (buildInComponent) {
    ctx.component = buildInComponent;
    return;
  }

  // 可处理形如 url#https://e.sinaimg.cn/a/b/c.js#Component 的格式
  const componentNameInfo = componentName.split('#');
  const namespace = componentNameInfo[0];
  const url = componentNameInfo[1];
  const key = componentNameInfo[2];
  if (!url) {
    // 没有path，则无处请求，很可能是 html 标签，直接返回名字，如 'div'
    ctx.component = namespace;
    return;
  }

  if (!liamRequire) {
    console.log(url, '组件没有请求到');
    return;
  }
  // 请求组件
  if (cache[url]) {
    // 有缓存直接取
    if (key) {
      // 主题组件
      ctx.component = getEvalStringFunction(cache[url])(key);
    } else {
      ctx.component = cache[url];
    }
    return;
  } else {
    // 没缓存则使用require 异步获取
    ctx.component = new Promise((resolve) => {
      if (key) {
        // 主题组件
        liamRequire(
          [url],
          function (scripts) {
            const component = getEvalStringFunction(scripts)(key);
            if (typeof component === 'undefined') {
              console.error(
                '抱歉，没有找到对应组件，代码为' + 'url为' + url + 'key为' + key
              );
              resolve(undefined);
            } else {
              // 没问题的组件才缓存起来
              cache[url] = scripts;
              resolve(component);
            }
          },
          getError(url)
        );
      } else {
        // 独立组件
        liamRequire(
          [url],
          function (script) {
            if (typeof script === 'undefined') {
              console.error(
                '抱歉，没有找到对应组件，代码为',
                script,
                'url为',
                url
              );
              resolve(undefined);
            } else {
              // 没问题的组件才缓存起来
              cache[url] = script;
              resolve(script);
            }
          },
          getError(url)
        );
      }
    });
    return;
  }
};

export default getComponent;
