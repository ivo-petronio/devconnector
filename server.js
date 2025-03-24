const express = require('express')
const app = express()

// API config
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

// DB config
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
    .connect(db)
    .then( () => console.log("MongoDB is connected!") )
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send("<h1>Guten Tag.</h1>"))

// Routes
app.use("/api/users", users)
app.use("/api/profile", profile)
app.use("/api/posts", posts)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))