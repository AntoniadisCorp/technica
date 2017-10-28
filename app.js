
var fss = require('fs')
, express = require('express')
, favicon = require('serve-favicon')
, fpath = require('path')
, httpsecurity = require('https')
, socket_io = require('socket.io')
// store session state in browser cookie, keep logged in user if exist from browser or server stopped
, cookieSession = require('cookie-session')
, cookieParser = require('cookie-parser')
, bodyParser = require('body-parser')
, GBRoutines = require('./ServerJavascript/GlobalRoutines')
// , flash    = require('connect-flash')

// Configuring Passport
, passport = require('passport')
, session = require('express-session')
, sessionOptions = {}
, PORT = 3000
// , HOST = 'localhost' //prokopis.hopto.org
, passport = require('passport')
// , mongo  = require('mongojs')
// , db = mongo('mongodb://antoniadis:2a4b6c!8@ds161069.mlab.com:61069/car_brand', ['users'])


, app = express()

// APP ROUTES
, index = require('./routes')
, tasks   = require('./routes/task');


// becomes
var env = process.env.NODE_ENV || 'production'
if ('production' == env) {

   // configure stuff here
   PORT = process.env.PORT || PORT
}

// have a uniqueId
sessionOptions = { secret: GBRoutines.generateUUID('timestamp'), 
    resave: true, 
    saveUninitialized: true,
    cookie: { secure: true },
    cookieName: '__UD',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    secure: true,
    ephemeral: true
}

// app.use(flash()); // use connect-flash for flash messages stored in session



// View Engine
app.use(favicon(fpath.join(__dirname + '/public/dist/favicon.ico')))

// Set Static Folder dist production
app.use(express.static(fpath.join(__dirname + '/public/dist')))

app.set('views', express.static(fpath.join(__dirname + '/public/src/views')))
//app.use('/scripts', express.static(fpath.join(__dirname + '/public/node_modules')))
app.set('view engine', 'ejs')

app.engine('html', require('ejs').renderFile)


// cookieParser
app.use(cookieParser())
// Body Parser MW
app.use(bodyParser.json({limit: '2mb'}))
app.use(bodyParser.urlencoded({limit: '2mb', extended: false}))




app.use(cookieSession({
    keys: ['Pame sta aperathou aurio?', 'Nai kai olo to kalokairi@@@'],
    secret: 'tobo!',
    cookie: { maxAge: 60 * 60 * 1000 },
}))



app.use(session(sessionOptions))
app.use(passport.initialize())
app.use(passport.session())




// USE ROUTES
app.use('/', index)
app.use('/task', tasks)


app.all('*',  (req, res, next) => {

    var schema = (req.headers['x-forwarded-proto'] || 'none').toLowerCase();
    
    if ( req.hostname != 'localhost' && schema != 'https' ) {

        res.set('x-forwarded-proto', 'https');
        res.redirect('https://' + req.get('host') + req.url);

    } else {
        // Use res.sendFile, as it streams instead of reading the file into memory.
        res.sendFile(fpath.join(__dirname + '/public/dist/ind.html'))
    }
    // Cookies that have not been signed
    console.log('----> New User connected ' + `https://${req.headers.host}${req.url}`)

    console.log('DATE: ' + new Date()+' '+req.connection.remoteAddress +' '+req.method+' '+req.url+' '); 
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
    console.log('session Cookies: ', req.session)

    
})






// // catch 404 and forward to error handlerfpath.join(
// app.use( (req, res, next) => {

//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// })

// // will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    })
})

// var attach = (server) => {
    
//     var appio = socket_io.listen(server)
//     , io = require('./ServerJavascript/socket.io')('');
//     io.attach(appio)
// }

// app.io = { attach: attach }

// console.log('HTTPS Server listening on %s:%s'/* , HOST */, PORT)


module.exports = app;