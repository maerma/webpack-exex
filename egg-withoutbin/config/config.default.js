exports.keys = '123'

exports.view = {
  defaultViewEngine: 'nunjuncks',
  mapping: {
    '.tpl': 'nunjucks'
  }
}

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0'
}
