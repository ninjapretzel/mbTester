var request = require('request');

var key = '';
var endpoint = '';
var orgName = '';
var accountName = '';


request({
  url: endpoint, //URL to hit
  qs: {from: 'Manager Post Test', time: +new Date()}, //Query string data
  method: 'POST',
  headers: {
    'Authorization': key,
  },
  json: {
    manager: {
      'organization':orgName,
      'account': accountName,
    },
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
