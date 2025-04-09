Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTaskToStorable = void 0;
var mapTaskToStorable = exports.mapTaskToStorable = function mapTaskToStorable(task) {
  return Object.assign({}, task, {
    createdAt: new Date().toISOString(),
    payload: JSON.stringify(task.payload)
  });
};
//# sourceMappingURL=mapTaskToStorable.js.map