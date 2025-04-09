Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateReaction = void 0;
var _user = require("./user");
var generateReaction = exports.generateReaction = function generateReaction() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var user = options.user || (0, _user.generateUser)();
  return Object.assign({
    created_at: new Date(),
    type: 'love',
    user: user,
    user_id: user.id
  }, options);
};
//# sourceMappingURL=reaction.js.map