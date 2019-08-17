module.exports = {
  development: {
    API_URL: 'http://localhost:5000',
  },
  test: {
  },
  production: {
    API_URL: process.env.API_URL,
  },
  IP_INFO_TOKEN: process.env.IP_INFO_TOKEN,
};
