const he = require('he');

module.exports = function (gitList) {
  return gitList.map( item => ({
    vendor: 'github',
    url: item.html_url,
    body: item.body,
    title: he.decode(item.title),
    status: item.state,
    id: item.id,
    posted_on: item.created_at,
    updated_on: item.updated_at,
    comments: item.comments
    })
  );
};
