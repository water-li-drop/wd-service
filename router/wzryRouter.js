const express = require('express')
const router = express.Router()

router.get('/index', function (req, res) {
    res.send('Birds home page')
})

module.exports = router