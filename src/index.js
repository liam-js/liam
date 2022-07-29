import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import Event from './event';
import buildInGetComponent from './getComponent';

const Liam = new Event();

Object.assign(Liam, {
  React,
  ReactDOM,
});

const { Provider, connect } = ReactRedux;

const { createStore, combineReducers } = Redux;

const reduxManager = (function () {
  // 先初始化一个空的，但参数不能为空，会报错
  const store = createStore(function () {});

  // 每次添加进来的 state 的初始值
  const initialStates = {};

  const allReducers = {};

  const combineStates = function (states) {
    for (const key in states) {
      if (Object.hasOwnProperty.call(states, key)) {
        const state = states[key];
        if (initialStates[key]) {
          console.log('覆盖了同名的 state(对应会有同名的 reducer 被覆盖)：');
          console.log('原 state：', initialStates[key]);
          console.log('新 state：', state);
        }
        initialStates[key] = state;
      }
    }
  };
  const setReducersByStates = function (states) {
    // const reducers = {};
    for (const key in states) {
      if (Object.hasOwnProperty.call(states, key)) {
        const item = states[key];
        if (typeof item === 'undefined') {
          console.log('state 的值不建议设置为undefined', key);
        }
        // If you don't want to set a value for this reducer, you can use null instead of undefined
        // 会默认调用一次获取默认值
        allReducers[key] = (() => {
          return (state = item, action) => {
            // 收到dispatch会遍历所有reducer，简单加个判断不下面逻辑
            if (action.type !== key) {
              return state;
            } else {
              // 合并数据
              return action.combine(state);
            }
          };
        })();
      }
    }
    store.replaceReducer(combineReducers(allReducers));
  };
  const add = function (states) {
    combineStates(states);
    setReducersByStates(states);
  };
  const get = function (key) {
    let states = store.getState();
    // 有可能什么值都没有
    states = states || {};
    if (typeof key === 'undefined') {
      return states;
    } else {
      // 没有对应reducer，实时加
      if (!Object.hasOwnProperty.call(states, key)) {
        add({
          [key]: null,
        });
      }
      return states[key];
    }
  };

  const set = function (key, value) {
    if (arguments.length === 2 && typeof key !== 'undefined') {
      // 没有对应reducer，实时加
      if (!Object.hasOwnProperty.call(initialStates, key)) {
        add({
          [key]: null,
        });
      }

      if (typeof value === 'function') {
        // 如果是方法，让方法来处理和合并数据
        store.dispatch({
          type: key,
          combine: value,
        });
      } else {
        // 如果不是方法（数据），直接使用该替换
        store.dispatch({
          type: key,
          combine: function () {
            return value;
          },
        });
      }
    }
  };

  return {
    initialStates,
    store,
    add,
    get,
    set,
  };
})();

Object.assign(Liam, reduxManager);

let cfg = {
  // 获取组件信息
  getComponentFns: [buildInGetComponent],
  // 组件映射表，用于简写 type
  componentMap: {},
  // 文字（无标签）是否包裹
  wrapText: false,
};

const assignWithWarn = function (oldObject, newObject, name) {
  for (const key in newObject) {
    if (Object.hasOwnProperty.call(newObject, key)) {
      if (Object.hasOwnProperty.call(oldObject, key)) {
        console.log(
          name,
          '有一个key(',
          key,
          ')被替换,原对象:',
          oldObject,
          '新对象：',
          newObject
        );
      }
      oldObject[key] = newObject[key];
    }
  }
};

// 如果不是数组，把它转成长度为1的数组；如果是数组则原样返回，否则返回空数组
const ensureArray = function (item, skipFunction) {
  if (Array.isArray(item)) {
    return item;
  } else {
    if (typeof skipFunction === 'function') {
      if (skipFunction(item)) {
        return [];
      }
    }
    return [item];
  }
};

// 添加获取组件的中间件

