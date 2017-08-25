// module.exports.index = function(req, res) {
//   res.sendFile(__dirname + "../public/index.html");
// }

const path = require('path');

module.exports.index = function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
};
