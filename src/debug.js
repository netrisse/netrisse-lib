const fs = require('fs');

module.exports = function(txt) {
  fs.appendFile('debug.log', `${txt}\n`, (err) => {
    if (err) throw err;
  });
};
