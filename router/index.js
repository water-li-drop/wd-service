const express = require('express')
const router = express.Router()

const wzryRouter = require('./wzryRouter')
// 王者荣耀API
router.use('/wzry',wzryRouter)

module.exports = router