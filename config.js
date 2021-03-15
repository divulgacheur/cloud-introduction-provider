module.exports = {
  host: process.env.HOST || 'http://localhost',
  port: process.env.PORT || 8081,
  register_url: process.env.API_REGISTER || 'http://localhost:8082/providers'
}
