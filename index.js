#! /usr/bin/env node
var exec = require('child_process').exec;
var fs = require('fs');
var os = require('os');
var http = require('http');
var fs = require('fs');
var unzip = require('unzip');
// console.log(process.argv.slice(2)[0]);https://overreact.herokuapp.com
var projectName = process.argv.slice(2)[0].split('-')[0];
var append = 0;
var operatingSystem = os.platform();
var cwd = process.cwd();
var hash = process.argv.slice(2)[0];


function unzipIt(project, counter) {
  var options = {
    host: 'www.overreact.io',
    path: '/zips/' + hash + '.zip',
  };

  fs.stat('./' + project, function(err, stats) {
    if(!stats) {
      var req = http.request(options, function(res) {
        var writeStream = fs.createWriteStream('./' + projectName + '.zip');
        res.on('data', function (chunk) {
          writeStream.write(chunk);
        });
        res.on('end', function() {
          writeStream.end();
          fs.createReadStream('./'+projectName+'.zip').pipe(unzip.Extract({ path: './'}));
          fs.unlinkSync('./' + projectName + '.zip');
          rename(project);
        })
      }).end();
    }

  });
}

function rename(source) {
  fs.stat(source, function(err, stats) {
    if(!stats) {
      return rename(source);
    } else {
      var dirName = cwd + '/' + projectName;
      fs.stat(dirName, function(err, stats) {
        if(stats) {
          return console.log('cd into ' + hash +', your project name is already taken in this directory. Run NPM install and enjoy!!!');
        }
        return setTimeout(function(){
          fs.rename(source,  dirName, function(err) {
          if(err) {
            console.log(err);
          } else {
            console.log('cd into ' + projectName + ' and run NPM install and enjoy!!!');
          }
          });
        }, 3000);
      });
    }
  });
}

// function exists(dir, counter) {
//   fs.stat(dir, function(err, stats) {
//     if(stats) return exists(dir + counter, counter);
//     fs.mkdirSync(cwd + '/' + dir)
//   })
//   return dir.split('').slice(2).join('');
// }

unzipIt(hash, append);
