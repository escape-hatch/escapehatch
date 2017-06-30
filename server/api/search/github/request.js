const Promise = require('bluebird');
const github = require('octonode');
const client = github.client();
const ghsearch = client.search();
const issues = Promise.promisify(ghsearch.issues.bind(ghsearch));

module.exports = (userErr) =>
    issues({ q: userErr, per_page: 10 })
    .then(res => res);
