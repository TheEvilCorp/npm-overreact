#! /usr/bin/env node
var exec = require('child_process').exec;

// console.log(process.argv.slice(2)[0]);
exec(`curl -O https://overreact.herokuapp.com/zips/${process.argv.slice(2)[0]}.zip; unzip -o ${process.argv.slice(2)[0]}.zip;rm -rf ${process.argv.slice(2)[0]}.zip; echo cd into your project. If you requested a starter kit,  run "npm install" then "npm start", then visit your site at localhost:3000. Enjoy!`, function(err, stdout) {
  console.log(stdout);
});
