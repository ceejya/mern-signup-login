const express =  require("express")
const app = express()
require("dotenv").config()
const connect = require("./database/db.connect")
const userrouter = require("./route/user.route")
const cors = require("cors")

app.use(cors({origin: "*"}))
app.use(express.json())
app.use("/user", userrouter)

const port = 8004

const startServer = async () => {
    try {
        await connect()
        app.listen(port, () => {
            console.log(`app started at port ${port}`);
        })
    } catch (error) {
        console.error("Server not started because database connection failed.");
        process.exit()
    } 
}

startServer()

