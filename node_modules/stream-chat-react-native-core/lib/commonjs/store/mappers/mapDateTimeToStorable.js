Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDateTimeToStorable = void 0;
var mapDateTimeToStorable = exports.mapDateTimeToStorable = function mapDateTimeToStorable(datetime) {
  if (!datetime) {
    return '';
  }
  return new Date(datetime).toISOString();
};
//# sourceMappingURL=mapDateTimeToStorable.js.map