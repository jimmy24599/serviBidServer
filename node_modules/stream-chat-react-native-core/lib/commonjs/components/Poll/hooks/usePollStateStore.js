Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePollStateStore = void 0;
var _contexts = require("../../../contexts");
var _hooks = require("../../../hooks");
var usePollStateStore = exports.usePollStateStore = function usePollStateStore(selector) {
  var _usePollContext = (0, _contexts.usePollContext)(),
    poll = _usePollContext.poll;
  return (0, _hooks.useStateStore)(poll.state, selector);
};
//# sourceMappingURL=usePollStateStore.js.map