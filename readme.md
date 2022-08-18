# Liam
>A simple library capable of building web page(application) out of JS(ON) shcema
## 目标（优势）
1. 即写即得：无编译无构建
2. 同构：所有生成的页面和项目，都是相同组织结构的 schema，方便查找问题或项目交接
3. 每一个界面和 schema 是一一对应的，甚至 schema 结构和UI的结构都是一致的，方便复制，粘贴，查看，替换和分享等

## 一、区块 Schema
>JSON 简洁，可读性高，支持广泛。
每个页面的结构都类似一个倒立的树，该树的展示结构可以用 JSON 来描述，但 JSON 是静态的，很难描述动态的事件交互，所以在保留 JSON 结构的同时，使用 JS 在里面充当胶水，把结构和交互连接起来，其实整个 Schema 就是一个有 JSON 类似结构的 JS, 下面统一把整个 JS 称为 页面 schema，每个页面 schema 都是一个数组，其中每一项称为区块 Schema 。
其实每个区块 Schema 可以理解为一个 React node （或者它具备了被实例化为 React node 的必要信息）。
以下为常见的区块 Schema 表示方式：
1. JS 基本类型（undefined、null、number、boolean、string），其中 undefined/null/true/false 不渲染（类似 React https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored ），这些本身就是一个 React node，如：
  ```javascript
  [undefined, null, 123, true, false, 'string']
  ```

2. React element，也属于 React node 的一种类型，如:
  ```javascript
  [React.createElement('button', {}, 'submit')]
  ```

3. 可以是一个 JS 对象，可以描述更多信息，此时 type 是必须保留的字段，通过这些信息亦可以实例化成的一个 React node,如：
  ```javascript
  {
    // 组件信息，格式如 {命名空间};{npm名};{key}，渲染时会通过这些信息用 getComponent 获取真实的组件; 或者直接把 c 为一个 React 组件
    type: 'mui#@mui/material@5.8.3#Alert',
    // 组件属性
    props: {
      name: '名字',
      event: function(){
        console.log(Liam.get('name'));
      },
      renderEvent: function(){},
      node: {
        type: 'div',
        children: '内容'
      },
      // 以下 __ 开头的属性会注入到实例的 props 去，功能与 React 生命周期对应
      // 初始化实例时调用
      __init: function(){
      },
      // 挂载后调用
      __didMount: function(){
      },
      // 更新后调用
      __didUpdate: function(){
      },
      // 卸载前调用
      __willUnmount: function(){
      },
      // 渲染出错时调用
      __didCatch: function(){
      }

    },
    // 子元素，默认的静态插槽，如果children是一个函数，并且在 r 上指明它是渲染函数，则它也是一个动态插槽
    children: [],
    // 指明哪些属性为 node（schema表示） 节点，方便转化为真实 React Element，类似一个静态的插槽
    n: ['node'],
    // 指明哪些属性是渲染属性，返回的是 schema，渲染时会转化为真实的 React Element;类似一个动态的插槽
    r: ['renderEvent'],
    // 依赖的全局 state,如 name,当 name 更新时，对应组件变渲染更新
    s: ['name'],

    // -------------------------------------------
    // 是否允许包裹组件,如渲染时多包裹一个容器用于统计等，但可能会破坏组件设计，如 Tab 下面需要紧跟着 Tab.Pane，如果 Tab.Pane 被包裹则会报错
    w: false,
    // 当组件渲染返回的结果是 schema 时，自动转换成 React Element，默认为 true
    c: true
  }
  ```

4. 函数组件或类组件，都可以返回渲染区块 schema，直接不带参数来实例化这个组件亦可以得到一个 React node,如
  ```javascript
  function(){
    return {
      type: 'button',
      children: 'submit'
    }
  }
  // 等同于：
  {
    type: function(){
        return {
          type: 'button',
          children: 'submit'
        }
    }
  }
  ```
  ```javascript
  class extends React.Component{
    return {
      type: 'button',
      children: 'submit'
    }
  }
  // 等同于：
  {
    type: class extends React.Component{
      return {
        type: 'button',
        children: 'submit'
      }
    }
  }
  ```

5. resolve 内容为 区块 schema 的 Promise, 会实例化为一个 React 异步组件的实例，里面嵌套异步返回的真实的实例，如：
  ```javascript
  new Promise((resolve, reject) => {
    resolve({
      type: 'button',
      children: 'submit'
    });
  }),
  ```
6. 内置组件， require,  用于加载资源，如：
  ```javascript
  {
    type: 'require',
    props: {
      deps: ['https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js'],
      callback: (jQuery) => {
        console.log(jquery, 'require js 完成');
      }
    }
  }
  ```
7. 内置组件， js,  用于挂载时执行 js,并在卸载时清理 js，如：
  ```javascript
  {
    type: 'js',
    props: {
      js: function () {
        var timeId = setInterval(function () {
          document.title = new Date().getTime();
        }, 2e3);
        return function () {
          clearInterval(timeId);
        }
      }
    },
    children: 'js 子元素'
  }
  ```

