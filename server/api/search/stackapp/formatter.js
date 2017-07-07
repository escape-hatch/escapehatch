const he = require('he');
const showdown  = require('showdown'),
      converter = new showdown.Converter();
const sanitizeHtml = require('sanitize-html');

module.exports = function (stackList, userErr) {
  const results = stackList.map( item => ({
    url: item.link,
    body: sanitizeHtml(converter.makeHtml(truncateString(item.body))),
    title: he.decode(item.title),
    created: prettifyDate(new Date(item.creation_date * 1e3).toDateString()),
    modified: prettifyDate(new Date(item.last_activity_date * 1e3).toDateString()),
    comments: item.answer_count,
    answered: item.is_answered,
    score: item.score,
    views: item.view_count,
    tags: item.tags,
    vendor: 'stackapp',
    vendor_id: item.question_id,
    error: userErr
    })
  );


  results.sort((a, b) => {
    return a.views > b.views ? -1 : 1;
  });

  return results;
};

// Helper Functions
const truncateString = (str) => {
  const array = str.split(' ');
  if(array.length <=20) return array.join(' ');
  else return array.slice(0,50).join(' ') + '...';
}

const prettifyDate = (str) => {
  const array = str.split(' ');
  array[0] += '. ';
  array[1] += ' ';
  array[2] += ', ';
  return array;
}
