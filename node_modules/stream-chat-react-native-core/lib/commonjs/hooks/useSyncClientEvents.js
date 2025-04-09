Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSyncClientEventsToChannel = useSyncClientEventsToChannel;
var _react = require("react");
var _shim = require("use-sync-external-store/shim");
var noop = function noop() {};
function useSyncClientEventsToChannel(_ref) {
  var channel = _ref.channel,
    client = _ref.client,
    selector = _ref.selector,
    _ref$stateChangeEvent = _ref.stateChangeEventKeys,
    stateChangeEventKeys = _ref$stateChangeEvent === void 0 ? ['all'] : _ref$stateChangeEvent;
  var subscribe = (0, _react.useCallback)(function (onStoreChange) {
    if (!client || !channel) {
      return noop;
    }
    var subscriptions = stateChangeEventKeys.map(function (et) {
      return client.on(et, function () {
        onStoreChange(selector(channel, client));
      });
    });
    return function () {
      return subscriptions.forEach(function (subscription) {
        return subscription.unsubscribe();
      });
    };
  }, [channel, client, selector, stateChangeEventKeys]);
  var getSnapshot = (0, _react.useCallback)(function () {
    if (!client || !channel) {
      return undefined;
    }
    var originalSnapshot = selector(channel, client);
    return originalSnapshot;
  }, [channel, client, selector]);
  return (0, _shim.useSyncExternalStore)(subscribe, getSnapshot);
}
//# sourceMappingURL=useSyncClientEvents.js.map