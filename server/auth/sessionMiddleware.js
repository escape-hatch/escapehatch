module.exports = (req, res, next) => {
  if (req.session && req.query.returnTo) req.session.returnTo = req.query.returnTo;
  next();
};