8. 内置组件， css,  用于挂载时添加 css,并在卸载时删除 css，如：
  ```javascript
  {
    type: 'css',
    props: {
      css: `
      body{
        background:#eee;
        border: 2px solid yellow;
      }
      `
    },
    children: 'css 子元素'
  }
  ```

8. 另外，可以是一段可执行的js，如 Liam 的配置方法：
  ```javascript
  Liam.config({
      componentMap: {
          'HI': 'url#https://e.sinaimg.cn/u/8/48/503/6947228195741/headlessui.production.min.js'
      }
  });
  // 或
  Liam.config({
      states: {
          selectedPerson: 'Durward Reynolds',
          query: ''
      } 
  });
  ```

## 二、渲染引擎 Liam
1. Liam.config
  ```javascript
    Liam.config({
      // 全局 state
      states: {
        name: '名字'
      },
      // 组件名映射
      componentMap: {
          'HI': 'url#https://e.sinaimg.cn/u/8/48/503/6947228195741/headlessui.production.min.js'
      },
      // 获取属性，可返回真实的组件，或 resovle为组件的 Promise
      getComponent: function(ctx, next){
        // ... 可参考官方示例
      },
      // 以下 __ 开头的属性会注入到 *所有* 实例的 props 去，功能与 React 生命周期对应
      // 初始化实例时调用
      __init: function(){
      },
      // 挂载后调用
      __didMount: function(){
      },
      // 更新后调用
      __didUpdate: function(){
      },
      // 卸载前调用
      __willUnmount: function(){
      },
      // 渲染出错时调用
      __didCatch: function(){
      }
    })
  ```
2. Liam.render 类似 ReactDom.render
  ```javascript  
  Liam.render(schema, document.querySelector('#root'));
  ```
3. Liam.createElement 类似 React.createElement
  ```javascript
  Liam.createElement(schema);
  ```
4. Liam.set 和 Liam.get 用于设置和读取全局状态，如
  ```javascript
  Liam.set('name', 'wutiaoren');
  Liam.get('name');
  ```
  如果组件使用 schema. 设置了依赖的状态项，则该项值发生改变时，会触发对应的组件渲染，如：
  ```javascript
  // 有一个 schema 项：
  {
    type: function(){
      return 'Hello, '+Liam.get('name');
    },
    s: ['name']
  }
  // 在任何地方调用，上面的组件都会重复渲染
  Liam.set('name', 'wutiaoren');
  ```
  Liam.get 和 Liam.set 与 组件 state 与 setState 的区别和使用场景是：
    - Liam.get 和 Liam.set 可以跨组件，只要在同一个组件树下就可以生效。
    - 组件 state 和 setState 只在单一的组件里生效。
    - 当一个状态只在某一组件里使用时或者想让一个状态在某一范围（类似一个命名空间里）使用，可以创建一个组件，使用 state 即可，其中组件里亦可以使用区块 schema 渲染；
    - 当一个状态全局使用，则可以使用 Liam.get 和 Liam.set，方便子组件（树）分拆。

5. Liam.config 之 getComponent 的实现，getComponent 会接收一个区块 Schema（经过一定的转换处理） 做参数，getComponent 可以返回一个 React Component 或返回一个 Promise(异步组件)，如果是 Promise,这个Promise必须用一个 React Component 来 resolve。
  ```javascript
  Liam.config({
    getComponent: function (ctx, next) {
      const { schema } = ctx;
      if (schema.type && schema.type === 'Demo') {
        ctx.component = Demo;
      }
      next();
    }
  });
  ```


## 三、项目基本结构
```
.
├── package-lock.json
├── package.json
├── readme.md - 自述文件
├── rollup - 打包 lima 的配置文件
│   ├── base.js - 基础配置
│   ├── dev.js - 开发配置
│   └── prod.js - 产品配置

├── src - lima 源文件
│   ├── app-intro.js 依赖的框架和库
│   ├── event.js 事件
│   ├── getComponent.js 内容获取组件的方法
│   └── index.js 主文件
└── dist - lima umd 文件

```

## 四、TODO
1. 区块 schema 示例
2. 常用 react ui 库示例
3. 示例渲染使用 js
4. 常见页面类型示例
5. 现在 getComponent 使用的都是jsdeliver 或 unpkg 的资源，如何国内快速预览，如何转到自己的 cdn

## 五、目前缺少
1. 大量常见项目示例
2. 面对的和正常开发一样的问题，产品定型，只是用 json 来写更方便搭建（仅限于搭建，复杂逻辑一样）和分享。

## 六、常见问题
1. 为什么我设置了 schema.s 依赖项，当调用 Liam.set 时，组件没更新？ Liam.get 没写在组件里，转换工具
2. 为什么会报 *Objects are not valid as a React child* 错误？ 没有设置schema.c 转换schema 为 React node.
3. 为什么请求不到组件？requirejs.config 里的 paths，如果同一个 url 定义了两个不同的 path，请求时回调很可能不生效，甚至用 url 来请求回调也不生效




   
