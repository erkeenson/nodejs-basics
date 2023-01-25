"use strict";

var csvFilePath = './csv/nodejs-hw1-ex1.csv';
var csv = require('csvtojson');
var fs = require('fs');
csv().fromFile(csvFilePath).then(function (jsonObj) {
  try {
    fs.writeFile('./my-data.txt', JSON.stringify(jsonObj), 'utf8', function (err) {
      if (err) {
        console.log('data is not written to file');
      }
      console.log('data has been written');
    });
  } catch (error) {
    console.log(error);
  }
  // console.log(jsonObj);
});