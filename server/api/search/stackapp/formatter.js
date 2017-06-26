module.exports = function (stackList) {
  return stackList.map( item => ({
    url: item.link,
    body: item.question_body,
    title: item.title,
    id: item.id,
    posted_on: item.creation_date,
    updated_on: item.last_activity_date,
    comments: item.answer_count,
    answered: item.is_answered,
    score: item.score,
    views: item.view_count,
    tags: item.tags
    })
  )
}
