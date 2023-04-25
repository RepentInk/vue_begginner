const express = require("express")
require('./db/dbConfig')
const traineeRoutes = require('./routes/traineeRoutes')

const app = express()
app.use(express.json())

// Routes
app.use('/trainee',traineeRoutes)
app.use('*/', (req,res) => res.status(404).send("Error 404.. Page not Found"))

const PORT = 3000 || process.env

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}...`)
})