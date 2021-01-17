const isAdmin = (req, res, next) =>
  !req.user || !req.user.isAdmin
    ? res.status(401).send('You do not have the permission to view this page')
    : next()

module.exports = isAdmin
