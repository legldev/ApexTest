const fs = require('fs');
const { json } = require('body-parser');

readText = (url) => {
    let rawdata = fs.readFileSync(url);
    let jsonParsed = JSON.parse(rawdata);
    return jsonParsed
}

module.exports = {
    readText
  };