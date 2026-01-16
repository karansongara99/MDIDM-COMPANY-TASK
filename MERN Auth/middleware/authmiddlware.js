const jwt = require('jsonwebtoken')
const protectRoute = (req, res, next) => {
  let token = req.headers.authorization
  if (token && token.startsWith('Bearer ')) {
    token = token.split(' ')[1]

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decoded.id
      next()
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' })
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' })
  }
}

module.exports = protectRoute;
