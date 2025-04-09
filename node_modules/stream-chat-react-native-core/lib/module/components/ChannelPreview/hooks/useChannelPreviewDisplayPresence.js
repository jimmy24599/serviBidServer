Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChannelPreviewDisplayPresence = useChannelPreviewDisplayPresence;
var _ChatContext = require("../../../contexts/chatContext/ChatContext");
var _useSyncClientEvents = require("../../../hooks/useSyncClientEvents");
var selector = function selector(channel, client) {
  var _otherMember$user$onl, _otherMember$user;
  var members = channel.state.members;
  var membersCount = Object.keys(members).length;
  var otherMember = Object.values(members).find(function (member) {
    var _member$user;
    return ((_member$user = member.user) == null ? void 0 : _member$user.id) !== client.userID;
  });
  if (membersCount !== 2) return false;
  return (_otherMember$user$onl = otherMember == null || (_otherMember$user = otherMember.user) == null ? void 0 : _otherMember$user.online) != null ? _otherMember$user$onl : false;
};
var keys = ['user.presence.changed', 'user.updated'];
function useChannelPreviewDisplayPresence(channel) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  return (0, _useSyncClientEvents.useSyncClientEventsToChannel)({
    channel: channel,
    client: client,
    selector: selector,
    stateChangeEventKeys: keys
  });
}
//# sourceMappingURL=useChannelPreviewDisplayPresence.js.map