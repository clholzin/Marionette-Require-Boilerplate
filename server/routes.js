var passport = require('passport');
var Account = require('./models/account');
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.json({ user : req.user});
        console.log('user: '+req.user);
    });
    app.get('/index', function (req, res) {
        res.json({ user : req.user});
        console.log('user: '+req.user);
    });


    app.get('/register', function(req, res) {
        //res.send("index");
        console.log('register route');
    });
    app.post('/register', function(req, res) {
        Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
            if (err) {
                //return res.render("register", {info: "Sorry. That username already exists. Try again."});
                return res.json({info:"Sorry. That username already exists. Try again."});
            }
            passport.authenticate('local')(req, res, function () {
                //res.redirect('/#');
                res.json({ user : req.user});
            });
        });
    });


    app.get('/login', function(req, res) {
        res.json({ user : req.user });
        console.log(req.user);
    });
    app.post('/login', passport.authenticate('local'), function(req, res) {
       // res.redirect('/#');
        res.json({ user : req.user});
        console.log('logged in');
    });
    app.get('/logout', function(req, res) {
        req.logout();
       res.redirect('/#login');
        console.log('logged out');
    });


    app.get('/ping', function(req, res){
        res.send("pong!", 200);
    });
};/**
 * Created by Craig on 2/17/2015.
 */
