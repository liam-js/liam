[
  {
    type: 'h2',
    children: 'JS 基本类型',
  },
  {
    type: 'p',
    children: '包括 undefined、null、number、boolean、string），其中 undefined/null/true/false 不渲染，这些本身就是一个 React node',
  },
  [undefined, null, 123,' | ', true,' | ', 'string'],
  {
    type: 'hr',
  },
  {
    type: 'h2',
    children: 'React element',
  },
  {
    type: 'p',
    children: '也属于 React node 的一种类型',
  },
  React.createElement('button', {}, 'submit'),
  {
    type: 'hr',
  },
  {
    type: 'h2',
    children: 'JS 对象',
  },
  {
    type: 'p',
    children: '也属于 React node 的一种类型',
  },
  {
      type: 'url#https://e.sinaimg.cn/ssfe/unpkg/@mui/material@5.8.3/umd/material-ui.production.min.js#Alert',
      props: {
          severity: 'success'
      },
      children: 'This is a success message!'
  },
        
  {
    type: 'hr',
  },
  {
    type: 'h2',
    children: 'JS 函数等返回结果',
  },
  {
    type: 'p',
    children: '只要最终执行后返回的结果是可渲染的 schema 即可，甚至返回一个 promise 而，promise resolve 的结果是 schema 即可',
  },
location.href,
{
    type:'br'
},
(function(){
    return new Date().toLocaleTimeString()
})(),
{
    type:'br'
},
new Promise(function(resolve){
    setTimeout(() => {
        resolve(Math.random()*100)
    }, 1e3);
}),
        
  {
    type: 'hr',
  },
        
]