Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateThreadContext = void 0;
var _hooks = require("../../../hooks");
var selector = function selector(nextValue) {
  return {
    isLoadingNext: nextValue.pagination.isLoadingNext,
    isLoadingPrev: nextValue.pagination.isLoadingPrev,
    latestReplies: nextValue.replies
  };
};
var useCreateThreadContext = exports.useCreateThreadContext = function useCreateThreadContext(_ref) {
  var _useStateStore;
  var allowThreadMessagesInChannel = _ref.allowThreadMessagesInChannel,
    closeThread = _ref.closeThread,
    loadMoreThread = _ref.loadMoreThread,
    openThread = _ref.openThread,
    reloadThread = _ref.reloadThread,
    setThreadLoadingMore = _ref.setThreadLoadingMore,
    thread = _ref.thread,
    threadHasMore = _ref.threadHasMore,
    threadInstance = _ref.threadInstance,
    threadLoadingMore = _ref.threadLoadingMore,
    threadMessages = _ref.threadMessages;
  var _ref2 = (_useStateStore = (0, _hooks.useStateStore)(threadInstance == null ? void 0 : threadInstance.state, selector)) != null ? _useStateStore : {},
    isLoadingNext = _ref2.isLoadingNext,
    isLoadingPrev = _ref2.isLoadingPrev,
    latestReplies = _ref2.latestReplies;
  var contextAdapter = threadInstance ? {
    loadMoreRecentThread: threadInstance.loadNextPage,
    loadMoreThread: threadInstance.loadPrevPage,
    threadInstance: threadInstance,
    threadLoadingMore: isLoadingPrev,
    threadLoadingMoreRecent: isLoadingNext,
    threadMessages: latestReplies != null ? latestReplies : []
  } : {};
  return Object.assign({
    allowThreadMessagesInChannel: allowThreadMessagesInChannel,
    closeThread: closeThread,
    loadMoreThread: loadMoreThread,
    openThread: openThread,
    reloadThread: reloadThread,
    setThreadLoadingMore: setThreadLoadingMore,
    thread: thread,
    threadHasMore: threadHasMore,
    threadLoadingMore: threadLoadingMore,
    threadMessages: threadMessages
  }, contextAdapter);
};
//# sourceMappingURL=useCreateThreadContext.js.map