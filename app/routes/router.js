const express = require('express')
const router = express.Router()

router.use(express.static("public"))

// page routes
const stoutsRoutes = require('./api/stoutsRoutes')
router.use('/stouts', stoutsRoutes)

const aleRoutes = require('./api/aleRoutes')
router.use('/ale', aleRoutes)


//build a homepage
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Home',
        name: 'A Cold One With The Boys'
    })
})

//error page
router.get('*', (req, res)=> {
    if (req.url == '/favicon.ico'){
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 Error',
            name: '404 Error'
        })
    }
})

module.exports = router