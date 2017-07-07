module.exports = (dbList) => {
  let countedList = { github: {}, stackApp: {} };
  console.log(countedList);
  dbList.forEach( link => {
    if (countedList[link.vendor][link.vendor_id]) {
      link.vote === 'upvote'
        ? countedList[link.vendor][link.vendor_id]++
        : countedList[link.vendor][link.vendor_id]--
    }
    else {
      link.vote === 'upvote'
        ? countedList[link.vendor][link.vendor_id] = 1
        : countedList[link.vendor][link.vendor_id] = -1
    }
  })

  return countedList
}
