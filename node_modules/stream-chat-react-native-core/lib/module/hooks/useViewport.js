Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useViewport = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var useViewport = exports.useViewport = function useViewport(rounded) {
  var viewportDimensions = (0, _reactNative.useWindowDimensions)();
  var vw = (0, _react.useCallback)(function (percentageWidth) {
    var value = viewportDimensions.width * (percentageWidth / 100);
    return rounded ? Math.round(value) : value;
  }, [rounded, viewportDimensions.width]);
  var vh = (0, _react.useCallback)(function (percentageHeight) {
    var value = viewportDimensions.height * (percentageHeight / 100);
    return rounded ? Math.round(value) : value;
  }, [rounded, viewportDimensions.height]);
  return {
    vh: vh,
    vw: vw
  };
};
//# sourceMappingURL=useViewport.js.map