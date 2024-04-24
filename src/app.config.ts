export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/messages/index',
    'pages/personal/index',
  ],
  subPackages:[
    {
      root: 'packages/personal',
      pages: [
        'profile/index',
        'security/index'
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    backgroundColor: '#FAFBFC',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#666',
    selectedColor: '#007AFF',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/messages/index',
        text: '消息',
      },
      {
        pagePath: 'pages/personal/index',
        text: '我的',
      },
    ]
  }
})