const getComponent = function (ctx) {
  const getComponentFns = cfg.getComponentFns;
  const length = getComponentFns.length;
  let count = -1;
  const next = function () {
    count++;
    if (count < length) {
      getComponentFns[count](ctx, next);
    }
  };
  next();
  return ctx.component;
};

const config = function (c) {
  if (c) {
    // 一、states 处理， 合并
    if (c.states) {
      reduxManager.add(c.states);
      cfg.states = cfg.states || {};
      assignWithWarn(cfg.states, c.states, 'cfg.states');
    }

    // 二、getComponent 添加到 cfg.getComponentFns 中去（添加获取组件的中间件）
    if (typeof c.getComponent === 'function') {
      cfg.getComponentFns.unshift(c.getComponent);
    }

    // 三、componentMap 处理，合并
    if (c.componentMap) {
      cfg.componentMap = cfg.componentMap || {};
      assignWithWarn(cfg.componentMap, c.componentMap, 'cfg.componentMap');
    }
    // 四、
    if (typeof c.wrapText !== 'undefined') {
      cfg.wrapText = c.wrapText;
    }
  }
  return cfg;
};

Object.assign(Liam, cfg, {
  config,
});

// 判断是否是基本数据类型
const isBasicType = (val = '') => {
  const t = Object.prototype.toString.call(val);
  if (
    t == '[object String]' ||
    t == '[object Boolean]' ||
    t == '[object Number]' ||
    t == '[object Null]' ||
    t == '[object Undefined]' ||
    t == '[object Symbol]'
  ) {
    return true;
  }
  return false;
};
// 判断是否promise
function isPromise(object) {
  return (
    object &&
    typeof object.then === 'function' &&
    typeof object.catch === 'function'
  );
}

// 判断是否是react class 组件
function isClassComponent(component) {
  return (
    component && component.prototype && component.prototype.isReactComponent
  );
}

// 函数只能判断有没有返回内容
function isFunctionComponent(component) {
  return typeof component === 'function';
}

function isReactComponent(component) {
  if (React.isValidElement(component)) {
    return false;
  }
  if (component === React.Fragment) {
    return true;
  }
  // 字符串也有可能是，如 div
  if (
    typeof component === 'string' ||
    (component && typeof component.$$typeof !== 'undefined') ||
    isFunctionComponent(component) ||
    isClassComponent(component)
  ) {
    return true;
  } else {
    return false;
  }
}

const e = React.createElement;

// 函数组件，渲染属性（渲染 children） 都是一个方法，这个方法都它的 ast 信息，但转化结果却没有
const convertResultToReactNode = function (fn, context) {
  return function () {
    let props = arguments[0];
    let result = fn.apply(context, Array.prototype.slice.call(arguments));
    result = withAst(result, props);
    // schema 转化创建，这个 result 是没有 ast 信息的，可使用 生成 result 上级的信息
    result = createElement(result);
    return result;
  };
};

/**
 * 可用的 component schema 信息
 * @param done 回调
 */
