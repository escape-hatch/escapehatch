module.exports = (results) => {
  let combinedResults = {
    error: results.error,
    results: results.github.concat(results.stackapp)
  };

  combinedResults.results = combinedResults.results.sort((a, b) =>
    a.comments - b.comments
  );

  combinedResults.results = combinedResults.results.sort((a, b) =>
    a.voteCount - b.voteCount
  );

  return combinedResults;
};
