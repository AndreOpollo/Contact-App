const express = require('express')
const dotenv = require('dotenv').config()
const contactRouter = require('./routes/contactRouter')
const userRouter = require('./routes/userRoutes')
const errorHandler = require('./middleware/errorHandler')
const connectDb = require('./config/dbConnection')

connectDb()
const app = express()


const port = process.env.PORT || 5000
app.use(express.json())
app.use('/api/contacts',contactRouter)
app.use('/api/users',userRouter)

app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})