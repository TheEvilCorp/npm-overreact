#! /usr/bin/env node
var exec = require('child_process').exec;
var fs = require('fs');
// console.log(process.argv.slice(2)[0]);https://overreact.herokuapp.com
var projectName = process.argv.slice(2)[0].split('-')[0];
var append = 0;

function unzipIt(project, counter){
  fs.stat(`./${project}`, function(err, stats) {
    if(!stats) {
      return exec(`curl -O https://overreact.herokuapp.com/zips/${process.argv.slice(2)[0]}.zip; unzip -qq -d ./${project} ${process.argv.slice(2)[0]}.zip && f=(./${project}/*) && mv ./${project}/*/* ${project};rm -rf ./${project}/${projectName};rm -rf ${process.argv.slice(2)[0]}.zip; mv ./${project}/*/*; echo cd into ${project}${counter <= 0 ? '.' : ', your project name was taken in the cwd, thus the appended number.'} If you requested a starter kit,  run "npm install" then "npm start", then visit your site at localhost:3000. Enjoy!;`, function(err, stdout) {
        console.log(stdout);
      })
      // console.log(process.cwd());
    } else {
      counter++;
      project = projectName + counter;
      unzipIt(project, counter);
    }
  });
}
unzipIt(projectName, append);
