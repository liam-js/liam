[
  (function(){
    requirejs.config({
      context: 'liam',
      paths: {
        AlifdProLayout: 'https://alifd.alicdn.com/npm/@alifd/pro-layout@1.0.1-beta.6/dist/AlifdProLayout',
        AlifdFusionUi: 'https://alifd.alicdn.com/npm/@alifd/fusion-ui@1.0.5/dist/AlifdFusionUi',
        'lowcode-materials': 'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.2/dist/AlilcLowcodeMaterials',
        antd:'https://unpkg.com/antd@4.22.5/dist/antd.min',
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
        AlifdFusionUi: {
          deps: [
            'css!https://alifd.alicdn.com/npm/@alifd/fusion-ui@1.0.5/dist/AlifdFusionUi.css'
          ]
        },
        'lowcode-materials': {
          deps: [
            'css!https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.2/dist/AlilcLowcodeMaterials.css'
          ]
        },
        antd: {
          deps: [
            'css!https://unpkg.com/antd@4.22.5/dist/antd.min.css'
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
        fusion: 'url#AlifdFusionUi',
        materials: 'url#lowcode-materials',
        'pro-layout': 'url#AlifdProLayout',
        next: 'url#@alifd/next',
        antd: 'url#antd'
        
      }
    })
  })(),
  
  {
    type: 'fusion#AnchorForm',
    props: {
      showAnchor: true,
      anchorProps: {
        direction: 'hoz',
      },
    },
    children: [
      {
        type: 'fusion#ChildForm',
        props: {
          columns: 2,
          mode: 'independent',
          anchorItemProps: {
            htmlId: 'id-2q7dh8',
            label: 'Tab1',
          },
          cardSectionProps: {
            noBullet: true,
          },
          operationConfig: {},
          labelCol: {
            fixedSpan: 4,
          },
          labelAlign: 'top',
        },
        children: [
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-v18oui',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-8vem8i',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-c930rl',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-1961de',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
        ],
      },
      {
        type: 'fusion#ChildForm',
        props: {
          mode: 'independent',
          anchorItemProps: {
            htmlId: 'id-2uu03p',
            label: 'Tab2',
          },
          cardSectionProps: {
            noBullet: true,
          },
          columns: 2,
          operationConfig: {},
          labelCol: {
            fixedSpan: 4,
          },
          labelAlign: 'top',
        },
        children: [
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-8xgjw5',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-bd42ce',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-euka7y',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-6hfb05',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
        ],
      },
      {
        type: 'fusion#ChildForm',
        props: {
          mode: 'independent',
          anchorItemProps: {
            htmlId: 'id-3iwi4o',
            label: 'Tab3',
          },
          cardSectionProps: {
            noBullet: true,
          },
          columns: 2,
          operationConfig: {},
          labelCol: {
            fixedSpan: 4,
          },
          labelAlign: 'top',
        },
        children: [
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-njqjb8',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-yqo6sk',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-hvvrs8',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-ph9w5o',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
        ],
      },
      {
        type: 'fusion#ChildForm',
        props: {
          mode: 'independent',
          anchorItemProps: {
            htmlId: 'id-0ns01i',
            label: 'Tab4',
          },
          cardSectionProps: {
            noBullet: true,
          },
          columns: 2,
          operationConfig: {},
          labelCol: {
            fixedSpan: 4,
          },
          labelAlign: 'top',
        },
        children: [
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-3qcusr',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-vhrzzq',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-l95v9n',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-rr40cm',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
        ],
      },
    ],
  },
  {
    type: 'fusion#Anchor',
  },
  {
    type: 'fusion#ProCard',
    props: {
      title: '?????????',
      hasDivider: true,
      isFillContainer: true,
    },
    children: [
      {
        type: 'fusion#AreaChart',
        props: {
          data: [
            {
              year: '1991',
              value: 72345678,
            },
            {
              year: '1992',
              value: 4321132,
            },
            {
              year: '1993',
              value: 33121112.5,
            },
            {
              year: '1994',
              value: 45227221,
            },
            {
              year: '1995',
              value: 4321221.9,
            },
            {
              year: '1996',
              value: 6322121,
            },
            {
              year: '1997',
              value: 78312213,
            },
            {
              year: '1998',
              value: 4192312,
            },
            {
              year: '1999',
              value: 6212332,
            },
            {
              year: '2000',
              value: 3192312,
            },
          ],
          xField: 'year',
          yField: 'value',
          color: '#0079f2',
          label: {
            visible: true,
          },
        },
      },
    ],
  },
  {
    type: 'fusion#ProCard',
    props: {
      title: '?????????',
      hasDivider: true,
      isFillContainer: true,
    },
    children: [
      {
        type: 'fusion#BarChart',
        props: {
          data: [
            {
              year: '1991',
              value: 72345678,
            },
            {
              year: '1992',
              value: 4321132,
            },
            {
              year: '1993',
              value: 33121112.5,
            },
            {
              year: '1994',
              value: 45227221,
            },
            {
              year: '1995',
              value: 4321221.9,
            },
            {
              year: '1996',
              value: 6322121,
            },
            {
              year: '1997',
              value: 78312213,
            },
            {
              year: '1998',
              value: 4192312,
            },
            {
              year: '1999',
              value: 6212332,
            },
            {
              year: '2000',
              value: 3192312,
            },
          ],
          xField: 'value',
          yField: 'year',
          color: '#0079f2',
          label: {
            visible: true,
            position: 'middle',
          },
        },
      },
    ],
  },
  {
    type: 'fusion#FormCascaderSelect',
  },
  {
    type: 'fusion#FormCheckboxGroup',
  },
  {
    type: 'fusion#ChildForm',
    props: {
      primaryKey: '916',
      placeholder: '?????????????????????????????????+',
      placeholderStyle: {
        height: '38px',
        color: '#0088FF',
        background: '#d8d8d836',
        border: 0,
        gridArea: 'span 4 / span 4',
      },
      columns: 3,
      labelCol: {
        fixedSpan: 4,
      },
      labelAlign: 'top',
      emptyContent: '???????????????',
    },
    children: [
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '6833',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '3125',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '1348',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
    ],
  },
  {
    type: 'fusion#ProCard',
    props: {
      title: '?????????',
      hasDivider: true,
      isFillContainer: true,
    },
    children: [
      {
        type: 'fusion#ColumnChart',
        props: {
          data: [
            {
              year: '1991',
              value: 72345678,
            },
            {
              year: '1992',
              value: 4321132,
            },
            {
              year: '1993',
              value: 33121112.5,
            },
            {
              year: '1994',
              value: 45227221,
            },
            {
              year: '1995',
              value: 4321221.9,
            },
            {
              year: '1996',
              value: 6322121,
            },
            {
              year: '1997',
              value: 78312213,
            },
            {
              year: '1998',
              value: 4192312,
            },
            {
              year: '1999',
              value: 6212332,
            },
            {
              year: '2000',
              value: 3192312,
            },
          ],
          xField: 'year',
          yField: 'value',
          color: '#0079f2',
          label: {
            visible: true,
            position: 'middle',
          },
        },
      },
    ],
  },
  {
    type: 'fusion#FormDatePicker',
  },
  {
    type: 'fusion#ProCard',
    props: {
      title: '?????????',
      hasDivider: true,
      isFillContainer: true,
    },
    children: [
      {
        type: 'fusion#DonutChart',
        props: {
          legend: {
            position: 'top-left',
          },
          data: [
            {
              year: '1991',
              value: 72345678,
            },
            {
              year: '1992',
              value: 4321132,
            },
            {
              year: '1993',
              value: 33121112.5,
            },
            {
              year: '1994',
              value: 45227221,
            },
            {
              year: '1995',
              value: 4321221.9,
            },
            {
              year: '1996',
              value: 6322121,
            },
            {
              year: '1997',
              value: 78312213,
            },
            {
              year: '1998',
              value: 2192312,
            },
            {
              year: '1999',
              value: 6212332,
            },
            {
              year: '2000',
              value: 1192312,
            },
          ],
          angleField: 'value',
          colorField: 'year',
          label: {
            visible: true,
            type: 'spider',
          },
          color: [
            '#3BCBD1',
            '#47A4FE',
            '#EDBA42',
            '#F4704E',
            '#ED6899',
            '#7F62C3',
            '#6E7BC9',
          ],
        },
      },
    ],
  },
  {
    type: 'fusion#EditTable',
    props: {
      dataSource: [
        {
          id: 'id-2f5DdE2b-0',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '???????????????????????????',
        },
        {
          id: 'id-2f5DdE2b-1',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '???????????????????????????',
        },
        {
          id: 'id-2f5DdE2b-2',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '???????????????????????????',
        },
        {
          id: 'id-2f5DdE2b-3',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '???????????????????????????',
        },
        {
          id: 'id-2f5DdE2b-4',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '???????????????????????????',
        },
      ],
      actionColumnButtons: {
        text: true,
        visibleButtonCount: 3,
      },
      actionBarButtons: {
        dataSource: [
          {
            type: 'primary',
            children: '?????????',
          },
          {
            type: 'normal',
            children: '?????????',
          },
        ],
        visibleButtonCount: 3,
      },
      paginationProps: {
        pageSize: 20,
        current: 1,
      },
      settingButtons: true,
      columns: [
        {
          title: '??????',
          dataIndex: 'company',
          width: 160,
          formatType: 'link',
          searchable: true,
        },
        {
          title: '????????????',
          dataIndex: 'documentAmount',
          formatType: 'money',
        },
        {
          title: '??????',
          dataIndex: 'currency',
          formatType: 'currency',
          filters: [
            {
              label: 'CNY',
              value: 'CNY',
            },
            {
              label: 'USD',
              value: 'USD',
            },
            {
              label: 'JPY',
              value: 'JPY',
            },
            {
              label: 'HKD',
              value: 'HKD',
            },
          ],
          filterMode: 'multiple',
          explanation: '????????????',
          width: 110,
        },
        {
          title: '????????????',
          dataIndex: 'percent',
          formatType: 'progress',
        },
        {
          title: '????????????',
          dataIndex: 'date',
          formatType: 'date',
        },
      ],
    },
  },
  {
    type: 'fusion#ExpandTable',
    props: {
      dataSource: [
        {
          id: 'id-2f5DdE2b-0',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '???????????????????????????',
          childTableProps: {
            dataSource: [],
            columns: [
              {
                title: '??????',
                dataIndex: 'company',
                width: 160,
                formatType: 'link',
                searchable: true,
              },
              {
                title: '????????????',
                dataIndex: 'documentAmount',
                formatType: 'money',
              },
              {
                title: '??????',
                dataIndex: 'currency',
                formatType: 'currency',
                filters: [
                  {
                    label: 'CNY',
                    value: 'CNY',
                  },
                  {
                    label: 'USD',
                    value: 'USD',
                  },
                  {
                    label: 'JPY',
                    value: 'JPY',
                  },
                  {
                    label: 'HKD',
                    value: 'HKD',
                  },
                ],
                filterMode: 'multiple',
                explanation: '????????????',
                width: 110,
              },
              {
                title: '????????????',
                dataIndex: 'percent',
                formatType: 'progress',
              },
              {
                title: '????????????',
                dataIndex: 'date',
                formatType: 'date',
              },
            ],
          },
        },
        {
          id: 'id-2f5DdE2b-1',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '???????????????????????????',
          childTableProps: {
            dataSource: [],
            columns: [
              {
                title: '??????',
                dataIndex: 'company',
                width: 160,
                formatType: 'link',
                searchable: true,
              },
              {
                title: '????????????',
                dataIndex: 'documentAmount',
                formatType: 'money',
              },
              {
                title: '??????',
                dataIndex: 'currency',
                formatType: 'currency',
                filters: [
                  {
                    label: 'CNY',
                    value: 'CNY',
                  },
                  {
                    label: 'USD',
                    value: 'USD',
                  },
                  {
                    label: 'JPY',
                    value: 'JPY',
                  },
                  {
                    label: 'HKD',
                    value: 'HKD',
                  },
                ],
                filterMode: 'multiple',
                explanation: '????????????',
                width: 110,
              },
              {
                title: '????????????',
                dataIndex: 'percent',
                formatType: 'progress',
              },
              {
                title: '????????????',
                dataIndex: 'date',
                formatType: 'date',
              },
            ],
          },
        },
        {
          id: 'id-2f5DdE2b-2',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '???????????????????????????',
          childTableProps: {
            dataSource: [],
            columns: [
              {
                title: '??????',
                dataIndex: 'company',
                width: 160,
                formatType: 'link',
                searchable: true,
              },
              {
                title: '????????????',
                dataIndex: 'documentAmount',
                formatType: 'money',
              },
              {
                title: '??????',
                dataIndex: 'currency',
                formatType: 'currency',
                filters: [
                  {
                    label: 'CNY',
                    value: 'CNY',
                  },
                  {
                    label: 'USD',
                    value: 'USD',
                  },
                  {
                    label: 'JPY',
                    value: 'JPY',
                  },
                  {
                    label: 'HKD',
                    value: 'HKD',
                  },
                ],
                filterMode: 'multiple',
                explanation: '????????????',
                width: 110,
              },
              {
                title: '????????????',
                dataIndex: 'percent',
                formatType: 'progress',
              },
              {
                title: '????????????',
                dataIndex: 'date',
                formatType: 'date',
              },
            ],
          },
        },
      ],
      actionColumnButtons: {
        dataSource: [
          {
            children: '??????',
            type: 'primary',
          },
          {
            children: '??????',
            type: 'primary',
            disabled: true,
          },
          {
            children: '??????',
            type: 'primary',
          },
        ],
        text: true,
        visibleButtonCount: 3,
      },
      actionBarButtons: {
        dataSource: [
          {
            type: 'primary',
            children: '?????????',
          },
          {
            type: 'normal',
            children: '?????????',
          },
        ],
        visibleButtonCount: 3,
      },
      paginationProps: {
        pageSize: 20,
        current: 1,
      },
      settingButtons: true,
      columns: [
        {
          title: '??????',
          dataIndex: 'company',
          width: 160,
          formatType: 'link',
          searchable: true,
        },
        {
          title: '????????????',
          dataIndex: 'documentAmount',
          formatType: 'money',
        },
        {
          title: '??????',
          dataIndex: 'currency',
          formatType: 'currency',
          filters: [
            {
              label: 'CNY',
              value: 'CNY',
            },
            {
              label: 'USD',
              value: 'USD',
            },
            {
              label: 'JPY',
              value: 'JPY',
            },
            {
              label: 'HKD',
              value: 'HKD',
            },
          ],
          filterMode: 'multiple',
          explanation: '????????????',
          width: 110,
        },
        {
          title: '????????????',
          dataIndex: 'percent',
          formatType: 'progress',
        },
        {
          title: '????????????',
          dataIndex: 'date',
          formatType: 'date',
        },
      ],
    },
  },
  {
    type: 'fusion#FilterItem',
  },
  {
    type: 'fusion#Filter',
    props: {
      labelAlign: 'top',
    },
    children: [
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '9770',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '4635',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '2178',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '1257',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
    ],
    c: false
  },
  {
    type: 'fusion#GroupTable',
    props: {
      dataSource: [
        {
          header: '????????????',
          footer: '????????????',
          children: [
            {
              company: '???????????????????????????',
              documentAmount: 2022,
              currency: 'CNY',
              percent: 1.862,
              date: '2013-06-12',
              id: 'id-2f5DdE2b-0',
            },
            {
              company: '???????????????????????????',
              documentAmount: 2022,
              currency: 'CNY',
              percent: 1.862,
              date: '2013-06-12',
              id: 'id-2f5DdE2b-0',
            },
          ],
        },
        {
          header: '????????????2',
          footer: '????????????2',
          children: [
            {
              company: '???????????????????????????',
              documentAmount: 2022,
              currency: 'CNY',
              percent: 1.862,
              date: '2013-06-12',
              id: 'id-2f5DdE2b-0',
            },
            {
              company: '???????????????????????????',
              documentAmount: 2022,
              currency: 'CNY',
              percent: 1.862,
              date: '2013-06-12',
              id: 'id-2f5DdE2b-0',
            },
            {
              company: '???????????????????????????',
              documentAmount: 2022,
              currency: 'CNY',
              percent: 1.862,
              date: '2013-06-12',
              id: 'id-2f5DdE2b-0',
            },
            {
              company: '???????????????????????????',
              documentAmount: 2022,
              currency: 'CNY',
              percent: 1.862,
              date: '2013-06-12',
              id: 'id-2f5DdE2b-0',
            },
          ],
        },
      ],
      actionColumnButtons: {
        dataSource: [
          {
            children: '??????',
            type: 'primary',
          },
          {
            children: '??????',
            type: 'primary',
            disabled: true,
          },
          {
            children: '??????',
            type: 'primary',
          },
        ],
        text: true,
        visibleButtonCount: 3,
      },
      actionBarButtons: {
        dataSource: [
          {
            type: 'primary',
            children: '?????????',
          },
          {
            type: 'normal',
            children: '?????????',
          },
        ],
        visibleButtonCount: 3,
      },
      paginationProps: {
        pageSize: 20,
        current: 1,
      },
      settingButtons: true,
      columns: [
        {
          title: '??????',
          dataIndex: 'company',
          width: 160,
          formatType: 'link',
          searchable: true,
        },
        {
          title: '????????????',
          dataIndex: 'documentAmount',
          formatType: 'money',
        },
        {
          title: '??????',
          dataIndex: 'currency',
          formatType: 'currency',
          filters: [
            {
              label: 'CNY',
              value: 'CNY',
            },
            {
              label: 'USD',
              value: 'USD',
            },
            {
              label: 'JPY',
              value: 'JPY',
            },
            {
              label: 'HKD',
              value: 'HKD',
            },
          ],
          filterMode: 'multiple',
          explanation: '????????????',
          width: 110,
        },
        {
          title: '????????????',
          dataIndex: 'percent',
          formatType: 'progress',
        },
        {
          title: '????????????',
          dataIndex: 'date',
          formatType: 'date',
        },
      ],
    },
  },
  {
    type: 'fusion#FormInput',
  },
  {
    type: 'fusion#ProCard',
    props: {
      title: '?????????',
      hasDivider: true,
      isFillContainer: true,
    },
    children: [
      {
        type: 'fusion#LineChart',
        props: {
          data: [
            {
              year: '1991',
              value: 72345678,
            },
            {
              year: '1992',
              value: 4321132,
            },
            {
              year: '1993',
              value: 33121112.5,
            },
            {
              year: '1994',
              value: 45227221,
            },
            {
              year: '1995',
              value: 4321221.9,
            },
            {
              year: '1996',
              value: 6322121,
            },
            {
              year: '1997',
              value: 78312213,
            },
            {
              year: '1998',
              value: 4192312,
            },
            {
              year: '1999',
              value: 6212332,
            },
            {
              year: '2000',
              value: 3192312,
            },
          ],
          xField: 'year',
          yField: 'value',
          color: '#0079f2',
          label: {
            visible: true,
          },
        },
      },
    ],
  },
  // {
  //   type: 'fusion#MonthPicker',
  // },
  {
    type: 'fusion#FormNumberPicker',
  },
  {
    type: 'fusion#PageHeader',
    props: {
      title: 'This is a designer title',
      subTitle: '',
      breadcrumb: ['??????', '??????'],
      operations: [
        {
          content: '?????????',
          action: 'custom',
          type: 'secondary',
        },
        {
          content: '?????????',
          action: 'custom',
          type: 'secondary',
        },
      ],
    },
  },
  {
    type: 'fusion#ProCard',
    props: {
      title: '??????',
      hasDivider: true,
      isFillContainer: true,
    },
    children: [
      {
        type: 'fusion#PieChart',
        title: '??????',
        props: {
          legend: {
            position: 'top-left',
          },
          data: [
            {
              year: '1991',
              value: 72345678,
            },
            {
              year: '1992',
              value: 4321132,
            },
            {
              year: '1993',
              value: 33121112.5,
            },
            {
              year: '1994',
              value: 45227221,
            },
            {
              year: '1995',
              value: 4321221.9,
            },
            {
              year: '1996',
              value: 6322121,
            },
            {
              year: '1997',
              value: 78312213,
            },
            {
              year: '1998',
              value: 2192312,
            },
            {
              year: '1999',
              value: 6212332,
            },
            {
              year: '2000',
              value: 1192312,
            },
          ],
          angleField: 'value',
          colorField: 'year',
          label: {
            visible: true,
            type: 'spider',
          },
          color: [
            '#3BCBD1',
            '#47A4FE',
            '#EDBA42',
            '#F4704E',
            '#ED6899',
            '#7F62C3',
            '#6E7BC9',
          ],
        },
      },
    ],
  },
  {
    type: 'fusion#ProCard',
    props: {
      title: '??????',
      hasDivider: true,
      isFillContainer: true,
    },
  },
  {
    type: 'pro-layout#ProCard.CardSection',
    props: {
      title: '?????????',
      hasDivider: true,
      isFillContainer: true,
    },
    c: false
  },
  {
    type: 'fusion#ProDialog',
    props: {
      status: 'success',
      size: 'medium',
      prefix: 'next-',
      footerAlign: 'right',
      title: 'Title',
      closeMode: ['esc', 'close'],
      hasMask: true,
      align: 'cc cc',
      minMargin: 40,
      isAutoContainer: true,
      visible: false,
      iconType: 'prompt',
      explanation: '????????????',
      operationConfig: {
        align: 'right',
      },
      operations: [
        {
          action: 'ok',
          type: 'primary',
          content: '??????',
        },
        {
          action: 'cancel',
          type: 'normal',
          content: '??????',
        },
      ],
    },
  },
  {
    type: 'fusion#ProDrawer',
    props: {
      prefix: 'next-',
      title: '????????????',
      triggerType: 'click',
      closeable: true,
      placement: 'right',
      hasMask: true,
      isAutoContainer: true,
      visible: true,
      size: 'medium',
      operationConfig: {
        align: 'right',
        fixed: true,
      },
      operations: [
        {
          action: 'ok',
          type: 'primary',
          content: '??????',
        },
        {
          action: 'cancel',
          type: 'normal',
          content: '??????',
        },
      ],
    },
  },
  {
    type: 'fusion#ProForm',
    props: {
      placeholder: '?????????????????????????????????+',
      placeholderStyle: {
        height: '38px',
        color: '#0088FF',
        background: '#d8d8d836',
        border: 0,
        gridArea: 'span 4 / span 4',
      },
      columns: 4,
      labelCol: {
        fixedSpan: 4,
      },
      labelAlign: 'top',
      emptyContent: '???????????????',
    },
    children: [
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '2469',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '6438',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '8187',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '4067',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '9768',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '5814',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '2064',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '6242',
            label: '?????????',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '?????????',
        },
      },
    ],
  },
  {
    type: 'fusion#ProForm.Item',
  },
  {
    type: 'fusion#FormPassword',
  },
  {
    type: 'fusion#FormTextArea',
  },
  {
    type: 'fusion#ProTableSlot',
  },
  {
    type: 'fusion#ProTable',
    props: {
      dataSource: [
        {
          id: 'id-2f5DdE2b-0',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '???????????????????????????',
        },
        {
          id: 'id-2f5DdE2b-1',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '???????????????????????????',
        },
      ],
      actionColumnButtons: {
        dataSource: [
          {
            children: '??????',
            type: 'primary',
          },
          {
            children: '??????',
            type: 'primary',
            disabled: true,
          },
          {
            children: '??????',
            type: 'primary',
          },
        ],
        text: true,
        visibleButtonCount: 3,
      },
      actionBarButtons: {
        dataSource: [
          {
            type: 'primary',
            children: '?????????',
          },
          {
            type: 'normal',
            children: '?????????',
          },
        ],
        visibleButtonCount: 3,
      },
      paginationProps: {
        pageSize: 20,
        current: 1,
      },
      settingButtons: true,
      columns: [
        {
          title: '??????',
          dataIndex: 'company',
          width: 160,
          formatType: 'link',
          searchable: true,
        },
        {
          title: '????????????',
          dataIndex: 'documentAmount',
          formatType: 'money',
        },
        {
          title: '??????',
          dataIndex: 'currency',
          formatType: 'currency',
          filters: [
            {
              label: 'CNY',
              value: 'CNY',
            },
            {
              label: 'USD',
              value: 'USD',
            },
            {
              label: 'JPY',
              value: 'JPY',
            },
            {
              label: 'HKD',
              value: 'HKD',
            },
          ],
          filterMode: 'multiple',
          explanation: '????????????',
          width: 110,
        },
        {
          title: '????????????',
          dataIndex: 'percent',
          formatType: 'progress',
        },
        {
          title: '????????????',
          dataIndex: 'date',
          formatType: 'date',
        },
      ],
    },
  },
  {
    type: 'fusion#ProTable',
    props: {
      isTree: true,
      dataSource: [
        {
          id: 'id-2f5DdE2b-0',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '???????????????????????????',
          children: [
            {
              id: '2f5DdE2b-5Aee-c43c-e1db-0-0',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '???????????????????????????',
            },
            {
              id: '2f5DdE2b-5Aee-c43c-e1db-0-1',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '???????????????????????????',
            },
          ],
        },
        {
          id: 'id-2f5DdE2b-1',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '???????????????????????????',
          children: [
            {
              id: '2f5DdE2b-5Aee-c43c-e1db-1-0',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '???????????????????????????',
            },
            {
              id: '2f5DdE2b-5Aee-c43c-e1db-1-1',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '???????????????????????????',
            },
          ],
        },
      ],
      columns: [
        {
          title: '??????',
          dataIndex: 'company',
          width: 160,
          formatType: 'link',
          searchable: true,
        },
        {
          title: '????????????',
          dataIndex: 'documentAmount',
          formatType: 'money',
        },
        {
          title: '??????',
          dataIndex: 'currency',
          formatType: 'currency',
          filters: [
            {
              label: 'CNY',
              value: 'CNY',
            },
            {
              label: 'USD',
              value: 'USD',
            },
            {
              label: 'JPY',
              value: 'JPY',
            },
            {
              label: 'HKD',
              value: 'HKD',
            },
          ],
          filterMode: 'multiple',
          explanation: '????????????',
          width: 110,
        },
        {
          title: '????????????',
          dataIndex: 'percent',
          formatType: 'progress',
        },
        {
          title: '????????????',
          dataIndex: 'date',
          formatType: 'date',
        },
      ],
    },
  },
  {
    type: 'fusion#ProTableSlot',
  },
  {
    type: 'fusion#FormRadioGroup',
  },
  {
    type: 'fusion#FormRangePicker',
  },
  {
    type: 'fusion#FormRating',
  },
  {
    type: 'fusion#FormSelect',
  },
  {
    type: 'fusion#StepForm',
    props: {
      current: 0,
      operations: [
        {
          content: '?????????',
          action: 'previous',
          type: 'secondary',
        },
        {
          content: '?????????',
          action: 'next',
          type: 'primary',
        },
      ],
    },
    children: [
      {
        type: 'fusion#ProForm',
        props: {
          stepItemProps: {
            title: 'StepItem',
          },
        },
        children: [
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: '3048',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: '5168',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: '5543',
                label: '?????????',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '?????????',
            },
          },
        ],
      },
      {
        type: 'fusion#ProForm',
        props: {
          stepItemProps: {
            title: 'StepItem',
          },
        },
        children: [
          {
            type: 'fusion#ProForm.Item',
            props: {
              primaryKey: '5759',
              label: '?????????',
              size: 'medium',
              device: 'desktop',
            },
          },
          {
            type: 'fusion#ProForm.Item',
            props: {
              primaryKey: '329',
              label: '?????????',
              size: 'medium',
              device: 'desktop',
            },
          },
          {
            type: 'fusion#ProForm.Item',
            props: {
              primaryKey: '9120',
              label: '?????????',
              size: 'medium',
              device: 'desktop',
            },
          },
        ],
      },
    ],
  },
  {
    type: 'materials#Step.Item',
  },
  {
    type: 'fusion#StoryPlaceholder',
    props: {
      title: '??????????????????',
      content: {
        subject: '????????????',
        hideTitle: false,
        description:
          '<p><span>- ??????????????????????????????</span><br /><span>- ????????????????????????</span></p>',
      },
    },
  },
  {
    type: 'fusion#TabContainer',
    props: {
      shape: 'pure',
      size: 'medium',
      excessMode: 'slide',
    },
    children: [
      {
        type: 'fusion#TabContainer.Item',
        props: {
          title: '?????????1',
          primaryKey: 'tab-item-1',
        },
      },
      {
        type: 'fusion#TabContainer.Item',
        props: {
          title: '?????????2',
          primaryKey: 'tab-item-2',
        },
      },
    ],
  },
  {
    type: 'fusion#TabContainer.Item',
  },
  {
    type: 'fusion#FormTreeSelect',
  },
  {
    type: 'fusion#FormUpload',
  },

  {
    type: 'materials#Message',
    props: {
      title: 'Alert',
      type: 'warning',
      shape: 'inline',
      size: 'medium',
      visible: true,
      animation: true,
      children:
        'This item already has the label \'travel\', you can add a new label.',
    },
  },
  {
    type: 'materials#Avatar',
    props: {
      prefix: 'next-',
      size: 'medium',
      shape: 'circle',
      icon: 'smile',
    },
  },
  {
    type: 'materials#Badge',
    props: {
      prefix: 'next-',
      showZero: true,
    },
  },
  // {
  //   type: 'next#BalloonInner',
  // },
  // {
  //   type: 'materials#Balloon',
  //   props: {
  //     defaultVisible: true,
  //     prefix: 'next-',
  //     size: 'medium',
  //     type: 'normal',
  //     closable: true,
  //     align: 'b',
  //     offset: [0, 0],
  //     triggerType: 'hover',
  //     autoFocus: true,
  //     trigger: {
  //       type: 'JSSlot',
  //       props: {
  //         title: '????????????',
  //       },
  //     },
  //   },
  // },
  {
    type: 'materials#Box',
    props: {},
  },
  {
    type: 'materials#Breadcrumb.Item',
  },
  {
    type: 'materials#Breadcrumb',
    props: {
      maxNode: 100,
      type: 'nav',
    },
    children: [
      {
        type: 'materials#Breadcrumb.Item',
        props: {
          children: '??????',
          primaryKey: 'breadcrumb-item-1',
          target: '_self',
        },
      },
      {
        type: 'materials#Breadcrumb.Item',
        props: {
          children: '??????',
          primaryKey: 'breadcrumb-item-2',
          target: '_self',
        },
      },
      {
        type: 'materials#Breadcrumb.Item',
        props: {
          children: '??????',
          primaryKey: 'breadcrumb-item-3',
          target: '_self',
        },
      },
    ],
  },
  {
    type: 'materials#Button.Group',
  },
  {
    type: 'materials#Button',
    props: {
      prefix: 'next-',
      type: 'primary',
      size: 'medium',
      htmlType: 'button',
      // type: 'button',
      children: '??????',
    },
  },
  {
    type: 'materials#SplitButton',
    props: {
      prefix: 'next-',
      type: 'normal',
      size: 'medium',
      label: [
        {
          type: 'materials#Typography.Text',
          props: {
            children: 'Edit Document',
            style: {
              color: 'inherit',
            },
          },
        },
      ],
      defaultSelectedKeys: [],
      autoWidth: true,
      popupTriggerType: 'click',
      plainData: 'Edit Document\n\tUndo\n\tRedo\n\tCut\n\tCopy\n\tPaste',
    },
    n: 'label',
    children: [
      {
        type: 'materials#Menu.Item',
        props: {
          key: '0-0',
          checked: false,
          disabled: false,
        },
        children: [
          {
            type: 'materials#Typography.Text',
            props: {
              children: 'Undo',
              style: {
                color: 'inherit',
              },
            },
          },
        ],
      },
      {
        type: 'materials#Menu.Item',
        props: {
          key: '0-1',
          checked: false,
          disabled: false,
        },
        children: [
          {
            type: 'materials#Typography.Text',
            props: {
              children: 'Redo',
              style: {
                color: 'inherit',
              },
            },
          },
        ],
      },
      {
        type: 'materials#Menu.Item',
        props: {
          key: '0-2',
          checked: false,
          disabled: false,
        },
        children: [
          {
            type: 'materials#Typography.Text',
            props: {
              children: 'Cut',
              style: {
                color: 'inherit',
              },
            },
          },
        ],
      },
      {
        type: 'materials#Menu.Item',
        props: {
          key: '0-3',
          checked: false,
          disabled: false,
        },
        children: [
          {
            type: 'materials#Typography.Text',
            props: {
              children: 'Copy',
              style: {
                color: 'inherit',
              },
            },
          },
        ],
      },
      {
        type: 'materials#Menu.Item',
        props: {
          key: '0-4',
          checked: false,
          disabled: false,
        },
        children: [
          {
            type: 'materials#Typography.Text',
            props: {
              children: 'Paste',
              style: {
                color: 'inherit',
              },
            },
          },
        ],
      },
    ]
  },
  {
    type: 'materials#MenuButton',
    props: {
      prefix: 'next-',
      type: 'normal',
      size: 'medium',
      label: [
        {
          type: 'materials#Typography.Text',
          props: {
            children: 'Edit Document',
            style: {
              color: 'inherit',
            },
          },
        },
      ],
      defaultSelectedKeys: [],
      autoWidth: true,
      popupTriggerType: 'click',
      plainData: 'Edit Document\n\tUndo\n\tRedo\n\tCut\n\tCopy\n\tPaste',
    },
    n: 'label',
    children: [
      {
        type: 'materials#Menu.Item',
        props: {
          key: '0-0',
          checked: false,
          disabled: false,
        },
        children: [
          {
            type: 'materials#Typography.Text',
            props: {
              children: 'Undo',
              style: {
                color: 'inherit',
              },
            },
          },
        ],
      },
      {
        type: 'materials#Menu.Item',
        props: {
          key: '0-1',
          checked: false,
          disabled: false,
        },
        children: [
          {
            type: 'materials#Typography.Text',
            props: {
              children: 'Redo',
              style: {
                color: 'inherit',
              },
            },
          },
        ],
      },
      {
        type: 'materials#Menu.Item',
        props: {
          key: '0-2',
          checked: false,
          disabled: false,
        },
        children: [
          {
            type: 'materials#Typography.Text',
            props: {
              children: 'Cut',
              style: {
                color: 'inherit',
              },
            },
          },
        ],
      },
      {
        type: 'materials#Menu.Item',
        props: {
          key: '0-3',
          checked: false,
          disabled: false,
        },
        children: [
          {
            type: 'materials#Typography.Text',
            props: {
              children: 'Copy',
              style: {
                color: 'inherit',
              },
            },
          },
        ],
      },
      {
        type: 'materials#Menu.Item',
        props: {
          key: '0-4',
          checked: false,
          disabled: false,
        },
        children: [
          {
            type: 'materials#Typography.Text',
            props: {
              children: 'Paste',
              style: {
                color: 'inherit',
              },
            },
          },
        ],
      },
    ],
  },
  {
    type: 'materials#Button.Group',
    props: {},
    children: [
      {
        type: 'materials#Button',
        props: {
          type: 'primary',
          style: {
            margin: '0 5px 0 5px',
          },
          htmlType: 'submit',
          children: '??????',
        },
        children: [
          {
            type: 'materials#Icon',
            props: {
              type: 'success',
            },
          },
        ],
      },
      {
        type: 'materials#Button',
        props: {
          type: 'normal',
          style: {
            margin: '0 5px 0 5px',
          },
          htmlType: 'reset',
          children: '??????',
        },
      },
    ],
  },
  {
    type: 'materials#Calendar',
    props: {
      shape: 'card',
    },
  },
  {
    type: 'materials#Calendar',
    props: {
      shape: 'panel',
    },
  },
  {
    type: 'materials#Calendar',
    props: {
      shape: 'fullscreen',
    },
  },
  {
    type: 'materials#Card.Actions',
  },
  {
    type: 'materials#Card.BulletHeader',
  },
  {
    type: 'materials#Card.CollaspeContent',
  },
  {
    type: 'materials#Card.Content',
  },
  {
    type: 'materials#Card.Divider',
  },
  {
    type: 'materials#Card.Header',
  },
  {
    type: 'materials#Card.Media',
  },
  {
    type: 'materials#Card',
    props: {
      title: '???????????????',
    },
    children: [],
  },
  {
    type: 'materials#Card',
    props: {
      title: '???????????????',
      extra: [],
    },
    n: 'extra',
    children: [],
  },
  {
    type: 'materials#CascaderSelect',
    props: {
      prefix: 'next-',
      size: 'medium',
      hasArrow: true,
      hasBorder: true,
      expandTriggerType: 'click',
      resultAutoWidth: true,
      notFoundContent: 'Not Found',
      dataSource: [
        {
          value: '2974',
          label: '??????',
          children: [
            {
              value: '2975',
              label: '?????????',
            },
            {
              value: '2976',
              label: '?????????',
            },
            {
              value: '2977',
              label: '?????????',
            },
          ],
        },
      ],
    },
  },
  {
    type: 'materials#Cascader',
    props: {
      prefix: 'next-',
      expandTriggerType: 'click',
      dataSource: [
        {
          value: '2974',
          label: '??????',
          children: [
            {
              value: '2975',
              label: '?????????',
            },
            {
              value: '2976',
              label: '?????????',
            },
            {
              value: '2977',
              label: '?????????',
            },
          ],
        },
      ],
    },
  },
  // {
  //   type: 'fusion#Cascader',
  // },
  // {
  //   type: 'fusion#CheckboxGroup',
  // },
  // {
  //   type: 'fusion#Checkbox.Item',
  // },
  // {
  //   type: 'fusion#Checkbox',
  //   props: {
  //     label: 'Check Option',
  //   },
  // },
  {
    type: 'materials#Checkbox.Group',
    props: {
      prefix: 'next-',
      dataSource: [
        {
          label: '?????????',
          value: '1',
        },
        {
          label: '?????????',
          value: '2',
        },
        {
          label: '?????????',
          value: '3',
        },
      ],
    },
  },
  {
    type: 'materials#Collapse.Panel',
  },
  {
    type: 'materials#Collapse',
  },
  {
    type: 'materials#DatePicker',
    props: {
      prefix: 'next-',
      format: 'YYYY-MM-DD',
      size: 'medium',
      hasClear: false,
      popupTriggerType: 'click',
      popupAlign: 'tl tl',
      followTrigger: true,
    },
  },
  // {
  //   type: 'fusion#RangePicker',
  //   props: {
  //     prefix: 'next-',
  //     format: 'YYYY-MM-DD',
  //     size: 'medium',
  //     type: 'date',
  //     hasClear: false,
  //     popupTriggerType: 'click',
  //     popupAlign: 'tl tl',
  //     followTrigger: true,
  //   },
  // },
  {
    type: 'materials#Dialog',
    props: {
      prefix: 'next-',
      footerAlign: 'right',
      title: 'Title',
      footer: true,
      footerActions: ['ok', 'cancel'],
      closeable: 'esc,close',
      hasMask: true,
      align: 'cc cc',
      minMargin: 40,
      isAutoContainer: true,
      visible: false,
    },
  },
  {
    type: 'materials#Dialog',
    props: {
      prefix: 'next-',
      footerAlign: 'right',
      title: 'Title',
      footer: false,
      closeable: 'esc,close',
      hasMask: true,
      align: 'cc cc',
      minMargin: 40,
      isAutoContainer: true,
      visible: false,
    },
  },
  // {
  //   type: 'fusion#Div',
  // },
  // {
  //   type: 'fusion#Divider',
  //   props: {
  //     prefix: 'next-',
  //     direction: 'hoz',
  //     orientation: 'center',
  //     children: '?????????',
  //   },
  // },
  {
    type: 'materials#Drawer.Inner',
  },
  {
    type: 'materials#Drawer',
    props: {
      prefix: 'next-',
      triggerType: 'click',
      closeable: true,
      placement: 'right',
      hasMask: true,
      isAutoContainer: true,
      visible: false,
    },
  },
  // {
  //   type: 'materials#Drawer',
  //   props: {
  //     prefix: 'next-',
  //     triggerType: 'click',
  //     closeable: true,
  //     placement: 'bottom',
  //     hasMask: true,
  //     isAutoContainer: true,
  //     visible: false,
  //   },
  // },
  // {
  //   type: 'materials#Dropdown',
  // },
  // {
  //   type: 'ErrorBoundary',
  // },
  // {
  //   type: 'materials#Field',
  // },
  // {
  //   type: 'materials#Form.Error',
  // },
  // {
  //   type: 'materials#Form.Item',
  // },
  // {
  //   type: 'materials#Form.Reset',
  // },
  // {
  //   type: 'materials#Form.Submit',
  // },
  // {
  //   type: 'materials#Form',
  //   props: {
  //     labelCol: {
  //       span: 2,
  //     },
  //     wrapperCol: {
  //       span: 14,
  //     },
  //     labelAlign: 'left',
  //   },
  //   children: [
  //     {
  //       type: 'materials#Form.Item',
  //       props: {
  //         label: 'Email: ',
  //         required: true,
  //       },
  //       children: [
  //         {
  //           type: 'materials#Input',
  //           props: {
  //             name: 'email',
  //             size: 'medium',
  //             placeholder: '?????????',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       type: 'materials#Form.Item',
  //       props: {
  //         label: 'Password: ',
  //         required: true,
  //       },
  //       children: [
  //         {
  //           type: 'materials#Input.Password',
  //           props: {
  //             name: 'password',
  //             placeholder: '???????????????',
  //             size: 'medium',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       type: 'materials#Form.Item',
  //       props: {
  //         label: '\b',
  //       },
  //       children: [
  //         {
  //           type: 'materials#Form.Submit',
  //           props: {
  //             type: 'primary',
  //             validate: true,
  //             children: 'Submit',
  //           },
  //         },
  //         {
  //           type: 'materials#Form.Reset',
  //           props: {
  //             style: {
  //               marginLeft: 10,
  //             },
  //             children: 'Reset',
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   type: 'fusion#Group',
  // },
  // {
  //   type: 'materials#Icon',
  //   props: {
  //     type: 'smile',
  //   },
  // },
  // {
  //   type: 'materials#Image',
  //   props: {
  //     src: 'https://img.alicdn.com/tps/TB16TQvOXXXXXbiaFXXXXXXXXXX-120-120.svg',
  //   },
  // },
  // {
  //   type: 'materials#Inner',
  // },
  // {
  //   type: 'materials#Input.Group',
  // },
  // {
  //   type: 'materials#Input.Password',
  // },
  // {
  //   type: 'materials#Input.TextArea',
  // },
  // {
  //   type: 'materials#Input',
  //   props: {
  //     hasBorder: true,
  //     size: 'medium',
  //     autoComplete: 'off',
  //     placeholder: '?????????',
  //   },
  // },
  // {
  //   type: 'materials#Input.Password',
  //   props: {
  //     hasBorder: true,
  //     size: 'medium',
  //     autoComplete: 'off',
  //   },
  // },
  // {
  //   type: 'materials#Input.TextArea',
  //   props: {
  //     hasBorder: true,
  //     size: 'medium',
  //     autoComplete: 'off',
  //   },
  // },
  // {
  //   type: 'materials#Link',
  //   props: {
  //     href: 'https://fusion.design',
  //     target: '_blank',
  //     children: '?????????????????????',
  //   },
  // },
  // {
  //   type: 'materials#List.Item',
  // },
  // {
  //   type: 'materials#List',
  // },
  // {
  //   type: 'materials#Loading',
  //   props: {
  //     color: 'red',
  //     prefix: 'next-',
  //     tipAlign: 'bottom',
  //     visible: true,
  //     size: 'large',
  //     inline: true,
  //   },
  // },
  // {
  //   type: 'materials#MenuButton',
  // },
  // {
  //   type: 'materials#Menu.Divider',
  // },
  // {
  //   type: 'materials#Menu.Group',
  // },
  // {
  //   type: 'materials#Menu.Item',
  // },
  // {
  //   type: 'materials#Menu.PopupItem',
  // },
  // {
  //   type: 'materials#Menu',
  // },
  // {
  //   type: 'fusion#MonthPicker',
  // },
  // {
  //   type: 'materials#Nav.Item',
  // },
  // {
  //   type: 'materials#Nav',
  // },
  // {
  //   type: 'materials#NextTable',
  //   props: {
  //     setEmptyContent: true,
  //     emptyContent: {
  //       type: 'JSSlot',
  //       title: 'EmptyContent',
  //       value: [
  //         {
  //           type: 'materials#Typography.Text',
  //           props: {
  //             children: 'No Data',
  //           },
  //         },
  //       ],
  //     },
  //     showMiniPager: true,
  //     showActionBar: true,
  //     actionBar: [
  //       {
  //         title: '??????',
  //         type: 'primary',
  //       },
  //       {
  //         title: '??????',
  //       },
  //     ],
  //     columns: [
  //       {
  //         dataKey: 'name',
  //         width: 200,
  //         align: 'center',
  //         title: '??????',
  //         editType: 'text',
  //       },
  //       {
  //         dataKey: 'age',
  //         width: 200,
  //         align: 'center',
  //         title: '??????',
  //       },
  //       {
  //         dataKey: 'role',
  //         width: 200,
  //         align: 'center',
  //         title: '??????',
  //       },
  //     ],
  //     data: [
  //       {
  //         name: '??????',
  //         id: '1',
  //         age: 15000,
  //         role: '??????',
  //       },
  //       {
  //         name: '??????',
  //         id: '2',
  //         age: 25000,
  //         role: '??????',
  //       },
  //       {
  //         name: '??????',
  //         id: '3',
  //         age: 35000,
  //         role: '??????',
  //       },
  //     ],
  //     actionTitle: '??????',
  //     actionWidth: 180,
  //     actionType: 'link',
  //     actionFixed: 'right',
  //     actionHidden: false,
  //     maxWebShownActionCount: 2,
  //     actionColumn: [
  //       {
  //         title: '??????',
  //       },
  //       {
  //         title: '??????',
  //         mode: 'EDIT',
  //       },
  //     ],
  //   },
  // },
  // {
  //   type: 'materials#NextText',
  //   props: {
  //     type: 'h5',
  //     children: '????????????',
  //   },
  // },
  // {
  //   type: 'materials#NextText',
  //   props: {
  //     type: 'inherit',
  //     children:
  //       '?????? Ali-Lowcode-Engine ????????????????????????????????????????????????, ??????????????????????????????????????????',
  //   },
  // },
  // {
  //   type: 'materials#Wrapper',
  // },
  // {
  //   type: 'materials#NumberPicker',
  //   props: {
  //     prefix: 'next-',
  //     type: 'normal',
  //     size: 'medium',
  //     step: 1,
  //     editable: true,
  //   },
  // },
  // {
  //   type: 'materials#Page',
  // },
  // {
  //   type: 'materials#Slot',
  // },
  // {
  //   type: 'materials#Leaf',
  // },
  // {
  //   type: 'materials#Pagination',
  //   props: {
  //     prefix: 'next-',
  //     type: 'normal',
  //     shape: 'normal',
  //     size: 'medium',
  //     defaultCurrent: 1,
  //     total: 100,
  //     pageShowCount: 5,
  //     pageSize: 10,
  //     pageSizePosition: 'start',
  //     showJump: true,
  //   },
  // },
  // {
  //   type: 'materials#Paragraph',
  // },
  // {
  //   type: 'materials#PopupItem',
  // },
  // {
  //   type: 'materials#Progress',
  //   props: {
  //     prefix: 'next-',
  //     shape: 'line',
  //     size: 'medium',
  //     state: 'normal',
  //     percent: 30,
  //   },
  // },
  // {
  //   type: 'materials#Radio.Group',
  // },
  // {
  //   type: 'materials#RadioItem',
  // },
  // {
  //   type: 'materials#Radio',
  //   props: {
  //     label: '?????????',
  //     value: '1',
  //   },
  // },
  // {
  //   type: 'materials#Radio.Group',
  //   props: {
  //     dataSource: [
  //       {
  //         label: '?????????',
  //         value: '1',
  //       },
  //       {
  //         label: '?????????',
  //         value: '2',
  //       },
  //       {
  //         label: '?????????',
  //         value: '3',
  //       },
  //     ],
  //   },
  // },
  // {
  //   type: 'materials#RangeCalendar',
  // },
  // {
  //   type: 'materials#RangePicker',
  // },
  // {
  //   type: 'materials#Range',
  //   props: {
  //     prefix: 'next-',
  //     slider: 'single',
  //     max: 100,
  //     step: 1,
  //     marksPosition: 'above',
  //     hasTip: true,
  //   },
  // },
  // {
  //   type: 'materials#Rating',
  //   props: {
  //     prefix: 'next-',
  //     count: 5,
  //     size: 'medium',
  //   },
  // },
  // {
  //   type: 'materials#ResponsiveGrid.Cell',
  // },
  // {
  //   type: 'materials#ResponsiveGrid',
  // },
  // {
  //   type: 'materials#RichText',
  //   props: {
  //     title: '??????????????????',
  //     content: {
  //       subject: '????????????',
  //       hideTitle: false,
  //       description:
  //         '<p><span>- ??????????????????????????????</span><br /><span>- ????????????????????????</span></p>',
  //     },
  //   },
  // },
  // {
  //   type: 'materials#Search',
  //   props: {
  //     dataSource: [
  //       {
  //         label: 'Recent',
  //         value: 'Recent',
  //       },
  //       {
  //         label: 'dress',
  //         value: 'dress',
  //       },
  //       {
  //         label: 'sunglasses',
  //         value: 'sunglasses',
  //       },
  //       {
  //         label: 't-shirt',
  //         value: 't-shirt',
  //       },
  //     ],
  //     followTrigger: true,
  //     searchText: '??????',
  //     prefix: 'next-',
  //     shape: 'normal',
  //     type: 'normal',
  //     size: 'medium',
  //     hasIcon: true,
  //   },
  // },
  // {
  //   type: 'materials#Search',
  //   props: {
  //     followTrigger: true,
  //     defaultFilterValue: 'Products',
  //     filter: [
  //       {
  //         label: 'Products',
  //         value: 'Products',
  //       },
  //       {
  //         label: 'Products1',
  //         value: 'Products1',
  //       },
  //     ],
  //     dataSource: [
  //       {
  //         label: 'Recent',
  //         value: 'Recent',
  //       },
  //       {
  //         label: 'dress',
  //         value: 'dress',
  //       },
  //       {
  //         label: 'sunglasses',
  //         value: 'sunglasses',
  //       },
  //       {
  //         label: 't-shirt',
  //         value: 't-shirt',
  //       },
  //     ],
  //     searchText: '??????',
  //     prefix: 'next-',
  //     shape: 'normal',
  //     type: 'normal',
  //     size: 'medium',
  //     hasIcon: true,
  //   },
  // },
  // {
  //   type: 'materials#Select.Option',
  // },
  // {
  //   type: 'materials#Select',
  //   props: {
  //     mode: 'single',
  //     hasArrow: true,
  //     cacheValue: true,
  //     dataSource: [
  //       {
  //         value: '1',
  //         label: '??????1',
  //       },
  //       {
  //         value: '2',
  //         label: '??????2',
  //       },
  //       {
  //         value: '3',
  //         label: '??????3',
  //       },
  //     ],
  //   },
  // },
  // {
  //   type: 'materials#Slider',
  //   props: {
  //     prefix: 'next-',
  //     animation: 'slide',
  //     arrows: true,
  //     arrowSize: 'medium',
  //     arrowPosition: 'inner',
  //     arrowDirection: 'hoz',
  //     autoplaySpeed: 3000,
  //     dots: true,
  //     dotsDirection: 'hoz',
  //     draggable: true,
  //     infinite: true,
  //     slide: 'div',
  //     slideDirection: 'hoz',
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     speed: 600,
  //     triggerType: 'click',
  //     centerPadding: '50px',
  //     cssEase: 'ease',
  //     edgeFriction: 0.35,
  //     swipe: true,
  //     touchMove: true,
  //     touchThreshold: 5,
  //     useCSS: true,
  //     waitForAnimate: true,
  //   },
  //   children: [
  //     {
  //       type: 'materials#Image',
  //       props: {
  //         src: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png',
  //       },
  //     },
  //     {
  //       type: 'materials#Image',
  //       props: {
  //         src: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg',
  //       },
  //     },
  //     {
  //       type: 'materials#Image',
  //       props: {
  //         src: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg',
  //       },
  //     },
  //     {
  //       type: 'materials#Image',
  //       props: {
  //         src: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg',
  //       },
  //     },
  //   ],
  // },
  // {
  //   type: 'materials#SplitButton',
  // },
  // {
  //   type: 'materials#Step.Item',
  // },
  // {
  //   type: 'materials#Step',
  //   props: {
  //     prefix: 'next-',
  //     direction: 'hoz',
  //     labelPlacement: 'ver',
  //     shape: 'circle',
  //     animation: true,
  //   },
  //   children: [
  //     {
  //       type: 'materials#Step.Item',
  //       props: {
  //         key: 0,
  //         icon: '',
  //         title: 'Step 1',
  //         content: 'Open the door Put the elephant into the fridge',
  //         disabled: false,
  //       },
  //     },
  //     {
  //       type: 'materials#Step.Item',
  //       props: {
  //         key: 1,
  //         icon: '',
  //         title: 'Step 2',
  //         content: 'Open the door Put the elephant into the fridge',
  //         disabled: false,
  //       },
  //     },
  //     {
  //       type: 'materials#Step.Item',
  //       props: {
  //         key: 2,
  //         icon: '',
  //         title: 'Step 3',
  //         content: 'Open the door Put the elephant into the fridge',
  //         disabled: false,
  //       },
  //     },
  //     {
  //       type: 'materials#Step.Item',
  //       props: {
  //         key: 3,
  //         icon: '',
  //         title: 'Step 4',
  //         content: 'Open the door Put the elephant into the fridge',
  //         disabled: false,
  //       },
  //     },
  //   ],
  // },
  // {
  //   type: 'materials#SubMenu',
  // },
  // {
  //   type: 'materials#SubNav',
  // },
  // {
  //   type: 'materials#Switch',
  //   props: {
  //     prefix: 'next-',
  //     size: 'medium',
  //   },
  // },
  // {
  //   type: 'fusion#TabContainer.Item',
  // },
  // {
  //   type: 'materials#Tab.TabPane',
  // },
  // {
  //   type: 'materials#Tab',
  //   props: {
  //     shape: 'pure',
  //     size: 'medium',
  //     excessMode: 'slide',
  //   },
  //   children: [
  //     {
  //       type: 'fusion#TabContainer.Item',
  //       props: {
  //         title: 'Tab1',
  //       },
  //     },
  //     {
  //       type: 'fusion#TabContainer.Item',
  //       props: {
  //         title: 'Tab2',
  //       },
  //     },
  //     {
  //       type: 'fusion#TabContainer.Item',
  //       props: {
  //         title: 'Tab3',
  //       },
  //     },
  //   ],
  // },
  // {
  //   type: 'materials#Table.Column',
  // },
  // {
  //   type: 'materials#Table',
  // },
  // {
  //   type: 'materials#Tag.Closeable',
  // },
  // {
  //   type: 'materials#Tag.Selectable',
  // },
  // {
  //   type: 'materials#Tag',
  //   props: {
  //     prefix: 'next-',
  //     type: 'normal',
  //     size: 'medium',
  //     animation: false,
  //     children: ['Tag'],
  //   },
  // },
  // {
  //   type: 'materials#Tag.Closeable',
  //   props: {
  //     prefix: 'next-',
  //     closeArea: 'tail',
  //     size: 'medium',
  //     children: ['Tag'],
  //   },
  // },
  // {
  //   type: 'materials#Tag.Selectable',
  //   props: {
  //     prefix: 'next-',
  //     children: ['Tag'],
  //   },
  // },
  // {
  //   type: 'materials#TimePicker',
  //   props: {
  //     prefix: 'next-',
  //     size: 'medium',
  //     hasClear: true,
  //     format: 'HH:mm:ss',
  //     popupAlign: 'tl tl',
  //     popupTriggerType: 'click',
  //   },
  // },
  // {
  //   type: 'materials#Timeline.Item',
  // },
  // {
  //   type: 'materials#Timeline',
  //   props: {
  //     prefix: 'next-',
  //     fold: [],
  //     animation: true,
  //   },
  //   children: [
  //     {
  //       type: 'materials#Timeline.Item',
  //       props: {
  //         state: 'process',
  //         title: 'Buy',
  //         time: '2022-02-01',
  //       },
  //     },
  //     {
  //       type: 'materials#Timeline.Item',
  //       props: {
  //         title: 'Ship',
  //         time: '2022-02-01',
  //       },
  //     },
  //     {
  //       type: 'materials#Timeline.Item',
  //       props: {
  //         title: 'Order',
  //         time: '2022-02-01',
  //       },
  //     },
  //   ],
  // },
  // {
  //   type: 'materials#Message',
  //   props: {
  //     title: 'Toast',
  //     type: 'success',
  //     shape: 'toast',
  //     size: 'medium',
  //     visible: false,
  //     animation: true,
  //     children:
  //       'This item already has the label \'travel\', you can add a new label.',
  //   },
  // },
  // {
  //   type: 'materials#Tooltip',
  // },
  // {
  //   type: 'materials#Transfer',
  //   props: {
  //     prefix: 'next-',
  //     mode: 'normal',
  //     titles: ['TitleLeft', 'TitleRight'],
  //     notFoundContent: 'Not Found',
  //   },
  // },
  // {
  //   type: 'materials#TreeNode',
  // },
  // {
  //   type: 'materials#TreeSelect',
  //   props: {
  //     prefix: 'next-',
  //     size: 'medium',
  //     hasArrow: true,
  //     hasBorder: true,
  //     autoWidth: true,
  //     notFoundContent: 'Not Found',
  //     treeCheckedStrategy: 'parent',
  //   },
  // },
  // {
  //   type: 'materials#Tree',
  //   props: {
  //     prefix: 'next-',
  //     selectable: true,
  //     defaultExpandAll: true,
  //     checkedStrategy: 'all',
  //     autoExpandParent: true,
  //     animation: true,
  //     focusable: true,
  //     plainData: 'children\n\t123\n\t*[ashbin]333\n\t-222',
  //     dataSource: [
  //       {
  //         label: 'children',
  //         disabled: false,
  //         key: '0-0',
  //         children: [
  //           {
  //             label: '123',
  //             disabled: false,
  //             key: '0-0-0',
  //             children: [],
  //           },
  //           {
  //             label: '333',
  //             icon: 'ashbin',
  //             disabled: false,
  //             key: '0-0-1',
  //             children: [],
  //           },
  //           {
  //             label: '222',
  //             disabled: true,
  //             key: '0-0-2',
  //             children: [],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
  // {
  //   type: 'materials#Typography.Text',
  // },
  // {
  //   type: 'materials#Typography',
  // },
  // {
  //   type: 'materials#Upload.Dragger',
  // },
  // {
  //   type: 'materials#Upload.List',
  // },
  // {
  //   type: 'materials#Upload.Selecter',
  // },
  // {
  //   type: 'materials#Upload',
  //   props: {
  //     prefix: 'next-',
  //     closable: true,
  //     autoUpload: true,
  //     shape: 'card',
  //     defaultValue: [],
  //   },
  // },
  // {
  //   type: 'materials#Video',
  //   props: {
  //     src: 'https://fusion.alicdn.com/images/page-1.mp4',
  //     controls: true,
  //     style: {
  //       width: '600px',
  //     },
  //   },
  // },
  // {
  //   type: 'materials#WeekPicker',
  // },
  // {
  //   type: 'materials#YearPicker',
  // },
  // {
  //   type: 'pro-layout#Block',
  // },
  // {
  //   type: 'pro-layout#BlockCell',
  // },
  // {
  //   type: 'pro-layout#BlockCellItem',
  // },
  // {
  //   type: 'pro-layout#PageHeader',
  //   children: [
  //     {
  //       type: 'pro-layout#RowColContainer',
  //       props: {
  //         rowGap: 20,
  //         colGap: 20,
  //       },
  //       children: [
  //         {
  //           type: 'pro-layout#Row',
  //           props: {},
  //           children: [
  //             {
  //               type: 'pro-layout#Col',
  //               props: {
  //                 colSpan: 1,
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   type: 'pro-layout#PageFooter',
  // },
  // {
  //   type: 'pro-layout#PageContent',
  // },
  // {
  //   type: 'pro-layout#PageAside',
  // },
  // {
  //   type: 'pro-layout#PageNav',
  // },
  // {
  //   type: 'pro-layout#Page',
  //   props: {
  //     headerDivider: true,
  //     minHeight: '100vh',
  //     presetNav: true,
  //     presetAside: true,
  //     footer: false,
  //     nav: false,
  //     aside: false,
  //     placeholderStyle: {
  //       gridRowEnd: 'span 1',
  //       gridColumnEnd: 'span 12',
  //     },
  //     headerProps: {
  //       background: 'surface',
  //     },
  //   },
  //   children: [],
  // },
  // {
  //   type: 'pro-layout#P',
  // },
  // {
  //   type: 'pro-layout#P.Cell',
  // },
  // {
  //   type: 'pro-layout#Row',
  // },
  // {
  //   type: 'pro-layout#Col',
  // },
  // {
  //   type: 'pro-layout#RowColContainer',
  //   props: {
  //     rowGap: 20,
  //     colGap: 20,
  //   },
  //   children: [
  //     {
  //       type: 'pro-layout#Row',
  //       title: '???',
  //       props: {},
  //       children: [
  //         {
  //           type: 'pro-layout#Col',
  //           title: '???',
  //           props: {
  //             colSpan: 1,
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   type: 'pro-layout#ProCard',
  //   props: {
  //     title: '??????',
  //     hasDivider: true,
  //     isFillContainer: true,
  //   },
  // },
  // {
  //   type: 'pro-layout#ProCard.CardSection',
  //   props: {
  //     title: '?????????',
  //     hasDivider: true,
  //     isFillContainer: true,
  //   },
  //   c: false
  // },
];
