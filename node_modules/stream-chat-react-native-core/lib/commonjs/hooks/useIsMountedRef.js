Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsMountedRef = void 0;
var _react = require("react");
var useIsMountedRef = exports.useIsMountedRef = function useIsMountedRef() {
  var isMounted = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
//# sourceMappingURL=useIsMountedRef.js.map