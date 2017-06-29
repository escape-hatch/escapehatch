const axios = require('axios');

module.exports = (userErr) =>
  axios.get(`https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q=${userErr}&tagged=javascript&site=stackoverflow&pagesize=10&filter=!9YdnSIN18`);
