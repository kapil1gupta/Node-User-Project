var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/user';
var md5 = require('md5'); 
exports.resetPassword = function(req,callback){
    MongoClient.connect("mongodb://localhost:27017/user",function(err,db){
        if(err){
        throw err;
        }
        else {   
            if(!(req && req.body && req.body.email && req.body.newPassword && req.body.confirmPassword)){
                var resJson = {
                http_code : "400",
                message : "pls fill all the mandatory field"
                }
                return callback(false,resJson);
            }
            if(req.body.confirmPassword != req.body.newPassword){
                var resJson = {
                    http_code: 400,
                    message: "Both password is not matched!!!!"
                }
                return callback(false,resJson)
            }
            var findQuery = {
                email : req.body.email,
            }
            var updateQuery = {
                $set: {
                    password : req.body.newPassword
                }
            }
            db.collection('user').update(findQuery,updateQuery,function(err,res){
                if(err){
                    throw err
                }
                else {
                var resJson = {
                    http_code: 200,
                    message: "password updated sucessfully!!!!"
                }
                return callback(false,resJson)
            }
            });
        }
    });
}