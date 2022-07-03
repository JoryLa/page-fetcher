const req = require('request');
const fs = require('fs')

const url = process.argv[2];
const path = process.argv[3];

const cLineargs = function(url, path) {
  req(url, function (err, res, body) {
    if (err) {
      console.log(err.status);
    }
    const urlBody = res.body
    fs.writeFile(path, urlBody, err => {
      if (err) {
        console.error(err);
      }
    });
    console.log(`Downloaded and saved ${urlBody.length} bytes to ${path}`);
  });
};

cLineargs(url, path);