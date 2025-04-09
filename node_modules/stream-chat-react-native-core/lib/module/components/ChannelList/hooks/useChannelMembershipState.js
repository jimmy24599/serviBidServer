Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChannelMembershipState = useChannelMembershipState;
var _useSelectedChannelState = require("../../../hooks/useSelectedChannelState");
var selector = function selector(channel) {
  return channel.state.membership;
};
var keys = ['member.updated'];
function useChannelMembershipState(channel) {
  return (0, _useSelectedChannelState.useSelectedChannelState)({
    channel: channel,
    selector: selector,
    stateChangeEventKeys: keys
  });
}
//# sourceMappingURL=useChannelMembershipState.js.map