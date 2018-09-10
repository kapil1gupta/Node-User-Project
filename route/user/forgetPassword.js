var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/user';
const sgMail = require('@sendgrid/mail');

exports.forgetPassword = function(req,callback){
sgMail.setApiKey("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");
const msg = {
  to: 'kapilg@msupply.com',
  from: 'gkapil810@gmail.com',
  subject: 'Password Reset',
  text: 'forget password using nodejs api',
  html: '<strong> Dear Customer, please reset your password </strong>',
};
sgMail.send(msg);
var resJson = {
    http_code : "200",
    message : "mail send sucessfully!!!!!"
}
return callback(false,resJson)
}
