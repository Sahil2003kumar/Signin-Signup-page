import User from "../models/user.model.js"
import genToken from "../utils/token.js"
import bcrypt from 'bcryptjs'

//signup login write here

export const signUp = async (req, res) => {
    try {
        const { fullName, email, password } = req.body
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User Already exist" })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password length should at least 6 character" })
        }

        //hashing the password through bcrypt js

        const hashedPassword = await bcrypt.hash(password, 10)
        user = await User.create({
            fullName,
            email,
            password: hashedPassword
        })

        //assign token and using token function in the utils folder 
        const token = await genToken(user._id)
        //now passing the token in the form of cookie 
        res.cookie("token", token, {
            secure: false,
            sameSite: "strict",
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true
        })
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ message: `signup error${error}` })
    }
}

//signin controller logic
export const signIn = async (req, res) => {
    try {
        const {  email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User does not exist" })
        }
//Matching the user password and hashedpassword 
const isMatch=await bcrypt.compare(password,user.password)
if(!isMatch){
return res.status(400).json({message:"incorrect password and Email"})
}

        //assign token and using token function in the utils folder 
        const token = await genToken(user._id)
        //now passing the token in the form of cookie 
        res.cookie("token", token, {
            secure: false,
            sameSite: "strict",
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true
        })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: `signIn error${error}` })
    }
}

//signout controller logic
export const signOut = async(req, res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"logout successfully"})
    } catch (error) {
        
        return res.status(200).json({message:`signout error ${error}`})
    }
}