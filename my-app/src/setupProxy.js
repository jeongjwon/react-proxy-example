const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  //api2
  app.use(
    '/api2/todos', //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:3070', //타겟이 되는 api url를 입력합니다.
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
    })
  );
  app.use(
    '/api2/todo', //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:3070', //타겟이 되는 api url를 입력합니다.
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
    })
  );
};