const getRealSchema = function (schema, done) {
  // 结果是否是异步的
  let isAsync = false;

  // element（直接渲染） info(实例信息) array(数组，需要再处理)
  let schemaType = 'element';

  let ast = null;

  // 回调
  const _done = function (schema) {
    // 定义一个 props.dangerouslySetInnerHTML 的缩写
    if (schema) {
      if (typeof schema.h !== 'undefined') {
        schema.props = schema.props || {};
        schema.props.dangerouslySetInnerHTML = {
          __html: schema.h,
        };
      }
      if (typeof schema.n !== 'undefined') {
        schema.n = ensureArray(schema.n, function (item) {
          return typeof item !== 'string';
        });
      }
      if (typeof schema.r !== 'undefined') {
        schema.r = ensureArray(schema.r, function (item) {
          return typeof item !== 'string';
        });
      }
      if (typeof schema.s !== 'undefined') {
        schema.s = ensureArray(schema.s, function (item) {
          return typeof item !== 'string';
        });
      }
      // 给 props 补充 children 属性，否则可能渲染不出来
      if(schema.children && schema.props && !schema.props.children){
        schema.props.children = schema.children;
      }
      
    }

    done(schema, isAsync, schemaType, ast);
  };

  const get = function (schema) {
    // 带 __type 属性，则 __type 的值才是真正的 schema，
    // 一般是用于测试，方便非标准格式schema 添加测试字段 __ast(对应组件源代码位置
    if (schema) {
      if (schema.__ast) {
        // __ast 是 ast 生成的代码信息，如代码位置
        ast = schema.__ast;
        delete schema.__ast;
      }
      if (Object.hasOwnProperty.call(schema, '__type')) {
        schema = schema.__type;
      }
      if (schema && schema.__ast) {
        // __ast 是 ast 生成的代码信息，如代码位置
        ast = schema.__ast;
        delete schema.__ast;
      }
    }
    if (isPromise(schema)) {
      // 如果是promise，则返回的结果是异步的

      isAsync = true;
      schema.then((res) => {
        // 不是最终结果，递归
        get(res);
      });

      // 方法返回的结果不确定内容，需要再处理
    } else if (isBasicType(schema)) {
      // 基本类型，如字符串，直接渲染

      if (
        schema === undefined ||
        schema === null ||
        schema === false ||
        schema === true
      ) {
        _done(null);
      } else {
        _done(schema + '');
      }
    } else if (isReactComponent(schema)) {
      // 组件，封装为标准组件格式
      schema = {
        type: schema,
        c: true, // schema 整体是一个组件时，默认需要转换
      };
      schemaType = 'component';
      _done(schema);
    } else if (Array.isArray(schema)) {
      // 数组
      // 空值，不渲染
      if (schema.length === 0) {
        _done(null);
      } else {
        schemaType = 'array';
        _done(schema);
      }
    } else if (React.isValidElement(schema)) {
      // react element
      _done(schema);
    } else if (
      typeof schema.type !== 'string' &&
      isReactComponent(schema.type)
    ) {
      // 普通组件
      schemaType = 'component';
      _done(schema);
    } else if (typeof schema.type !== 'undefined') {
      const type = schema.type;

      if (type === '') {
        // 为空，则把 children 封装成一个组件，放 type 上
        schemaType = 'component';
        schema.type = function () {
          return schema.children;
        };
        // delete schema.children;
        // debugger;
        _done(schema);
      } else {
        // 自定义组件；通过 schema.type 获取组件信息，或直接获取，或远程异步获取
        schemaType = 'info';
        if (typeof type === 'string') {
          // 缩短的 type 做补齐
          const typeInfo = type.split('#');

          const mapKey = typeInfo[0];
          const componentPrefix = cfg.componentMap[mapKey];
          if (mapKey && componentPrefix) {
            schema.type = type.replace(mapKey, componentPrefix);
          }
        }
        _done(schema);
      }
    } else {
      console.error('该schema无法处理:' + JSON.stringify(schema));
      // 无法处理时，返回的组件一定要w:false, 防止死循环
      _done(null);
    }
  };
  get(schema);
};

// 加载中，属性加载，和组件代码加载，只会显示一个
const getFallback = function (schema) {
  if (schema && schema.fallback) {
    // fallback 创建
    return createElement(schema.fallback);
  } else {
    return null;
    // return e(
    //   'div',
    //   {
    //     style: {
    //       borderRadius: '3px',
    //       margin: '2px',
    //       height: '24px',
    //       lineHeight: '24px',
    //       overflow: 'hidden',
    //       backgroundColor: '#fafafa',
    //     },
    //   },
    //   ''
    // );
  }
};

