const appConfig = require('../src/app.config')

module.exports = {
  title: appConfig.title,
  description: appConfig.description,
  themeConfig: {
    sidebar: {
      '/': [
        '/docs/configuration',
        '/docs/architecture',
        '/docs/development',
        '/docs/production',
        '/docs/plugins',
        '/docs/routing',
        '/docs/store',
        '/docs/components',
        '/docs/reference'
      ]
    },
    nav: [
      {
        text: 'Documentation',
        link: '/'
      },
      {
        text: 'Reference',
        link: '/docs/reference'
      },
      { text: 'GitHub', link: 'https://github.com/IlyasDeckers' },
    ]
  }
}
