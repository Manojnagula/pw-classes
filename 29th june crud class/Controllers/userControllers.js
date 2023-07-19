const User = require('../models/userModel.js')

exports.home = (req,res)=>{
    res.send("<h1>Home response</h1>")
}
exports.createUser = async(req, res)=>{
    try{
        const {name, email} = req.body
        console.log({name,email})

        if(!name || !email) {
            throw new Error('name and email are required')
        }

        //check if the user is exists
        const userExists = await User.findOne({email})

        if(userExists){
            throw new Error('user already exists')
        }

        const user = await User.create({
            name,
            email
        })

        res.status(201).json({
            success: true,
        message: "User created successfully",
        user      
    })

    }catch(error){
        console.log(error);
        res.status(400).json({
            success : false,
            message: error.message
        })

    }
}

exports.getUsers = async(req,res) => {
    try {
        const users = await User.find({})
        res.status(200).json({
            success : true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

exports.deleteUsers = async(req,res)=>{
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success : true,
            message : "User deleted successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

exports.editUsers = async(req,res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndUpdate(userId,req.body)
        res.status(200).json({
            success : true,
            message : "User updated successfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success : true,
            message : "User updated successfully"
        })
    }
}