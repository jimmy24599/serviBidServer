Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerNativeHandlers = exports.isVideoPlayerAvailable = exports.isSoundPackageAvailable = exports.isShareImageAvailable = exports.isImagePickerAvailable = exports.isImageMediaLibraryAvailable = exports.isHapticFeedbackAvailable = exports.isFileSystemAvailable = exports.isDocumentPickerAvailable = exports.isClipboardAvailable = exports.isAudioRecorderAvailable = exports.NativeHandlers = void 0;
var _reactNative = require("react-native");
var fail = function fail() {
  throw Error('Native handler was not registered, you should import stream-chat-expo or stream-chat-react-native');
};
var NativeHandlers = exports.NativeHandlers = {
  Audio: undefined,
  compressImage: fail,
  deleteFile: fail,
  FlatList: _reactNative.FlatList,
  getLocalAssetUri: fail,
  getPhotos: fail,
  iOS14RefreshGallerySelection: fail,
  oniOS14GalleryLibrarySelectionChange: fail,
  pickDocument: fail,
  pickImage: fail,
  saveFile: fail,
  SDK: '',
  setClipboardString: fail,
  shareImage: fail,
  Sound: undefined,
  takePhoto: fail,
  triggerHaptic: fail,
  Video: undefined
};
var registerNativeHandlers = exports.registerNativeHandlers = function registerNativeHandlers(handlers) {
  if (handlers.Audio !== undefined) {
    NativeHandlers.Audio = handlers.Audio;
  }
  if (NativeHandlers.Audio && handlers.overrideAudioRecordingConfiguration) {
    NativeHandlers.Audio.audioRecordingConfiguration = handlers.overrideAudioRecordingConfiguration(NativeHandlers.Audio.audioRecordingConfiguration);
  }
  if (handlers.compressImage) {
    NativeHandlers.compressImage = handlers.compressImage;
  }
  if (handlers.deleteFile !== undefined) {
    NativeHandlers.deleteFile = handlers.deleteFile;
  }
  if (handlers.FlatList !== undefined) {
    NativeHandlers.FlatList = handlers.FlatList;
  }
  if (handlers.getLocalAssetUri !== undefined) {
    NativeHandlers.getLocalAssetUri = handlers.getLocalAssetUri;
  }
  if (handlers.getPhotos !== undefined) {
    NativeHandlers.getPhotos = handlers.getPhotos;
  }
  if (handlers.iOS14RefreshGallerySelection !== undefined) {
    NativeHandlers.iOS14RefreshGallerySelection = handlers.iOS14RefreshGallerySelection;
  }
  if (handlers.oniOS14GalleryLibrarySelectionChange !== undefined) {
    NativeHandlers.oniOS14GalleryLibrarySelectionChange = handlers.oniOS14GalleryLibrarySelectionChange;
  }
  if (handlers.pickDocument !== undefined) {
    NativeHandlers.pickDocument = handlers.pickDocument;
  }
  if (handlers.pickImage !== undefined) {
    NativeHandlers.pickImage = handlers.pickImage;
  }
  if (handlers.saveFile !== undefined) {
    NativeHandlers.saveFile = handlers.saveFile;
  }
  if (handlers.SDK) {
    NativeHandlers.SDK = handlers.SDK;
  }
  if (handlers.shareImage !== undefined) {
    NativeHandlers.shareImage = handlers.shareImage;
  }
  if (handlers.Sound) {
    NativeHandlers.Sound = handlers.Sound;
  }
  if (handlers.takePhoto !== undefined) {
    NativeHandlers.takePhoto = handlers.takePhoto;
  }
  if (handlers.triggerHaptic !== undefined) {
    NativeHandlers.triggerHaptic = handlers.triggerHaptic;
  }
  if (handlers.Video !== undefined) {
    NativeHandlers.Video = handlers.Video;
  }
  if (handlers.setClipboardString !== undefined) {
    NativeHandlers.setClipboardString = handlers.setClipboardString;
  }
};
var isImagePickerAvailable = exports.isImagePickerAvailable = function isImagePickerAvailable() {
  return !!NativeHandlers.takePhoto;
};
var isDocumentPickerAvailable = exports.isDocumentPickerAvailable = function isDocumentPickerAvailable() {
  return !!NativeHandlers.pickDocument;
};
var isClipboardAvailable = exports.isClipboardAvailable = function isClipboardAvailable() {
  return !!NativeHandlers.setClipboardString;
};
var isVideoPlayerAvailable = exports.isVideoPlayerAvailable = function isVideoPlayerAvailable() {
  return !!NativeHandlers.Video;
};
var isHapticFeedbackAvailable = exports.isHapticFeedbackAvailable = function isHapticFeedbackAvailable() {
  return !!NativeHandlers.triggerHaptic;
};
var isShareImageAvailable = exports.isShareImageAvailable = function isShareImageAvailable() {
  return !!NativeHandlers.shareImage;
};
var isFileSystemAvailable = exports.isFileSystemAvailable = function isFileSystemAvailable() {
  return !!NativeHandlers.saveFile || !!NativeHandlers.deleteFile;
};
var isAudioRecorderAvailable = exports.isAudioRecorderAvailable = function isAudioRecorderAvailable() {
  var _NativeHandlers$Audio;
  return !!((_NativeHandlers$Audio = NativeHandlers.Audio) != null && _NativeHandlers$Audio.startRecording);
};
var isSoundPackageAvailable = exports.isSoundPackageAvailable = function isSoundPackageAvailable() {
  var _NativeHandlers$Sound, _NativeHandlers$Sound2;
  return !!((_NativeHandlers$Sound = NativeHandlers.Sound) != null && _NativeHandlers$Sound.Player) || !!((_NativeHandlers$Sound2 = NativeHandlers.Sound) != null && _NativeHandlers$Sound2.initializeSound);
};
var isImageMediaLibraryAvailable = exports.isImageMediaLibraryAvailable = function isImageMediaLibraryAvailable() {
  return !!NativeHandlers.getPhotos && !!NativeHandlers.iOS14RefreshGallerySelection && !!NativeHandlers.oniOS14GalleryLibrarySelectionChange && !!NativeHandlers.getLocalAssetUri;
};
//# sourceMappingURL=native.js.map