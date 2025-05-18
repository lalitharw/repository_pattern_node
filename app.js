const express = require("express")
const userRoutes = require("./Routes/userRoutes")

const app = express()
app.use(express.json())

app.use("/api/users",userRoutes)

module.exports = app