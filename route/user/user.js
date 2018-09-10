var express = require('express');
var app = express();
var registerUser = require('./registerUser.js');
var login = require('./login.js')
var forgetPassword = require('./forgetPassword')
var resetPassword = require('./resetPassword')

// register  a user
app.post('/registerUser',function(req,res){
  var callback = function(err,output){
    res.statusCode = output.http_code;
    res.json(output);
  }
  registerUser.addUser(req,callback);
});

//authentication of a user
app.post('/authentication',function(req,res){
  var callback = function(err,output){
    res.statusCode = output.http_code;
    res.json(output);
  }
  login.Authentication(req,callback);
});

// forget password
app.get('/forgetPassword',function(req,res){
  var callback = function(err,output){
    res.statusCode = output.http_code;
    res.json(output);
  }
  forgetPassword.forgetPassword(req,callback);
})

// reset password
app.post('/resetPassword',function(req,res){
  var callback = function(err,output){
    res.statusCode = output.http_code;
    res.json(output);
  }
  resetPassword.resetPassword(req,callback);
})

module.exports = app;