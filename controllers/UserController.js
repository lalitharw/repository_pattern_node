const UserService = require("../services/UserService")

const userService = new UserService()

exports.getUsers = async (req,res) => {
    const users = await userService.getAll()
    res.json(users)
}

exports.create = async(req,res) => {
    const user = await userService.create(req.body)
    res.status(200).json(user)
}
