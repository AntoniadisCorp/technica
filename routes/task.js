var express = require('express')
, router = express.Router()
, device = require('express-device')
, mongo  = require('mongojs')
, db = mongo('mongodb://ucrabeksjkigvz9:lijaIRixg4xgEZrBMPKj@brghyzdzarocacc-mongodb.services.clever-cloud.com:27017/brghyzdzarocacc',
 [], { ssl: true })
, emailgenerator = require('../ServerJavascript/emailer')
, auth = (req, res, next) => {
    return next() 
} // withou auth
, GBRoutines = require('../ServerJavascript/GlobalRoutines')
, machineId = require('machine-id');

db.on('error', function (err) {
    console.log('database error', err)
})
 
db.on('connect', function () {
    console.log('database connected')
})

router.use(device.capture())

// Angular Routes

/**
 * https Router Gets
 */


/**
 * https Router Posts
 */

router.post('/emails', sendEmail) // send email

router.post('/subscribers', subscribe)

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
    
    /* Conctact Emailer Promise Call back */
    emailgenerator.contactPromise(emailContainer, fulfilled => {

        let respond = fulfilled

        console.log('\n---> Task Node js contact service: ', respond)
        res.json(respond)
    })

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {String} res Json
 */
function subscribe(req, res, next) {
    
    let SubCollection = db.collection('subscribers'),
        Subscriber = req.body,
        date = new Date(),

        newdate = date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1) + '-' + date.getUTCDate() + ' '
            + date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds(),

        userSession = GBRoutines.getUserSession(req, machineId());
    
    // console.log('Subscribe: ', Subscriber)
    // find a document using a native ObjectId
    SubCollection.findOne({

        email: Subscriber.email
    }, (err, doc) => {

        if (err)
            res.json({error: 'Response Error Subscribe Email', errorCode: 0x3})
        if (!doc)
            SubCollection.save({email: Subscriber.email, DateCreated: date, valid: true, used: false, userSession })
        
            res.json({success: 'Email subscribed', successCode: 0x3})
    })
    
}



module.exports = router