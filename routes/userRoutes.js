const express = require('express')
const { registerUser, loginUser, currentUser } = require('../controllers/userController')
const Router = express.Router()

Router.post('/register',registerUser)
Router.post('/login',loginUser)
Router.get('/current',currentUser)
module.exports = Router