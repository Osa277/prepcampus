const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT

app.use(cors({origin: "http://localhost:3000"}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const MongoConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongoose connected")
    } catch (err) {
        console.error("err connecting to mongoodb: ", err)
        process.exit(1)
    }
}
MongoConnect()

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);



app.use(errMiddleware)
app.listen(PORT)