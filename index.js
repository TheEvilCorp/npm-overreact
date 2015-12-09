#! /usr/bin/env node
var exec = require('child_process').exec;
var fs = require('fs');
// console.log(process.argv.slice(2)[0]);https://overreact.herokuapp.com
var projectName = process.argv.slice(2)[0].split('-')[0];
var append = 0;

function unzipIt(project, counter){
  fs.stat('./${project}', function(err, stats) {
    if(!stats) {
      exec(`curl -O http://localhost:8000/zips/${process.argv.slice(2)[0]}.zip; unzip -o ${process.argv.slice(2)[0]}.zip;rm -rf ${process.argv.slice(2)[0]}.zip; echo cd into `"${project}"`. If you requested a starter kit,  run "npm install" then "npm start", then visit your site at localhost:3000. Enjoy!`, function(err, stdout) {
        console.log(stdout);
      });
    } else {
      counter++
      project += counter;
      unzipIt(project, counter);
    };
  });
}
unzipIt(projectName, append);
