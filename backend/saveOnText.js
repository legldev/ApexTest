const fs = require('fs');

saveOnText = (data) => {
    const path = 'text.txt';
    const stringData = JSON.stringify(data)

    fs.writeFile(path, stringData, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

module.exports = {
    saveOnText
  };