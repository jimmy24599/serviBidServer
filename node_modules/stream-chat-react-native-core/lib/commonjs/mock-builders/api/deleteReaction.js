Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteReactionApi = void 0;
var _utils = require("./utils");
var _reaction = require("../generator/reaction");
var deleteReactionApi = exports.deleteReactionApi = function deleteReactionApi(message) {
  var reaction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _reaction.generateReaction)();
  var result = {
    duration: 0.01,
    message: message,
    reaction: reaction
  };
  return (0, _utils.mockedApiResponse)(result, 'delete');
};
//# sourceMappingURL=deleteReaction.js.map