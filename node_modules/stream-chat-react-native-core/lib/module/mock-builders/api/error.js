Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.erroredPutApi = exports.erroredPostApi = exports.erroredGetApi = exports.erroredDeleteApi = void 0;
var _utils = require("./utils");
var defaultErrorObject = {
  duration: 0.01,
  exception_fields: {},
  message: 'API resulted in error'
};
var erroredGetApi = exports.erroredGetApi = function erroredGetApi() {
  var customError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var error = Object.assign({}, defaultErrorObject, customError);
  return (0, _utils.mockedApiResponse)(error, 'get', 500);
};
var erroredPostApi = exports.erroredPostApi = function erroredPostApi() {
  var customError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var error = Object.assign({}, defaultErrorObject, customError);
  return (0, _utils.mockedApiResponse)(error, 'post', 500);
};
var erroredPutApi = exports.erroredPutApi = function erroredPutApi() {
  var customError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var error = Object.assign({}, defaultErrorObject, customError);
  return (0, _utils.mockedApiResponse)(error, 'put', 500);
};
var erroredDeleteApi = exports.erroredDeleteApi = function erroredDeleteApi() {
  var customError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var error = Object.assign({}, defaultErrorObject, customError);
  return (0, _utils.mockedApiResponse)(error, 'delete', 500);
};
//# sourceMappingURL=error.js.map