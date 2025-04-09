Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectedChannelState = useSelectedChannelState;
var _react = require("react");
var _shim = require("use-sync-external-store/shim");
var noop = function noop() {};
function useSelectedChannelState(_ref) {
  var channel = _ref.channel,
    selector = _ref.selector,
    _ref$stateChangeEvent = _ref.stateChangeEventKeys,
    stateChangeEventKeys = _ref$stateChangeEvent === void 0 ? ['all'] : _ref$stateChangeEvent;
  var subscribe = (0, _react.useCallback)(function (onStoreChange) {
    if (!channel) {
      return noop;
    }
    var subscriptions = stateChangeEventKeys.map(function (et) {
      return channel.on(et, function () {
        onStoreChange(selector(channel));
      });
    });
    return function () {
      return subscriptions.forEach(function (subscription) {
        return subscription.unsubscribe();
      });
    };
  }, [channel, selector, stateChangeEventKeys]);
  var getSnapshot = (0, _react.useCallback)(function () {
    if (!channel) {
      return undefined;
    }
    return selector(channel);
  }, [channel, selector]);
  return (0, _shim.useSyncExternalStore)(subscribe, getSnapshot);
}
//# sourceMappingURL=useSelectedChannelState.js.map