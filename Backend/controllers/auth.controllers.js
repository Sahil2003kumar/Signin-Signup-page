import User from "../models/user.model.js"

const sigUp=async (req,res)=>{
try {
    const {fullName, email,password}=req.body
    const user= await User.findOne({email})
    if(user){
        return res.status(400).json({message:"User Already exist"})
    }
if(password.length<6){
    return res.status(400).json({message:"Password length should at least 6 character"})
}

//hashing the password through bcrypt js

const hashedPassword= await bcrypt.hash(password,10)
    const newUser= await User.create({
        fullName,
        email,
        password:hashedPassword
    })


} catch (error) {
    
}
}