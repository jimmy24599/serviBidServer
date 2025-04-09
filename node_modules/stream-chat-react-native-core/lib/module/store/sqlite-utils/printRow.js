Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printRow = void 0;
var printRow = exports.printRow = function printRow(row) {
  var prettyRow = {};
  for (var key in row) {
    var value = row[key];
    try {
      prettyRow[key] = JSON.parse(value);
    } catch (e) {
      prettyRow[key] = value;
    }
  }
  console.log(JSON.stringify(prettyRow, null, 2));
};
//# sourceMappingURL=printRow.js.map