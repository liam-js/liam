[
  (function(){

    // 一、阿里 fusion 组件
    requirejs.config({
      context: 'liam',
      paths: {
        AlifdFusionUi: 'https://alifd.alicdn.com/npm/@alifd/fusion-ui@1.0.5/dist/AlifdFusionUi',
        '@alifd/next':'https://alifd.alicdn.com/npm/@alifd/next@1.25.41/dist/next.min',
        Next: 'https://g.alicdn.com/code/lib/alifd__next/1.23.22/next.min',
        moment: 'https://e.sinaimg.cn/ssfe/unpkg/moment@2.29.1/min/moment.min',
        proptypes: 'https://e.sinaimg.cn/ssfe/unpkg/prop-types@15.8.1/prop-types',
      },
      shim: {
        AlifdFusionUi: {
          deps: [
            'css!https://alifd.alicdn.com/npm/@alifd/fusion-ui@1.0.5/dist/AlifdFusionUi.css'
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
      }
    })
  })(),
  
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
      explanation: '提示文案',
      operationConfig: {
        align: 'right',
      },
      operations: [
        {
          action: 'ok',
          type: 'primary',
          content: '确认',
        },
        {
          action: 'cancel',
          type: 'normal',
          content: '取消',
        },
      ],
    },
  },
  {
    type: 'fusion#ProDrawer',
    props: {
      prefix: 'next-',
      title: '高级抽屉',
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
          content: '确认',
        },
        {
          action: 'cancel',
          type: 'normal',
          content: '取消',
        },
      ],
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
          title: '标签项1',
          primaryKey: 'tab-item-1',
        },
      },
      {
        type: 'fusion#TabContainer.Item',
        props: {
          title: '标签项2',
          primaryKey: 'tab-item-2',
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
          company: '支付宝科技有限公司',
        },
        {
          id: 'id-2f5DdE2b-1',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '支付宝科技有限公司',
        },
        {
          id: 'id-2f5DdE2b-2',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '支付宝科技有限公司',
        },
        {
          id: 'id-2f5DdE2b-3',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '支付宝科技有限公司',
        },
        {
          id: 'id-2f5DdE2b-4',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '支付宝科技有限公司',
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
            children: '操作一',
          },
          {
            type: 'normal',
            children: '操作二',
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
          title: '公司',
          dataIndex: 'company',
          width: 160,
          formatType: 'link',
          searchable: true,
        },
        {
          title: '单据金额',
          dataIndex: 'documentAmount',
          formatType: 'money',
        },
        {
          title: '币种',
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
          explanation: '提示信息',
          width: 110,
        },
        {
          title: '完成进度',
          dataIndex: 'percent',
          formatType: 'progress',
        },
        {
          title: '到账日期',
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
          company: '支付宝科技有限公司',
          childTableProps: {
            dataSource: [],
            columns: [
              {
                title: '公司',
                dataIndex: 'company',
                width: 160,
                formatType: 'link',
                searchable: true,
              },
              {
                title: '单据金额',
                dataIndex: 'documentAmount',
                formatType: 'money',
              },
              {
                title: '币种',
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
                explanation: '提示信息',
                width: 110,
              },
              {
                title: '完成进度',
                dataIndex: 'percent',
                formatType: 'progress',
              },
              {
                title: '到账日期',
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
          company: '支付宝科技有限公司',
          childTableProps: {
            dataSource: [],
            columns: [
              {
                title: '公司',
                dataIndex: 'company',
                width: 160,
                formatType: 'link',
                searchable: true,
              },
              {
                title: '单据金额',
                dataIndex: 'documentAmount',
                formatType: 'money',
              },
              {
                title: '币种',
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
                explanation: '提示信息',
                width: 110,
              },
              {
                title: '完成进度',
                dataIndex: 'percent',
                formatType: 'progress',
              },
              {
                title: '到账日期',
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
          company: '支付宝科技有限公司',
          childTableProps: {
            dataSource: [],
            columns: [
              {
                title: '公司',
                dataIndex: 'company',
                width: 160,
                formatType: 'link',
                searchable: true,
              },
              {
                title: '单据金额',
                dataIndex: 'documentAmount',
                formatType: 'money',
              },
              {
                title: '币种',
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
                explanation: '提示信息',
                width: 110,
              },
              {
                title: '完成进度',
                dataIndex: 'percent',
                formatType: 'progress',
              },
              {
                title: '到账日期',
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
            children: '查看',
            type: 'primary',
          },
          {
            children: '编辑',
            type: 'primary',
            disabled: true,
          },
          {
            children: '删除',
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
            children: '操作一',
          },
          {
            type: 'normal',
            children: '操作二',
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
          title: '公司',
          dataIndex: 'company',
          width: 160,
          formatType: 'link',
          searchable: true,
        },
        {
          title: '单据金额',
          dataIndex: 'documentAmount',
          formatType: 'money',
        },
        {
          title: '币种',
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
          explanation: '提示信息',
          width: 110,
        },
        {
          title: '完成进度',
          dataIndex: 'percent',
          formatType: 'progress',
        },
        {
          title: '到账日期',
          dataIndex: 'date',
          formatType: 'date',
        },
      ],
    },
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
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '4635',
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '2178',
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '1257',
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
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
          header: '头部文字',
          footer: '尾部文字',
          children: [
            {
              company: '支付宝科技有限公司',
              documentAmount: 2022,
              currency: 'CNY',
              percent: 1.862,
              date: '2013-06-12',
              id: 'id-2f5DdE2b-0',
            },
            {
              company: '支付宝科技有限公司',
              documentAmount: 2022,
              currency: 'CNY',
              percent: 1.862,
              date: '2013-06-12',
              id: 'id-2f5DdE2b-0',
            },
          ],
        },
        {
          header: '头部文字2',
          footer: '尾部文字2',
          children: [
            {
              company: '支付宝科技有限公司',
              documentAmount: 2022,
              currency: 'CNY',
              percent: 1.862,
              date: '2013-06-12',
              id: 'id-2f5DdE2b-0',
            },
            {
              company: '支付宝科技有限公司',
              documentAmount: 2022,
              currency: 'CNY',
              percent: 1.862,
              date: '2013-06-12',
              id: 'id-2f5DdE2b-0',
            },
            {
              company: '支付宝科技有限公司',
              documentAmount: 2022,
              currency: 'CNY',
              percent: 1.862,
              date: '2013-06-12',
              id: 'id-2f5DdE2b-0',
            },
            {
              company: '支付宝科技有限公司',
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
            children: '查看',
            type: 'primary',
          },
          {
            children: '编辑',
            type: 'primary',
            disabled: true,
          },
          {
            children: '删除',
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
            children: '操作一',
          },
          {
            type: 'normal',
            children: '操作二',
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
          title: '公司',
          dataIndex: 'company',
          width: 160,
          formatType: 'link',
          searchable: true,
        },
        {
          title: '单据金额',
          dataIndex: 'documentAmount',
          formatType: 'money',
        },
        {
          title: '币种',
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
          explanation: '提示信息',
          width: 110,
        },
        {
          title: '完成进度',
          dataIndex: 'percent',
          formatType: 'progress',
        },
        {
          title: '到账日期',
          dataIndex: 'date',
          formatType: 'date',
        },
      ],
    },
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
          company: '支付宝科技有限公司',
        },
        {
          id: 'id-2f5DdE2b-1',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '支付宝科技有限公司',
        },
      ],
      actionColumnButtons: {
        dataSource: [
          {
            children: '查看',
            type: 'primary',
          },
          {
            children: '编辑',
            type: 'primary',
            disabled: true,
          },
          {
            children: '删除',
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
            children: '操作一',
          },
          {
            type: 'normal',
            children: '操作二',
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
          title: '公司',
          dataIndex: 'company',
          width: 160,
          formatType: 'link',
          searchable: true,
        },
        {
          title: '单据金额',
          dataIndex: 'documentAmount',
          formatType: 'money',
        },
        {
          title: '币种',
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
          explanation: '提示信息',
          width: 110,
        },
        {
          title: '完成进度',
          dataIndex: 'percent',
          formatType: 'progress',
        },
        {
          title: '到账日期',
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
          company: '支付宝科技有限公司',
          children: [
            {
              id: '2f5DdE2b-5Aee-c43c-e1db-0-0',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
            },
            {
              id: '2f5DdE2b-5Aee-c43c-e1db-0-1',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
            },
          ],
        },
        {
          id: 'id-2f5DdE2b-1',
          date: '2013-06-12',
          percent: 1.862,
          documentAmount: 2022,
          currency: 'CNY',
          company: '支付宝科技有限公司',
          children: [
            {
              id: '2f5DdE2b-5Aee-c43c-e1db-1-0',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
            },
            {
              id: '2f5DdE2b-5Aee-c43c-e1db-1-1',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
            },
          ],
        },
      ],
      columns: [
        {
          title: '公司',
          dataIndex: 'company',
          width: 160,
          formatType: 'link',
          searchable: true,
        },
        {
          title: '单据金额',
          dataIndex: 'documentAmount',
          formatType: 'money',
        },
        {
          title: '币种',
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
          explanation: '提示信息',
          width: 110,
        },
        {
          title: '完成进度',
          dataIndex: 'percent',
          formatType: 'progress',
        },
        {
          title: '到账日期',
          dataIndex: 'date',
          formatType: 'date',
        },
      ],
    },
  },
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
          children: [],
        },
        children: [
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-v18oui',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-8vem8i',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-c930rl',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-1961de',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
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
          children: [],
        },
        children: [
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-8xgjw5',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-bd42ce',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-euka7y',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-6hfb05',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
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
          children: [],
        },
        children: [
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-njqjb8',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-yqo6sk',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-hvvrs8',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-ph9w5o',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
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
          children: [],
        },
        children: [
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-3qcusr',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-vhrzzq',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-l95v9n',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: 'id-rr40cm',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
        ],
      },
    ],
  },
  {
    type: 'fusion#ProForm',
    props: {
      placeholder: '请在右侧面板添加表单项+',
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
      emptyContent: '添加表单项',
      children: [],
    },
    children: [
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '2469',
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '6438',
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '8187',
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '4067',
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '9768',
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '5814',
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '2064',
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      },
      {
        type: 'fusion#FormInput',
        props: {
          formItemProps: {
            primaryKey: '6242',
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      },
    ],
  },
  {
    type: 'fusion#StepForm',
    props: {
      current: 0,
      operations: [
        {
          content: '上一步',
          action: 'previous',
          type: 'secondary',
        },
        {
          content: '下一步',
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
          children: [],
        },
        children: [
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: '3048',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: '5168',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          },
          {
            type: 'fusion#FormInput',
            props: {
              formItemProps: {
                primaryKey: '5543',
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
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
          children: [],
        },
        children: [
          {
            type: 'fusion#ProForm.Item',
            props: {
              primaryKey: '5759',
              label: '表单项',
              size: 'medium',
              device: 'desktop',
            },
          },
          {
            type: 'fusion#ProForm.Item',
            props: {
              primaryKey: '329',
              label: '表单项',
              size: 'medium',
              device: 'desktop',
            },
          },
          {
            type: 'fusion#ProForm.Item',
            props: {
              primaryKey: '9120',
              label: '表单项',
              size: 'medium',
              device: 'desktop',
            },
          },
        ],
      },
    ],
  },
  {
    type: 'fusion#ProCard',
    props: {
      title: '面积图',
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
      title: '条形图',
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
    type: 'fusion#ProCard',
    props: {
      title: '柱状图',
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
    type: 'fusion#ProCard',
    props: {
      title: '环形图',
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
    type: 'fusion#ProCard',
    props: {
      title: '折线图',
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
  {
    type: 'fusion#ProCard',
    props: {
      title: '饼图',
      hasDivider: true,
      isFillContainer: true,
    },
    children: [
      {
        type: 'fusion#PieChart',
        title: '饼图',
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
];
