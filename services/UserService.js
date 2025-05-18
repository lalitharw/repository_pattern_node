const UserRepository = require("../repositories/UserRepository")

const userRepository = new UserRepository()

class UserService{
    async getAll(){
        try{
            const users = await userRepository.getAll()
            return users
        }
        catch(err){
            console.error("Error fetching users:",err)
            throw new Error("Failed to retrieve users")
        }
    }

    async create(data){
        try{
            const user = await userRepository.create(data)
            return user
        }
        catch(err){
            console.error("Error adding data " + err)
            throw new Error("Failed to retrieve Users")
        }
    }
}

module.exports = UserService