Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreatePaginatedMessageListContext = void 0;
var _react = require("react");
var _utils = require("../../../utils/utils");
var useCreatePaginatedMessageListContext = exports.useCreatePaginatedMessageListContext = function useCreatePaginatedMessageListContext(_ref) {
  var channelId = _ref.channelId,
    hasMore = _ref.hasMore,
    loadingMore = _ref.loadingMore,
    loadingMoreRecent = _ref.loadingMoreRecent,
    loadLatestMessages = _ref.loadLatestMessages,
    loadMore = _ref.loadMore,
    loadMoreRecent = _ref.loadMoreRecent,
    messages = _ref.messages,
    setLoadingMore = _ref.setLoadingMore,
    setLoadingMoreRecent = _ref.setLoadingMoreRecent;
  var messagesStr = (0, _utils.reduceMessagesToString)(messages);
  var paginatedMessagesContext = (0, _react.useMemo)(function () {
    return {
      hasMore: hasMore,
      loadingMore: loadingMore,
      loadingMoreRecent: loadingMoreRecent,
      loadLatestMessages: loadLatestMessages,
      loadMore: loadMore,
      loadMoreRecent: loadMoreRecent,
      messages: messages,
      setLoadingMore: setLoadingMore,
      setLoadingMoreRecent: setLoadingMoreRecent
    };
  }, [channelId, hasMore, loadingMore, loadingMoreRecent, messagesStr]);
  return paginatedMessagesContext;
};
//# sourceMappingURL=useCreatePaginatedMessageListContext.js.map