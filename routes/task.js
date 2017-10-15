var express = require('express')
, router = express.Router()
, mongo  = require('mongojs')
, db = mongo('mongodb://antoniadis:2a4b6c!8@ds161069.mlab.com:61069/car_brand', ['tasks', 'tk103'])
, emailgenerator = require('../ServerJavascript/emailer')
, auth = (req, res, next) => {
    return next() 
} // withou auth
// Angular Routes

/**
 * https Router Gets
 */


/**
 * https Router Posts
 */

router.post('/emails', sendEmail) // send email

/**
 * https Router Delete
 */


/**
 * https Router Put
 */

/**
 * Router Functions
 */

// if the user is authenticated redirect to home
function LoginPageCheck(req, res, next) {

    if (req.isAuthenticated()) res.redirect('/')
    else res.json({pol: 'rest'})
}



function sendEmail(req, res, next) {

    let emailContainer = req.body

    console.log('emailer contact dialog: ', emailContainer)

    emailgenerator.contactPromise(emailContainer, fulfilled => {

        let respond = fulfilled

        console.log('\n---> Task Node js contact service: ', respond)
        res.json(respond)
    })

}




module.exports = router