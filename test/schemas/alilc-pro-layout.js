[
  (function(){

    // 一、阿里 fusion 组件
    requirejs.config({
      context: 'liam',
      paths: {
        AlifdProLayout: 'https://alifd.alicdn.com/npm/@alifd/pro-layout@1.0.1-beta.6/dist/AlifdProLayout',
        '@alifd/next':'https://alifd.alicdn.com/npm/@alifd/next@1.25.41/dist/next.min',
        Next: 'https://g.alicdn.com/code/lib/alifd__next/1.23.22/next.min',
        moment: 'https://e.sinaimg.cn/ssfe/unpkg/moment@2.29.1/min/moment.min',
        proptypes: 'https://e.sinaimg.cn/ssfe/unpkg/prop-types@15.8.1/prop-types',
      },
      shim: {
        AlifdProLayout: {
          deps: [
            'css!https://alifd.alicdn.com/npm/@alifd/pro-layout@1.0.1-beta.6/dist/AlifdProLayout.css'
          ]
        },
        '@alifd/next': {
          deps: [
            'css!https://alifd.alicdn.com/npm/@alifd/next@1.25.41/dist/next.min.css',
          ]
        }
      }
    })(['Next'], function (Next) {
      window.Next = Next;
    });


    Liam.config({
      componentMap: {
        'pro-layout': 'url#AlifdProLayout'
      }
    })
  })(),
  
  {
    type: 'pro-layout#Page',
    props: {
      headerDivider: true,
      minHeight: '100vh',
      presetNav: true,
      presetAside: true,
      footer: false,
      nav: false,
      aside: false,
      placeholderStyle: {
        gridRowEnd: 'span 1',
        gridColumnEnd: 'span 12',
      },
      headerProps: {
        background: 'surface',
      },
    },
    children: []
  },
  {
    type: 'pro-layout#RowColContainer',
    props: {
      rowGap: 20,
      colGap: 20,
    },
    children: [
      {
        type: 'pro-layout#Row',
        props: {},
        children: [
          {
            type: 'pro-layout#Col',
            props: {
              colSpan: 1,
            },
          },
        ],
      },
    ],
  },
  {
    type: 'pro-layout#PageHeader',
    children: [
      {
        type: 'pro-layout#RowColContainer',
        props: {
          rowGap: 20,
          colGap: 20,
        },
        children: [
          {
            type: 'pro-layout#Row',
            props: {},
            children: [
              {
                type: 'pro-layout#Col',
                props: {
                  colSpan: 1,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'pro-layout#ProCard',
    props: {
      title: '标题',
      hasDivider: true,
      isFillContainer: true,
    },
  },
  {
    type: 'pro-layout#ProCard.CardSection',
    props: {
      title: '子标题',
      hasDivider: true,
      isFillContainer: true,
    },
    c: false
  },
  
];
