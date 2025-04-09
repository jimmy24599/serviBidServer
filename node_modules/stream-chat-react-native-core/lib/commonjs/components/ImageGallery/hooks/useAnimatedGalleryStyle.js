Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimatedGalleryStyle = void 0;
var _reactNativeReanimated = require("react-native-reanimated");
var _useViewport2 = require("../../../hooks/useViewport");
var oneEighth = 1 / 8;
var useAnimatedGalleryStyle = exports.useAnimatedGalleryStyle = function useAnimatedGalleryStyle(_ref) {
  var index = _ref.index,
    offsetScale = _ref.offsetScale,
    previous = _ref.previous,
    scale = _ref.scale,
    screenHeight = _ref.screenHeight,
    selected = _ref.selected,
    translateX = _ref.translateX,
    translateY = _ref.translateY;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  var screenWidth = vw(100);
  var halfScreenWidth = vw(50);
  var animatedGalleryStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    var xScaleOffset = -7 * screenWidth * (0.5 + index);
    var yScaleOffset = -screenHeight * 3.5;
    return {
      transform: [{
        translateX: selected ? translateX.value + xScaleOffset : scale.value < 1 || scale.value !== offsetScale.value ? xScaleOffset : previous ? translateX.value - halfScreenWidth * (scale.value - 1) + xScaleOffset : translateX.value + halfScreenWidth * (scale.value - 1) + xScaleOffset
      }, {
        translateY: selected ? translateY.value + yScaleOffset : yScaleOffset
      }, {
        scale: selected ? scale.value / 8 : oneEighth
      }, {
        scaleX: -1
      }]
    };
  }, [previous, selected]);
  var animatedStyles = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    var xScaleOffset = -7 * screenWidth * (0.5 + index);
    var yScaleOffset = -screenHeight * 3.5;
    return {
      transform: [{
        scaleX: -1
      }, {
        translateY: yScaleOffset
      }, {
        translateX: -xScaleOffset
      }, {
        scale: oneEighth
      }]
    };
  }, [index]);
  return [animatedGalleryStyle, animatedStyles];
};
//# sourceMappingURL=useAnimatedGalleryStyle.js.map