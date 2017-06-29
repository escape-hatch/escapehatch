module.exports = (apiResults, dbResults) => {
  const githubIdKeys = Object.keys(dbResults.github)
  const stackAppIdKeys = Object.keys(dbResults.stackApp)
  if (githubIdKeys.length > 0) {
    apiResults.github.forEach(item => {
      githubIdKeys.forEach(id => {
        if (item.vendor_id === +id) {
          item.voteCount = dbResults.github[id]
        }
      })
    })
  }
  if (stackAppIdKeys.length > 0) {
    apiResults.stackApp.forEach(item => {
      stackAppIdKeys.forEach(id => {
        if (item.vendor_id === +id) {
          item.voteCount = dbResults.stackApp[id]
        }
      })
    })
  }
  return apiResults
}

// countedList = { github: {}, stackApp: {} };
// apiObj = { github: [{}], stackApp: [{}] }
