const usermodel = require("../module/user.model")
const bcryptjs = require("bcryptjs")
const sendemailVerification  = require("../Utils/emailVerification")



const Signup = async (req, res) => {


    try {
        console.log(req.body);
        const { username, password, email } = req.body

        if (!username || !password || !email) {
            return res.status(400).json({ message: "All fields are mandatory", status: false })
        }
        const hashedPassword = await bcryptjs.hash(password, 10)
        console.log(hashedPassword);

        const otp = Math.floor(100000 + Math.random() * 900000).toString()
        const otpExpires = Date.now() + 15 * 60 * 1000 // 15 min
        const newUser = await usermodel.create({
             ...req.body, 
             password: hashedPassword ,
             isVerified:false,
             otp,
             otpExpires
            })
        if (newUser) {
            const sentmail = await sendemailVerification(email, username, otp)
            console.log(sentmail);

            return res.status(200).json({ message: "Sign up successful", status: true })

        }

    } catch (error) {
        console.log(error);
        if (error.message.includes('E11000 duplicate key error collection')) {
            return res.status(400).json({ message: 'user already exist', status: false })

        }
        return res.status(500).json({ message: error.message, status: false })


    }


}

const verifyOtp =  async (req, res)=> {
    try {
        const {otp,  email} = req.body
 
        const existuser = await usermodel.findOne({email})
        if (!existuser) {
            return res.status(404).json({ message: "user not found", status: false })
        }

        if (existuser.otp !== String(otp)) {
            return res.status(400).json({ message: "Incorrect verification code", status: false })
        }

        if (existuser.otpExpires < Date.now()) {
            return res.status(400).json({ message: "Code has expired, please request a new one", status: false })
        }

        existuser.isVerified = true
        existuser.otp = undefined
        await existuser.save()

        return res.status(200).json({ message: "Email verified successfully", status: true })
        
    } catch (error) {
        return res.status(500).json({message: error.message, status: false})
        
    }
}





const Login = async (req, res) => {
    try {
        console.log(req.body);
        const { username, password } = req.body


        if (!username || !password) {
            return res.status(400).json({ message: "All fields are mandatory", status: false })
        }

        const existingUser = await usermodel.findOne({ username })

        if (!existingUser) {
            return res.status(404).json({ message: "user not found", status: false });
        }
       const correctPassword = await bcryptjs.compare(password, existingUser.password)
            if (!correctPassword) {
                return res.status(404).json({ message: "Incorrect username or password", status: false }) 
            }         
        
        if (!existingUser.isVerified) {
             return res.status(400).json({ message: "email is not verified, check your mail.", status: false });


        }
        return res.status(200).json({ message: "login successful", status: true });

    } catch (error) {
        console.log(error);
        if (error.message.includes('E11000 duplicate key error collection')) {
            return res.status(400).json({ message: 'user already exist', status: false })
        }
        return res.status(500).json({ message: error.message, status: false })
    }
}
module.exports = { Signup, Login, verifyOtp }
