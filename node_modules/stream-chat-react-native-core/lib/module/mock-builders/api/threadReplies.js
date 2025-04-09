Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.threadRepliesApi = void 0;
var _utils = require("./utils");
var threadRepliesApi = exports.threadRepliesApi = function threadRepliesApi() {
  var replies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var result = {
    messages: replies
  };
  return (0, _utils.mockedApiResponse)(result, 'get');
};
//# sourceMappingURL=threadReplies.js.map