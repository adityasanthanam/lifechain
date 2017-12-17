var express = require('express');
var router = express.Router();
var db_url = require('../database');
var db_connect = require('../database/connection.js');
var jwt = require('jsonwebtoken');
var validate = require('express-jsonschema').validate;
var authSchema = require('../schema/auth');
var bcrypt = require('bcrypt-nodejs');
var shortid = require('shortid');
var request = require('request');
function isLoggedin(req, res, next) {
    if (req.headers.auth_token) {
      var query = {"auth_token": req.headers.auth_token};
        db_connect.db_connect('users',query,'authenticate',res,next);
        //next()
    }
    else {
        res.status(500).send({ status:false,ResponseObject: "Unauthorized user"  });
    }
}

router.post('/login', validate({body: authSchema[0].loginSchema}), function (req, res,next) {
var query = req.body;
console.log(query);
var db_call = db_connect.db_connect('users',query,'login',res,next);
//console.log(db_call);
})

router.post('/signup', validate({body: authSchema[1].signupSchema}), function (req, res,next) {
var query = req.body;
var data_input = req.body;

//console.log(query);
var password_hash = bcrypt.hashSync(req.body.password.trim());
query.password = password_hash;
data_input.password = password_hash;
query.user_data = JSON.stringify(data_input);
query.auth_token = ""; 
query.menu = ""; 
query.systemid = shortid.generate().toUpperCase();


var db_call = db_connect.db_connect('users',query,'signup',res,next);
//console.log(db_call);
})

router.get('/user/:id', isLoggedin, function (req, res,next) {
var query = {"id": req.params.id};
console.log(query);
var db_call = db_connect.db_connect('users',query,'getuser',res,next);
// //console.log(db_call);
})

router.post('/check_login', isLoggedin, function (req, res,next) {
res.status(200).send({status:true,ResponseObject: "Authorized user"  });
})

router.post('/getnewapproval',  function (req, res,next) {
var query = {"appstatus": 2};
var db_call = db_connect.db_connect('users',query,'getnewuser',res,next);
})

router.post('/jobpost', isLoggedin,  function (req, res,next) {
var query = req.body;
var db_call = db_connect.db_connect('jobpost',query,'addjobpost',res,next);
})

router.post('/empapproval/:id', isLoggedin,  function (req, res,next) {
var id = req.params.id;
var query = {"id": req.params.id};
var db_call = db_connect.db_connect('users',query,'empapproval',res,next);
})
router.post('/empreject/:id', isLoggedin,  function (req, res,next) {
var id = req.params.id;
var query = {"id": req.params.id};
var db_call = db_connect.db_connect('users',query,'empreject',res,next);
})

router.post('/jobreject/:id', isLoggedin,  function (req, res,next) {
var id = req.params.id;
var query = {"id": req.params.id};
var db_call = db_connect.db_connect('jobpost',query,'jobreject',res,next);
})

router.post('/jobapproval/:id', isLoggedin,  function (req, res,next) {
var id = req.params.id;
var query = {"id": req.params.id};
var db_call = db_connect.db_connect('jobpost',query,'jobapproval',res,next);
})

router.post('/employee/:id', isLoggedin, function (req, res,next) {

var owner_id = req.params.id;
owner_id = owner_id.toString();
var d = new Date();
var n_priv = d.getTime().toString();
var priv_data = JSON.stringify(req.body.private_data);

 var emp_private = {
  "$class": "org.blockchain.network.EmployeePrivateData",
  "employeeprivateID": n_priv,
  "data": priv_data,
  "ownerID": owner_id,
  "owner": "resource:org.blockchain.network.Employee#"+owner_id
}
console.log(emp_private);
var parsed_private = JSON.stringify(emp_private); 
request.post({
	headers: {'content-type' : 'application/json'},
	url:     'http://localhost:3000/api/EmployeePrivateData',
	body:    parsed_private
	}, function(error1, response1, body1){
//add public data 

var d = new Date();
var n_pub = d.getTime().toString();
var pub_data = JSON.stringify(req.body.public_data);


 var emp_pub = {
  "$class": "org.blockchain.network.EmployeePublicData",
  "employeepublicID": n_pub,
  "data": pub_data,
  "ownerID": owner_id,
  "owner": "resource:org.blockchain.network.Employee#"+owner_id
}
var parsed_public = JSON.stringify(emp_pub);
request.post({
	headers: {'content-type' : 'application/json'},
	url:     'http://localhost:3000/api/EmployeePublicData',
	body:    parsed_public
	}, function(error2, response2, body2){
//add employee
var name_emp = req.body.name;
 var emp = {
  "$class": "org.blockchain.network.Employee",
  "employeeID": owner_id,
  "name": name_emp,
  "publicData": "resource:org.blockchain.network.EmployeePublicData#"+n_priv,
  "privateData": "resource:org.blockchain.network.EmployeePrivateData#"+n_pub
} 
var parsed_emp = JSON.stringify(emp);
	request.post({
	headers: {'content-type' : 'application/json'},
	url:     'http://localhost:3000/api/Employee',
	body:    parsed_emp
	}, function(error3, response3, body3){
	res.status(response3.statusCode).send(body3);
	});
//add employee
	});
//add public data
	//res.status(response.statusCode).send(body);
	});
})

module.exports = router;