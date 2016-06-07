// A little messy, just hits all the get routes on the API
// Make sure to use your own authorization key, also you will need to make sure the url is correct

var request = require('request');

//Authorization key
var key = '';
//API url - Don't forget to include http or https
var apiURL = '';



//Get Account
//With auth
request({
  url: apiURL + '/account',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': key
  },

}, function (error, response, body) {
  //no error and 200 response
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /account");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  //if there is an error then
  else if(error){
    console.log("\nGET - /account");
    console.log("With Authorization Header - ERROR");
    console.log(error);
  }
  else {
    console.log("\nGET - /account");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});
//Get Account
//without auth
request({
  url: apiURL + '/account',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': ''
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /account");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /account");
    console.log("Without Authorization Header - ERROR");
    console.log(error);
  }
  else {
    console.log("\nGET - /account");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});

//--------------------------------------------------------------------------

//Get Managers
//With auth
request({
  url: apiURL + '/managers',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': key
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /managers");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /managers");
    console.log("With Authorization Header - ERROR");
    console.log(error);
  }
  else {
    console.log("\nGET - /managers");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});
//Get Managers
//without auth
request({
  url: apiURL + '/managers',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': ''
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /managers");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /managers");
    console.log("Without Authorization Header - ERROR");
    console.log(error);
  }
  else {
    console.log("\nGET - /managers");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});

//--------------------------------------------------------------------------

//Get Manager Records
//With auth
request({
  url: apiURL + '/manager/573f96a0436d05664056729b/records',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': key
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /managers/id/records");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /managers/id/records - ERROR");
    console.log("With Authorization Header");
    console.log(error);
  }
  else{
    console.log("\nGET - /managers/id/records");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});
//Get Managers Records
//without auth
request({
  url: apiURL + '/manager/573f96a0436d05664056729b/records',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': ''
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /managers/id/records");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /managers/id/records - ERROR");
    console.log("Without Authorization Header");
    console.log(error);
  }
  else{
    console.log("\nGET - /managers/id/records");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});

//--------------------------------------------------------------------------

//Get tag
//With auth
request({
  url: apiURL + '/tag',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': key
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /tag");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /tag");
    console.log("With Authorization Header - ERROR");
    console.log(error);
  }
  else{
    console.log("\nGET - /tag");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});
//Get tag
//without auth
request({
  url: apiURL + '/tag',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': ''
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /tag");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /tag");
    console.log("Without Authorization Header - ERROR");
    console.log(error);
  }
  else{
    console.log("\nGET - /tag");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});

//--------------------------------------------------------------------------

//Get field
//With auth
request({
  url: apiURL + '/field',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': key
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /field");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /field");
    console.log("With Authorization Header - ERROR");
    console.log(error);
  }
  else{
    console.log("\nGET - /field");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});
//Get field
//without auth
request({
  url: apiURL + '/field',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': ''
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /field");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /field");
    console.log("Without Authorization Header - ERROR");
    console.log(error);
  }
  else{
    console.log("\nGET - /field");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});

//--------------------------------------------------------------------------

//Get reminder
//With auth
request({
  url: apiURL + '/reminder',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': key
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /reminder");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /reminder");
    console.log("With Authorization Header - ERROR");
    console.log(error);
  }
  else{
    console.log("\nGET - /reminder");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});
//Get reminder
//without auth
request({
  url: apiURL + '/reminder',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': ''
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /reminder");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /reminder");
    console.log("Without Authorization Header - ERROR");
    console.log(error);
  }
  else{
    console.log("\nGET - /reminder");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});

//--------------------------------------------------------------------------

//Get user
//With auth
request({
  url: apiURL + '/user/573e589432178b732c4b9a0d',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': key
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /user/id");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /user/id");
    console.log("With Authorization Header - ERROR");
    console.log(error);
  }
  else{
    console.log("\nGET - /user/id");
    console.log("With Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});
//Get reminder
//without auth
request({
  url: apiURL + '/user/573e589432178b732c4b9a0d',
  method: 'GET',
  timeout: 2000,
  headers: {
    'Authorization': ''
  },

}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("\nGET - /user/id");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
  else if(error){
    console.log("\nGET - /user/id");
    console.log("Without Authorization Header - ERROR");
    console.log(error);
  }
  else{
    console.log("\nGET - /user/id");
    console.log("Without Authorization Header");
    console.log(response.statusCode);
    console.log(body);
  }
});

