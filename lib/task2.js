"use strict";

var _csvtojson = _interopRequireDefault(require("csvtojson"));
var _nodeFs = _interopRequireDefault(require("node:fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var csvFilePath = './csv/nodejs-hw1-ex1.csv';
(0, _csvtojson["default"])().fromFile(csvFilePath).then(function (jsonObj) {
  try {
    var write = _nodeFs["default"].createWriteStream('./my-data.txt', 'utf8');
    write.write(JSON.stringify(jsonObj));
  } catch (error) {
    console.log(error);
  }
});