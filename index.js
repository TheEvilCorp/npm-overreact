#! /usr/bin/env node
var exec = require('child_process').exec;
var fs = require('fs');

var projectName = process.argv.slice(2).split('-')[0];
fs.stat(`./${req.body.folderName}`, function(err, stats) {
    if(!stats) {
exec(`curl -O http://localhost:8000/${process.argv.slice(2)[0]}.zip; unzip -o OverReact.zip;rm -rf OverReact.zip; echo cd into your project. If you requested a starter kit,  run "npm install" then "npm start", then visit your site at localhost:3000. Enjoy!`, function(err, stdout) {
  console.log(stdout);
});