const getPosition = function (ast) {
  if (ast && ast.startLine) {
    return (
      ast.startLine +
      '-' +
      ast.startColumn +
      '-' +
      ast.endLine +
      '-' +
      ast.endColumn
    );
  } else {
    return '';
  }
};

class FaultComponent extends React.PureComponent {
  render() {
    console.error('*Render Error', this.props);
    return e(
      'div',
      {
        style: {
          width: '100%',
          height: '24px',
          lineHeight: '24px',
          textAlign: 'center',
          fontSize: '12px',
          color: '#ff0000',
          border: '1px solid #ff0000',
          borderRadius: '3px',
          margin: '2px',
        },
      },
      '组件渲染异常，请查看控制台日志'
    );
  }
}

// 让函数组件和类组件都适配，返回 schema 结果
const componentSchemaAdapt = function (component) {
  // 类组件 typeof 也是 function
  if (isClassComponent(component)) {
    return class extends component {
      render() {
        let props = this.props;
        let result = super.render();
        result = withAst(result, props);
        // 组件结果转化创建元素
        return createElement(result);
      }
    };
  } else if (typeof component === 'function') {
    return convertResultToReactNode(component, null);
  } else {
    return component;
  }
};

const getRealChildren = function (schema) {
  // Fragment 没有 props.children 指向自身，所以 Fragment 的children不能写在 schema.props.children 上
  let children = [];
  if (schema && schema.props && typeof schema.props.children !== 'undefined') {
    children = schema.props.children;
  } else if (typeof schema.children !== 'undefined') {
    children = schema.children;
  }
  return children;
};

// 把在 schema.n 的schema属性转成 node
// 给 schema.e 的事件属性添加 附加参数
// 把 schema.r 渲染属性返回的schema 转成 node
// 把 props.children 和 children 的 schema 转成 node
// 最后生成 element
const schemaToElement = function (component, schema, wrapType, ast) {
  // 让组件兼容 render schema;schema.c !== false 时都转换
  if (typeof schema.c === 'undefined' || schema.c) {
    component = componentSchemaAdapt(component);
  }

  const props = schema.props||{};

  // schema 没有 node 类型，需要把 schema 转为 node
  // 通过 nodeProps 确定哪些属性需要转为 nodeProps

  const nodeProps = schema.n;

  if (Array.isArray(nodeProps)) {
    nodeProps.map(function (item) {
      const prop = props[item];
      if (typeof prop !== 'undefined') {
        // 属性 schema 转化创建
        props[item] = createElement(prop);
      }
    });
  }

  let renderProps = schema.r;

  if (Array.isArray(renderProps)) {
    renderProps.map(function (item) {
      const prop = props[item];
      if (typeof prop === 'function') {
        // 把函数结果处理成React Node，并保持 this 引用
        props[item] = convertResultToReactNode(prop, this);
      }
    });
  }

  // 子组件可能定义在外面也可能定义在props里
  let realChildren = getRealChildren(schema);

  // 如果 children 不是渲染函数，才处理
  if (!Array.isArray(renderProps) || renderProps.indexOf('children') === -1) {
    if (
      typeof schema.h !== 'undefined' ||
      (props && typeof props.dangerouslySetInnerHTML !== 'undefined')
    ) {
      realChildren = null;
    } else {
      if (realChildren) {
        // 子节点创建
        realChildren = createElement(realChildren);
      } else {
        realChildren = [];
      }
    }
  } else {
    // console.log(children,'进来了');
    // 子组件是渲染函数
    if (typeof realChildren === 'function') {
      // 使用 new Function 会导致 realChildren 里引用的闭包变量丢失
      // let newFn = new Function('Liam', 'return ' + realChildren)(Liam);
      // 把函数结果处理成React Node，并保持 this 引用
      let newFn = convertResultToReactNode(realChildren, this);
      schema.children = newFn;
      realChildren = newFn;
    }
  }
  // schema.h 为 dangerouslySetInnerHTML 缩写

  // 如果是组件，则用 redux connect 一下，并且做一个容错
  if (isReactComponent(component)) {
    if (wrapType) {
      component = getWrappedComponent(
        component,
        schema ? schema.s : [],
        'component',
        wrapType
      );
    }
  }
  return e(component, extendProps(props, schema, ast), realChildren);
};

