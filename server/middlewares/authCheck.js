function authCheck(req, res, next) {
  if (!req.session.userName) return res.sendStatus(401);
  return next();
}
module.exports = authCheck;
