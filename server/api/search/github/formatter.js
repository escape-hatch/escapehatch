const he = require('he');
const showdown  = require('showdown'),
      converter = new showdown.Converter();
const sanitizeHtml = require('sanitize-html');

module.exports = function (gitList, userErr) {
  const results = gitList.map( item => ({
    url: item.html_url,
    body: sanitizeHtml(converter.makeHtml(truncateString(item.body))),
    title: he.decode(item.title),
    status: item.state,
    vendor_id: item.id,
    created: prettifyDate(new Date(item.created_at).toDateString()),
    modified: prettifyDate(new Date(item.updated_at).toDateString()),
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
  else if(array.length === 0) return '';
  else return array.slice(0,50).join(' ') + '...';
}

const prettifyDate = (str) => {
  const array = str.split(' ');
  array[0] += '. ';
  array[1] += ' ';
  array[2] += ', ';
  return array;
}
