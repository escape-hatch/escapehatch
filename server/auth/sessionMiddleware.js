module.exports = (req, res, next) => {
  if (req.session && req.query.returnTo) req.session.returnTo = req.query.returnTo;
  console.log("Middleware hit:", req.query, req.query.returnTo);
  next();
};
