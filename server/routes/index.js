/**
 * Created by Craig on 2/17/2015.
 */
var path = require("path");
exports.index = function(req, res){
    res.render('index', { title: "Passport-Examples"});
};
exports.ping = function(req, res){
    res.send("pong!", 200);
};