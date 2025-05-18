const User = require("../models/user")

class UserRepository{
    async getAll(){
        return await User.find();
    }

    async find(id){
        return await User.findById(id)
    }

    async create(data){
        return await User.create(data)
    }

    async delete(id){
        return User.findByIdAndDelete(id);
    }

    async update(id,data){
        return User.findByIdAndUpdate(id,data,{new:true})
    }
}

module.exports = UserRepository