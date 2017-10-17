var express = require('express')
, router = express.Router();

// Angular Routes

/**
 * https Router Gets
 */

//  router.get('/login', LoginPageCheck) // get login

/**
 * https Router Posts
 */

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




module.exports = router