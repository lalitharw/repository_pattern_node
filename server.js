require("dotenv").config()
const app = require("./app")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Database is connected Successfully")).catch((err) => console.log("Something went wrong " + err))

app.get("/",(req,res) => {
    res.status(200).json({
        "message":"Server Up and Running"
    })
})

app.listen(process.env.PORT,() => {
    console.log(`Server started at PORT: ${process.env.PORT}`)
})