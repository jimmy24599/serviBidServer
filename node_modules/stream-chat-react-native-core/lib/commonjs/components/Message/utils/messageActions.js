Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageActions = void 0;
var _native = require("../../../native");
var messageActions = exports.messageActions = function messageActions(_ref) {
  var banUser = _ref.banUser,
    copyMessage = _ref.copyMessage,
    deleteMessage = _ref.deleteMessage,
    editMessage = _ref.editMessage,
    error = _ref.error,
    flagMessage = _ref.flagMessage,
    isMyMessage = _ref.isMyMessage,
    isThreadMessage = _ref.isThreadMessage,
    markUnread = _ref.markUnread,
    message = _ref.message,
    ownCapabilities = _ref.ownCapabilities,
    pinMessage = _ref.pinMessage,
    quotedReply = _ref.quotedReply,
    retry = _ref.retry,
    showMessageReactions = _ref.showMessageReactions,
    threadReply = _ref.threadReply,
    unpinMessage = _ref.unpinMessage;
  if (showMessageReactions) {
    return [];
  }
  var actions = [];
  if (error && isMyMessage) {
    actions.push(retry);
  }
  if (ownCapabilities.quoteMessage && !isThreadMessage && !error) {
    actions.push(quotedReply);
  }
  if (ownCapabilities.sendReply && !isThreadMessage && !error) {
    actions.push(threadReply);
  }
  if (isMyMessage && ownCapabilities.updateOwnMessage || !isMyMessage && ownCapabilities.updateAnyMessage) {
    actions.push(editMessage);
  }
  if (ownCapabilities.readEvents && !error && !isThreadMessage) {
    actions.push(markUnread);
  }
  if ((0, _native.isClipboardAvailable)() && message.text && !error) {
    actions.push(copyMessage);
  }
  if (!isMyMessage && ownCapabilities.flagMessage) {
    actions.push(flagMessage);
  }
  if (ownCapabilities.pinMessage && !message.pinned) {
    actions.push(pinMessage);
  }
  if (ownCapabilities.pinMessage && message.pinned) {
    actions.push(unpinMessage);
  }
  if (!isMyMessage && ownCapabilities.banChannelMembers) {
    actions.push(banUser);
  }
  if (isMyMessage && ownCapabilities.deleteOwnMessage || !isMyMessage && ownCapabilities.deleteAnyMessage) {
    actions.push(deleteMessage);
  }
  return actions;
};
//# sourceMappingURL=messageActions.js.map