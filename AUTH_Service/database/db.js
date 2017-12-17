
// var pmongo = require('promised-mongo');

// var url = "mongodb://tvsnext:tvs#123$@34.214.157.254:27017/meeting_room";
// //var db = pmongo('username:password@example.com/mydb', ['mycollection']);
// // Use connect method to connect to the Server
// var db = pmongo(url, ['users']);
// var users = db.collection('users');
//  //console.log(users);
// db.users.find().then(function(docs){
//     console.log(docs); 
//     // docs is an array of all the documents in mycollection 
// });


var url = "mongodb://root:password@localhost:27017/admin";


module.exports = url;



