export default {
  'en-us': {
    sidemenu: [
      {
        title: 'Document presentation',
        children: [
          {
            title: 'Preface',
            opened: true,
            children: [
              {
                title: 'Background',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
          {
            title: 'Interface',
            opened: true,
            children: [
          {
            title: 'Flow by channel at different times of the day',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'Passage-by-Passage Flow on Monthly Days',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'real-time traffic on channel request',
            link: '/en-us/docs/demo3.html',
          },
        ],
      },
          // {
          //   title: 'dir',
          //   opened: true,
          //   children: [
          //     {
          //       title: 'demo3',
          //       link: '/en-us/docs/dir/demo3.html',
          //     },
          //   ],
          // },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '文档展示',
        children: [
          {
            title: '前言',
            opened: true,
            children: [
              {
                title: '背景',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: '快速开始',
                link: '/zh-cn/docs/dir/demo4.html',
              },
            ],
          },
          {
            title: '接口',
            opened: true,
            children: [
            {
            title: '按通道按天各时间客流情况',
            link: '/zh-cn/docs/demo1.html',
            },
            {
              title: '按通道按月各天客流情况',
              link: '/zh-cn/docs/demo2.html',
            },
            {
              title: '按通道请求的实时客流情况',
              link: '/zh-cn/docs/demo3.html',
            },
            ],
          },
          // {
          //   title: '目录',
          //   opened: true,
          //   children: [
          //     {
          //       title: '示例3',
          //       link: '/zh-cn/docs/dir/demo3.html',
          //     },
          //   ],
          // },
        ],
      },
    ],
    barText: '文档',
  },
};
