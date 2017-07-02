const he = require('he');

module.exports = function (gitList, userErr) {
  const results = gitList.map( item => ({
    url: item.html_url,
    body: item.body,
    title: he.decode(item.title),
    status: item.state,
    vendor_id: item.id,
    created: item.created_at,
    modified: item.updated_at,
    comments: item.comments,
    vendor: 'github',
    error: userErr
    })
  );

  return results.sort((a, b) => {
    return b.status > a.status ? -1 : 1;
  });
};
