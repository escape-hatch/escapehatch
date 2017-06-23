module.exports = function (gitList) {
  return gitList.map( item => ({
    url: item.html_url,
    body: item.body,
    title: item.title,
    status: item.state,
    id: item.id,
    posted_on: item.created_at,
    updated_on: item.updated_at,
    comments: item.comments
    })
  )
}
