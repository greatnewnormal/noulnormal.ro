const isProduction = process.env.ELEVENTY_ENV == 'production';

module.exports = {
  url: isProduction ? 'https://greatnewnormal.com' : 'http://localhost:8080',
  imagesUrl: '',
  buildYear: new Date().getFullYear(),
  isProduction,
};