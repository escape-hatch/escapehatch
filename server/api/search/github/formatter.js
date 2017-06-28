const he = require('he');

module.exports = function (gitList, userErr) {
  return gitList.map( item => ({
    url: item.html_url,
    body: item.body,
    title: he.decode(item.title),
    status: item.state,
    vendor_id: item.id,
    posted_on: item.created_at,
    updated_on: item.updated_at,
    comments: item.comments,
    vendor: 'github',
    error: userErr
    })
  );
};
