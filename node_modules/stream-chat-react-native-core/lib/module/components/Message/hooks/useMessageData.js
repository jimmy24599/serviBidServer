Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMessageData = void 0;
var _MessageContext = require("../../../contexts/messageContext/MessageContext");
var _utils = require("../../../utils/utils");
var useMessageData = exports.useMessageData = function useMessageData(_ref) {
  var _channel$state$messag;
  var propChannel = _ref.channel,
    propGroupStyles = _ref.groupStyles,
    propIsMyMessage = _ref.isMyMessage,
    propMessage = _ref.message;
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    contextChannel = _useMessageContext.channel,
    contextGroupStyles = _useMessageContext.groupStyles,
    contextIsMyMessage = _useMessageContext.isMyMessage,
    contextMessage = _useMessageContext.message;
  var channel = propChannel || contextChannel;
  var groupStyles = propGroupStyles || contextGroupStyles;
  var isMyMessage = propIsMyMessage || contextIsMyMessage;
  var message = propMessage || contextMessage;
  var isVeryLastMessage = (channel == null || (_channel$state$messag = channel.state.messages[(channel == null ? void 0 : channel.state.messages.length) - 1]) == null ? void 0 : _channel$state$messag.id) === message.id;
  var messageGroupedSingleOrBottom = groupStyles.includes('single') || groupStyles.includes('bottom');
  var isMessageErrorType = message.type === 'error' || message.status === _utils.MessageStatusTypes.FAILED;
  var isMessageTypeDeleted = message.type === 'deleted';
  var isMessageReceivedOrErrorType = !isMyMessage || isMessageErrorType;
  var hasThreadReplies = !!(message != null && message.reply_count);
  return {
    hasThreadReplies: hasThreadReplies,
    isMessageErrorType: isMessageErrorType,
    isMessageReceivedOrErrorType: isMessageReceivedOrErrorType,
    isMessageTypeDeleted: isMessageTypeDeleted,
    isVeryLastMessage: isVeryLastMessage,
    messageGroupedSingleOrBottom: messageGroupedSingleOrBottom
  };
};
//# sourceMappingURL=useMessageData.js.map