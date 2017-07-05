const he = require('he');
// const showdown  = require('showdown'),
//       converter = new showdown.Converter();
      // text      = '#hello, markdown!',
      // html      = converter.makeHtml(text);

module.exports = function (gitList, userErr) {
  const results = gitList.map( item => ({
    url: item.html_url,
    body: truncateString(item.body),
    // body: truncateString(converter.makeHtml(item.body)),
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

// Helper Functions
const truncateString = (str) => {
  const array = str.split(' ');
  if(array.length <=20) return array.join(' ');
  else return array.slice(0,50).join(' ') + '...';
}
