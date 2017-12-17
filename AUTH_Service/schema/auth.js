var loginSchema = {
  "properties":{
    "email": {
    "format": "email",
    "type": "string",
    "required": true
    }, 
    "password": {
    "maxLength": 50, 
    "type": "string",
    "required":true
    }
  }, 
  "type": "object",
  "required":true
};

var getuserSchema = {
  "properties":{
    "_id": {
    "format": "email",
    "type": "string",
    "required": true
    }
  }, 
  "type": "object",
  "required":true
};

var signupSchema = {
  "properties":{
    "name": {
    "maxLength": 50, 
    "type": "string",
    "required":true
    }, 
    "password": {
    "maxLength": 50, 
    "type": "string",
    "required":true
    },      
    "email": {
    "format": "email", 
    "type": "string",
    "required": true
    },      
    "role": {
    "format": "string", 
    "type": "string",
    "required": true
    }

  }, 
  "type": "object",
  "required":true
};

var authSchema = [];
authSchema.push({"loginSchema":loginSchema});
authSchema.push({"signupSchema":signupSchema});
authSchema.push({"getuserSchema":getuserSchema});
module.exports = authSchema;