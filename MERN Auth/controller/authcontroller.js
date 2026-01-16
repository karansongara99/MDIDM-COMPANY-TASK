const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


exports.register = async (req, res) => {
  const { name, email, password } = req.body

  const userExist = await User.findOne({ email })
 if (userExist) {
  return res.status(400).json({ message: 'User already exists' })
}

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  res.status(201).json({ message: 'User registered successfully' })
}

exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).json({ message: 'User does not exist' })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid credentials' })
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
  res
    .status(200)
    .json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
      message: 'Login successful'
    })
}
