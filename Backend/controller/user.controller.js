const usermodel = require("../module/user.model")



const Signup = async (req, res)=> {


    try {
        console.log(req.body);
        const {username, password, email} = req.body
        if (!username, !password, !email) {
          return  res.status(400).json({message: "All fields are mandatory", status:false})
            
        }
        const newUser = await usermodel.create(req.body)
        if (newUser) {
            return res.status(200).json({message: "Sign up successful", status: true})
            
        }
        
    } catch (error) {
        console.log(error);
        if (erro.message.includes('E11000 duplicate key error collection')) {
            return res.status(400).json({message:'user already exist', status:false})
            
        }
        return res.status(500).json({message:error.message, status:false})
        
        
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
            return res.status(401).json({ message: "Invalid username or password", status: false })
        }

        // If passwords are hashed, replace this with: await bcrypt.compare(password, existingUser.password)
        if (existingUser.password !== password) {
            return res.status(401).json({ message: "Invalid username or password", status: false })
        }

        return res.status(200).json({ message: "login successful", status: true })

    } catch (error) {
        console.log(error);
        if (error.message.includes('E11000 duplicate key error collection')) {
            return res.status(400).json({ message: 'user already exist', status: false })
        }
        return res.status(500).json({ message: error.message, status: false })
    }
}
module.exports = {Signup, Login}