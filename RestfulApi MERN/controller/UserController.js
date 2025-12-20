import User from '../model/User.js'

export const createUser = async (req, res) => {
  try {
    await User.create(req.body)
    res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error creating user', error: error.message })
  }
}
export const getUser = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching users', error: error.message })
  }
}
export const getUserById = async (req, res) => {
  try {
    const user =
    await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching user', error: error.message })
  }
}
export const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({ message: 'User updated successfully' })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error updating user', error: error.message })
  }
}
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting user', error: error.message })
  }
}
