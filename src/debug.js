const fs = require('fs');

module.exports = function(txt) {
  if (process.env.DEBUG === 'true') {
    fs.appendFile('debug.log', `${(new Date().toISOString())}: ${txt}\n`, (err) => {
      if (err) { /* throw err; */ }
    });
  }
};
