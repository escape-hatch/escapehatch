const he = require('he');

module.exports = function (stackList, userErr) {
  const results = stackList.map( item => ({
    url: item.link,
    body: item.question_body,
    title: he.decode(item.title),
    created: new Date(item.creation_date * 1e3).toDateString(),
    modified: new Date(item.last_activity_date * 1e3).toDateString(),
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

// during map, check if vendor ID in DB vendor ID
// if so, add DB info to item.
