const express = require('express')
const { registerUser, loginUser, currentUser } = require('../controllers/userController')
const validateToken = require('../middleware/validateTokenHandler')
const Router = express.Router()

Router.post('/register',registerUser)
Router.post('/login',loginUser)
Router.get('/current',validateToken,currentUser)
module.exports = Router