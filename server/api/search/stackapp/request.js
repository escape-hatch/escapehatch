const axios = require('axios');
// const secret = require('../../../../secret.js')

module.exports = (userErr) =>
  axios.get(`https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q=${userErr}&tagged=javascript&site=stackoverflow&pagesize=50`);
