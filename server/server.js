// DEPENDENCIES
// ============
var express = require("express"),
    path = require('path'),
    http = require("http"),
    jade = require("jade"),
    port = (process.env.PORT || 8001),
    app = module.exports = express(),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
livereload = require('livereload');

// Start Node.js
var server = livereload.createServer(app);
server.watch(__dirname + "/../public");
// SERVER CONFIGURATION
// ====================
//app.configure(function () {

    app.use(express["static"](__dirname + "/../public"));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.set('view options', { layout: false });
    app.use(express.errorHandler({

        dumpExceptions:true,

        showStack:true

    }));
    //passport settings
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(app.router);

//});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization');
    res.header('Access-Control-Expose-Headers','cache-control,content-length,content-type,content-encoding,expires,vary,server,x-content-type-options,dataserviceversion,x-aspnet-version,x-powered-by,access-control-allow-origin,access-control-allow-methods,access-control-allow-headers,access-control-expose-headers,date,connection,x-final-url');
    res.header('Accept-encoding', 'application/json, charset=utf-8');
    res.header('Authorization', 'Basic Y2hvbHppbmdlcjoxMnF3IUBRVw==');
    res.header('Cookie', 'fetch');
    res.header('X-CSRF-Token', 'fetch');
    res.header('ETag', 'fetch');
    var csrfToken = res.getHeader('X-CSRF-Token'),
        contentType = res.getHeader('content-type'),
        contentLength = res.getHeader('Content-Length'),
        ETag = res.getHeader('ETag');
    res.set({
        'Content-Type': contentType,
        'X-CSRF-Token':csrfToken,
        'Content-Length': contentLength,
        'ETag': ETag
    });
    console.log(req.method);
    //console.log(req.headers);
    //console.log(res);
    next();
});
/**
app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function(){
    app.use(express.errorHandler());
});**/

// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost/passport_local_mongoose');

// routes
require('./routes')(app);

/**
app.get('/', function(req, res){
    console.log('Main');
        res.render('index.html', {
            //tasks: JSON.stringify(tasks),
            //layout: false
    });
});

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });**/

// SERVER
// ======
// Start Node.js Server
app.listen(port, function(){
    console.log('Welcome to Marionette-Require-Boilerplate!\n\nPlease go to http://localhost:' + port + ' to start using Require.js and Marionette');
});



