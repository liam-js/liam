[
  (function(){

    // 一、阿里 fusion 组件
    requirejs.config({
      context: 'liam',
      paths: {
        'lowcode-materials': 'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.2/dist/AlilcLowcodeMaterials',
        '@alifd/next':'https://alifd.alicdn.com/npm/@alifd/next@1.25.41/dist/next.min',
        Next: 'https://g.alicdn.com/code/lib/alifd__next/1.23.22/next.min',
        moment: 'https://e.sinaimg.cn/ssfe/unpkg/moment@2.29.1/min/moment.min',
        proptypes: 'https://e.sinaimg.cn/ssfe/unpkg/prop-types@15.8.1/prop-types',
      },
      shim: {
        'lowcode-materials': {
          deps: [
            'css!https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.2/dist/AlilcLowcodeMaterials.css'
          ]
        },
        
      }
    })(['Next'], function (Next) {
      window.Next = Next;
    });


    Liam.config({
      componentMap: {
        materials: 'url#lowcode-materials',
      }
    })
  })(),
  {
    type: 'materials#Image',
    props: {
      src: 'https://img.alicdn.com/tps/TB16TQvOXXXXXbiaFXXXXXXXXXX-120-120.svg',
    },
  },
  {
    type: 'materials#NextText',
    props: {
      type: 'h5',
      children: '标题标题',
    },
  },
  {
    type: 'materials#NextText',
    props: {
      type: 'inherit',
      children:
        '基于 Ali-Lowcode-Engine 快速打造高生产力的低代码研发平台, 基于自然布局体系快速搭建页面',
    },
  }
  
];
