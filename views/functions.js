//jshint esversion:6

console.log('hay from functions');
const _ = require('lodash');

exports.isMatch = function(string1, string2){
  if(_.lowerCase(string1) === _.lowerCase(string2)){
    return true;
  }
  else{
    return false;
  }
}
