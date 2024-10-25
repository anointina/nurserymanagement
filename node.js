const http = require('http')
const fs = require('fs')
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/nursery")
		.then(function(){
			console.log("Database Connected")
		})
const studentschema = new mongoose.Schema({name: String, email: String, message: String});
const studentmodel = mongoose.model('plantcollection', plantschema)