Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReactions = void 0;
var _mapStorableToReaction = require("../mappers/mapStorableToReaction");
var _SqliteClient = require("../SqliteClient");
var getReactions = exports.getReactions = function getReactions(_ref) {
  var reactions = _ref.reactions;
  _SqliteClient.SqliteClient.logger == null || _SqliteClient.SqliteClient.logger('info', 'getReactions', {
    reactions: reactions
  });
  return reactions.map(function (reaction) {
    return Object.assign({}, (0, _mapStorableToReaction.mapStorableToReaction)(reaction));
  });
};
//# sourceMappingURL=getReactions.js.map