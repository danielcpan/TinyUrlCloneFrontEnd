module.exports = {
  development: {
    database: 'tiny_url_clone_development',
    API_URL: 'http://localhost:5000',
  },
  test: {
    database: 'tiny_url_clone_test',
  },
  production: {
    database: 'mongodb://heroku_j3npvbjk:clh9dgs21qhlns7g4fcpv1vujc@ds163757.mlab.com:63757/heroku_j3npvbjk',
    API_URL: process.env.API_URL,
  },
  IP_INFO_TOKEN: process.env.IP_INFO_TOKEN,
};
