const he = require('he');

module.exports = function (stackList, userErr) {
  const results = stackList.map( item => ({
    url: item.link,
    body: item.question_body,
    title: he.decode(item.title),
    posted_on: item.creation_date,
    updated_on: new Date(item.last_activity_date * 1e3).toDateString(),
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

