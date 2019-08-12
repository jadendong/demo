// 全局的一些配置
export default {
  rootPath: 'https://jadendong.github.io/demo/', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: '', // 站点部署域名，无需协议和path等
  defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/dir/demo3.html',
      },
      {
        key: 'COMMUNITY',
        text: 'News',
        link: '/en-us/community/index.html',
      },
      {
        key: 'contact us',
        text: 'contact us',
        link: '/zh-cn/contact/index.html',
      },
      // {
      //   key: 'blog',
      //   text: 'BLOG',
      //   link: '/en-us/blog/index.html',
      // },
      {
        key: '',
        text: 'TEL : 021-61941025',
        link: '',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'Part of the public information collected by this website comes from the Internet. The purpose of reprinting is to transmit more information and share it on the Internet. This does not mean that this website agrees with its views and is responsible for its authenticity, nor does it constitute any other suggestion. Some works of this site are submitted and published by netizens independently, edited and uploaded. This site only provides a platform for communication, not responsible for its copyright. If you find works infringing your intellectual property rights on the website, please contact us and we will modify or delete them in time.',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Background',
          link: '/en-us/docs/dir/demo3.html',
        },
        {
          text: 'Quick use',
          link: '/en-us/docs/dir/demo4.html',
        },
        {
          text: 'Developer guide',
          link: '/en-us/docs/demo1.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'News',
          link: '/en-us/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2019 Shanghai Bus Tuohua Technology Development Co., Ltd.',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '接口文档',
        link: '/zh-cn/docs/dir/demo3.html',
      },
      {
        key: 'community',
        text: '新闻',
        link: '/zh-cn/community/index.html',
      },
      {
        key: 'contact us',
        text: '联系我们',
        link: '/zh-cn/contact/index.html',
      },
      // {
      //   key: 'blog',
      //   text: '联系我们',
      //   link: '/zh-cn/blog/index.html',
      // },
      {
        key: '',
        text: 'TEL : 021-61941025',
        link: '',
      },
    ],
    disclaimer: {
      title: '免责声明',
      content: '  本网站所收集的部分公开资料来源于互联网，转载的目的在于传递更多信息及用于网络分享，并不代表本站赞同其观点和对其真实性负责，也不构成任何其他建议。本站部分作品是由网友自主投稿和发布、编辑整理上传，对此类作品本站仅提供交流平台，不为其版权负责。如果您发现网站上有侵犯您的知识产权的作品，请与我们取得联系，我们会及时修改或删除。',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '背景',
          link: '/zh-cn/docs/dir/demo3.html',
        },
        {
          text: '快速使用',
          link: '/zh-cn/docs/dir/demo4.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/docs/demo1.html',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        // {
        //   text: '博客',
        //   link: '/zh-cn/blog/index.html',
        // },
        {
          text: '新闻',
          link: '/zh-cn/community/index.html',
        },
      ],
    },
    copyright: '版权所有 © 2019 上海巴士拓华科技发展有限公司',
  },
};
