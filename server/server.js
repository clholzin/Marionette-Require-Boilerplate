// DEPENDENCIES
// ============
var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 8001),
    app = module.exports = express(),
    livereload = require('livereload');

// Start Node.js
var server = livereload.createServer(app);
server.watch(__dirname + "/../public");
// SERVER CONFIGURATION
// ====================
app.configure(function () {

    app.use(express["static"](__dirname + "/../public"));
    app.use(express.static(__dirname + '/public/'));
    app.use(express.errorHandler({

        dumpExceptions:true,

        showStack:true

    }));

    app.use(express.bodyParser());

    app.use(app.router);

});


app.get('/', function(req, res){
    console.log('Main');
        res.render('index.html', {
            //tasks: JSON.stringify(tasks),
            //layout: false
    });
});
// SERVER
// ======
// Start Node.js Server
app.listen(port, function(){
    console.log('Welcome to Marionette-Require-Boilerplate!\n\nPlease go to http://localhost:' + port + ' to start using Require.js and Marionette');
});



