const mongoose= require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")  
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message)
        res.status(500).json({ error: "Failed to connect to MongoDB" })
        process.exit(1)
    }
    
}

module.exports = connectDB