function withContainer(WrappedComponent, schemaType) {
  const applyInContext = function (type, args, context) {
    // 组件配置
    const fn = context.props['__' + type];
    // 全局配置
    const cfgFn = cfg['__' + type];
    args = Array.prototype.slice.call(args);
    let result;

    if (typeof cfgFn === 'function') {
      result = cfgFn.apply(context, args);
    }
    if (typeof fn === 'function') {
      result = fn.apply(context, args);
    }
    return result;
  };

  const name = `📦${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }`;

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        __error: null,
      };
      this.innerRef = React.createRef();
      applyInContext('init', arguments, this);
    }

    static displayName = name;

    static getDerivedStateFromError(error) {
      console.error(error);
      // 更新 state 使下一次渲染能够显示降级后的 UI
      return {
        __error: error,
      };
    }

    componentDidMount() {
      return applyInContext('didMount', arguments, this);
    }

    componentDidUpdate() {
      return applyInContext('didUpdate', arguments, this);
    }

    componentWillUnmount() {
      return applyInContext('willUnmount', arguments, this);
    }

    componentDidCatch() {
      return applyInContext('didCatch', arguments, this);
    }

    render() {
      const self = this;
      const render = function () {
        const innerProps = {
          ref: self.innerRef,
        };
        if (self.state.__error) {
          // 你可以自定义降级后的 UI 并渲染
          return e(FaultComponent, {
            ...self.props,
            ...self.state,
            ...innerProps,
          });
        }
        if (schemaType === 'element') {
          return e(
            'p__',
            {
              ...self.props,
              ...innerProps,
            },
            WrappedComponent
          );
        } else {
          return e(
            WrappedComponent,
            {
              ...self.props,
              ...innerProps,
            },
            self.props.children
          );
        }
      };
      let result = render();

      // result = applyInContext('render', [result], this);

      return result;
    }
  };
}

const getWrapType = function (schema) {
  let wrapType = '';
  let keys = [];
  const lifeCycleProps = [
    '__didMount',
    '__didUpdate',
    '__willUnmount',
    '__didCatch',
  ];
  if (!schema) {
    return '';
  }
  if (typeof schema === 'string') {
    // 文字（字符串是否包裹），只能包裹生命周期
    if (cfg.wrapText) {
      return 'life';
    }
  }

  // 如果设置了生命周期的相关参数，则需要包裹生命周期的容器
  if (schema.props) {
    keys = Object.keys(schema.props);
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      if (lifeCycleProps.indexOf(key) > -1) {
        wrapType += 'life';
        break;
      }
    }
  }

  // 如果设置了全局状态的依赖，则需要包裹状态容器
  if (Array.isArray(schema.s) && schema.s.length > 0) {
    wrapType += 'state';
  }

  return wrapType;
};

/**
 *
 * @param {React Component | React Node} WrappedComponent 需要包裹的组件
 * @param {Array} statePaths 依赖的 state key 数组
 * @param {String} schemaType schema 类型，element | component | info
 * @param {String} wrapType 包裹类型，state | life | lifestate
 * @returns
 */

const getWrappedComponent = function (
  WrappedComponent,
  statePaths,
  schemaType,
  wrapType
) {
  let Component = WrappedComponent;

  // 容错包裹
  if (wrapType.indexOf('life') > -1) {
    Component = withContainer(WrappedComponent, schemaType);
  }

  if (wrapType.indexOf('state') > -1) {
    //props map目前为了触发更新； dispatch 不用 map
    Component = connect((states) => {
      let props = {};
      statePaths.forEach(function (item) {
        if (states && typeof states[item] !== 'undefined') {
          props['Liam_get_' + item] = states[item];
        } else {
          props['Liam_get_' + item] = undefined;
        }
      });
      return props;
    })(Component);
  }

  return Component;
};

