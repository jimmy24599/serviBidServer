Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMockedApis = void 0;
var useMockedApis = exports.useMockedApis = function useMockedApis(client, apiResponses) {
  apiResponses.forEach(function (_ref) {
    var response = _ref.response,
      type = _ref.type;
    jest.spyOn(client.axiosInstance, type).mockImplementation().mockResolvedValue(response);
  });
};
//# sourceMappingURL=useMockedApis.js.map