const mongoose = require("mongoose")

const connect = async () => {
    try {
      if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is missing from .env")
      }

      const connection = await  mongoose.connect(process.env.MONGODB_URI)
      if (connection) {
       return console.log("Database connected successfully"); }
        
    } catch (error) {
        console.error("Database connection failed:", error.message);
        throw error;
    }
}

module.exports = connect
