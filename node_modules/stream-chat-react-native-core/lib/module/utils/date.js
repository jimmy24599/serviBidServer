Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondsUntil = exports.ONE_SECOND_IN_MS = void 0;
var ONE_SECOND_IN_MS = exports.ONE_SECOND_IN_MS = 1000;
var secondsUntil = exports.secondsUntil = function secondsUntil(date) {
  return Math.trunc((date.getTime() - Date.now()) / ONE_SECOND_IN_MS);
};
//# sourceMappingURL=date.js.map