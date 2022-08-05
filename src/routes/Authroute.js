const express = require('express')
const user_router = express.Router()

const AuthController = require('../controllers/AuthController')

user_router.post('/register',AuthController.register)
user_router.post('/login',AuthController.login)

module.exports = user_router