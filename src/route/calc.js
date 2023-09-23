// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

//====================================================

router.get('/', function (req, res) {
    res.render('calc', {
        name: 'calc',
        component: [],
        title: 'CALC',
        data: {},
    })
})

//====================================================
// Експортуємо глобальний роутер
module.exports = router
