var request = require('request');

var key = '';
var endpoint = '';
var emailAddr = '';
var userPass = '';

request({
  url: endpoint, //URL to hit
  qs: {from: 'User Post Test', time: +new Date()}, //Query string data
  method: 'POST',
  headers: {
    'Authorization': key
  },
  json: {
    user: {
      'email': emailAddr,
      'password': userPass,
    }
  },
}, function(error, response, body){
  if(error) {
    console.log(error);
  }
  else{
    console.log('Status: ' + response.statusCode);
    console.log('BODY: \n');
    console.log(body);
    console.log(response.statusCode);
  }
});