// 组件（类组件，函数组件）内部，渲染属性（包括 children ）内部转化出来的 schema 是没有 ast 信息的，所以要没用上级的 ast 信息
const withAst = function (schema, props) {
  if (schema && typeof schema.__type === 'undefined' && props && props.__ast) {
    schema = {
      __type: schema,
      __ast: props.__ast,
    };
  }
  return schema;
};

// 把 ast 信息附加到 props 上，最终会渲染到 dom 上
const extendProps = function (props, schema, ast) {
  if (schema) {
    props = Object.assign({}, props, {
      __schema: schema,
    });
  }
  if (ast) {
    props = Object.assign(props, {
      __ast: ast,
      __loc: getPosition(ast),
    });
  }
  return props;
};

const getElement = function (config) {
  let originalSchema = config.schema;

  // 默认使用lazy，接下来在获取真实schema(可能异步)和真实component（可能异步）时，
  // 能在方法 return element 之前，修改了useLazy为false，则说明是异步的
  let useLazy = true;

  // 用于渲染的组件
  let element = null;

  // 加载到异步组件后，resolve React.lazy
  const lazyResolve = (function () {
    let resolve = null;
    let component = null;
    const complete = function () {
      if (resolve && component) {
        component = function () {
          return element;
        };
        resolve({
          default: component,
        });
      }
    };

    return {
      setComponent: function (comp) {
        component = comp;
        complete();
      },
      setResolve: function (res) {
        resolve = res;
        complete();
      },
    };
  })();

  // 默认不包裹组件，如果有 .s 和生命周期属性，才包裹
  let wrapType = '';

  const getComponentBySchema = function (schema, callback) {
    let isAsync = false;
    const component = getComponent({
      schema,
      component: undefined,
    });

    if (isPromise(component)) {
      isAsync = true;
      // 组件也是异步的
      component
        .then(function (c) {
          if (typeof c === 'undefined') {
            callback(FaultComponent, isAsync);
          } else {
            callback(c, isAsync);
          }
        })
        .catch(function (e) {
          console.log(e);
        });
    } else {
      callback(component, isAsync);
    }
  };

  // 设置 element
  const setElement = function (ele) {
    element = ele;

    if (useLazy) {
      lazyResolve.setComponent(function () {
        return element;
      });
    }
  };

  // 由于 originalSchema 可能不是真的 schema，可能是可执行的 js，甚至是异步的
  getRealSchema(
    originalSchema,
    function (realSchema, isAsync, schemaType, ast) {
      let element;

      // TODO 应该改为从 .s 和 props 生命周期中判断

      wrapType = getWrapType(realSchema);
      switch (schemaType) {
        case 'array':
          // 能同步获取到 realSchema,并且返回的是数组，则不需要使用 lazy
          if (!isAsync) {
            useLazy = false;
          }

          // 数组需要再处理
          // 由于期望是返回一个 component, 如果是数组再使用 createElement 处理一下
          setElement(createElement(realSchema));
          break;
        case 'element':
          // 能同步返回 element,直接渲染，不需要使用 lazy
          if (!isAsync) {
            useLazy = false;
          }

          // 如果包裹类型不为空，则使用 getWrappedComponent 包裹
          if (wrapType) {
            setElement(
              e(
                getWrappedComponent(
                  // 真实 schema
                  realSchema,
                  // 依赖的状态
                  realSchema ? realSchema.s : [],
                  // schema 类型
                  schemaType,
                  // 包裹类型
                  wrapType
                ),
                extendProps({}, realSchema, ast)
              )
            );
          } else {
            // 不包裹的话，元素无法添加额外的信息
            setElement(realSchema);
          }

          break;
        case 'component':
          element = schemaToElement(realSchema.type, realSchema, wrapType, ast);
          setElement(element);

          // 能同步返回组件,直接渲染，不需要使用 lazy
          if (!isAsync) {
            useLazy = false;
          }
          break;
        case 'info':
          // 如果不是 React Element， 还得通过 componentInfo 去获取真正的 React 组件
          // 如果 realSchema.type 就是组件
          getComponentBySchema(
            realSchema,
            function (component, isAsyncComponent) {
              if (realSchema.debug) {
                console.log(
                  '通过',
                  realSchema.type,
                  '获取到的组件代码为',
                  component
                );
                if (!isReactComponent(component)) {
                  console.log('这貌似不是 React 组件', component);
                }
              }

              element = schemaToElement(component, realSchema, wrapType, ast);
              setElement(element);

              // 如果都是同步获取，则不使用 lazy
              if (!isAsync && !isAsyncComponent) {
                useLazy = false;
              }
            }
          );

          break;

        default:
          break;
      }
    }
  );

  if (useLazy) {
    element = e(
      React.Suspense,
      {
        fallback: getFallback(originalSchema),
        // props,
      },
      e(
        React.lazy(function () {
          return new Promise((resolve) => {
            // 执行到这里是异步的，而获取到真实组件也是异步的
            lazyResolve.setResolve(resolve);
          });
        })
      )
    );
  }

  return element;
};
const getElements = function (config) {
  const schema = config.schema;
  let children = [];
  if (Array.isArray(schema)) {
    children = schema.map((item) => {
      return getElement({
        schema: item,
      });
    });
  }
  return children;
};

