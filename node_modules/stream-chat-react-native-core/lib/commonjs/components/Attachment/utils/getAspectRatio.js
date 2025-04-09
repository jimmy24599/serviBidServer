Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAspectRatio = getAspectRatio;
var _types = require("../../../types/types");
function getAspectRatio(attachment) {
  if (!(attachment.type === _types.FileTypes.Image || attachment.type === _types.FileTypes.Video)) {
    throw new Error('getAspectRatio() can only be called on an image attachment or video thumbnail');
  }
  if (!attachment.original_width || !attachment.original_height) {
    return 1;
  }
  return attachment.original_width / attachment.original_height;
}
//# sourceMappingURL=getAspectRatio.js.map