/**
 * 通过 Schema 生成 React Element
 * @param {Object} schema 描述组件的 Schema
 * @param {Boolean} isRoot 是否是顶端组件
 * @returns {React Element} React Element
 */

// 通过 Schema 生成 React Element
// createElement => (getElements) => getElement => getRealSchema
const createElement = function (schema, isRoot) {
  if (!cfg) {
    // 设置全局状态、组件容器、获取组件等配置
    config();
  }

  // react element ，直接返回
  if (React.isValidElement(schema)) {
    return schema;
  }

  let schemas = Array.isArray(schema) ? schema : [schema];

  let result = null;

  const providerWrap = (component) => {
    if (isRoot) {
      return e(
        Provider,
        {
          store: Liam.store,
        },
        component
      );
    } else {
      return component;
    }
  };

  if (schemas.length === 0) {
    return null;
  } else if (schemas.length === 1) {
    result = providerWrap(
      getElement({
        schema: schemas[0],
      })
    );
  } else {
    result = providerWrap(
      getElements({
        schema: schemas,
      })
    );
  }
  return result;
};

const render = function (schema, node) {
  // 根元素创建
  const RootElement = createElement(schema, true);
  Object.assign(Liam, {
    schema,
    node,
  });
  ReactDOM.createRoot(node).render(RootElement);
};

const toJs = function (text, args, name) {
  if (typeof args === 'string') {
    name = args;
    args = {};
  }

  text = (text || '').trim();

  name = name || 'page';
  const defaultArgs = {
    Liam,
    React,
    ReactDOM,
  };
  args = Object.assign({}, defaultArgs, args || {});
  const newFunctionArgs = [null];
  const nextFunctionArgs = [];
  for (const key in args) {
    if (Object.hasOwnProperty.call(args, key)) {
      const arg = args[key];
      newFunctionArgs.push(key);
      nextFunctionArgs.push(arg);
    }
  }
  newFunctionArgs.push(
    'return ' + text.trim() + ';//# sourceURL=' + name + '.js'
  );
  const nextFunction = new (Function.prototype.bind.apply(
    Function,
    newFunctionArgs
  ))();
  return nextFunction.apply(null, nextFunctionArgs);
};

Object.assign(Liam, {
  createElement,
  render,
  toJs,
});

export default Liam;
