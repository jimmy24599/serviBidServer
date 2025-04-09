Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutputFormatAndroidType = exports.InterruptionModeIOS = exports.InterruptionModeAndroid = exports.IOSOutputFormat = exports.IOSAudioQuality = exports.FileTypes = exports.AudioSourceAndroidType = exports.AudioEncoderAndroidType = exports.AndroidOutputFormat = exports.AndroidAudioEncoder = exports.AVModeIOSOption = exports.AVLinearPCMBitDepthKeyIOSType = exports.AVEncodingOption = exports.AVEncoderAudioQualityIOSType = void 0;
var FileTypes = exports.FileTypes = function (FileTypes) {
  FileTypes["Audio"] = "audio";
  FileTypes["File"] = "file";
  FileTypes["Giphy"] = "giphy";
  FileTypes["Image"] = "image";
  FileTypes["Imgur"] = "imgur";
  FileTypes["Video"] = "video";
  FileTypes["VoiceRecording"] = "voiceRecording";
  return FileTypes;
}({});
var AndroidOutputFormat = exports.AndroidOutputFormat = function (AndroidOutputFormat) {
  AndroidOutputFormat[AndroidOutputFormat["DEFAULT"] = 0] = "DEFAULT";
  AndroidOutputFormat[AndroidOutputFormat["THREE_GPP"] = 1] = "THREE_GPP";
  AndroidOutputFormat[AndroidOutputFormat["MPEG_4"] = 2] = "MPEG_4";
  AndroidOutputFormat[AndroidOutputFormat["AMR_NB"] = 3] = "AMR_NB";
  AndroidOutputFormat[AndroidOutputFormat["AMR_WB"] = 4] = "AMR_WB";
  AndroidOutputFormat[AndroidOutputFormat["AAC_ADIF"] = 5] = "AAC_ADIF";
  AndroidOutputFormat[AndroidOutputFormat["AAC_ADTS"] = 6] = "AAC_ADTS";
  AndroidOutputFormat[AndroidOutputFormat["RTP_AVP"] = 7] = "RTP_AVP";
  AndroidOutputFormat[AndroidOutputFormat["MPEG2TS"] = 8] = "MPEG2TS";
  AndroidOutputFormat[AndroidOutputFormat["WEBM"] = 9] = "WEBM";
  return AndroidOutputFormat;
}({});
var AndroidAudioEncoder = exports.AndroidAudioEncoder = function (AndroidAudioEncoder) {
  AndroidAudioEncoder[AndroidAudioEncoder["DEFAULT"] = 0] = "DEFAULT";
  AndroidAudioEncoder[AndroidAudioEncoder["AMR_NB"] = 1] = "AMR_NB";
  AndroidAudioEncoder[AndroidAudioEncoder["AMR_WB"] = 2] = "AMR_WB";
  AndroidAudioEncoder[AndroidAudioEncoder["AAC"] = 3] = "AAC";
  AndroidAudioEncoder[AndroidAudioEncoder["HE_AAC"] = 4] = "HE_AAC";
  AndroidAudioEncoder[AndroidAudioEncoder["AAC_ELD"] = 5] = "AAC_ELD";
  return AndroidAudioEncoder;
}({});
var IOSOutputFormat = exports.IOSOutputFormat = function (IOSOutputFormat) {
  IOSOutputFormat["LINEARPCM"] = "lpcm";
  IOSOutputFormat["AC3"] = "ac-3";
  IOSOutputFormat["60958AC3"] = "cac3";
  IOSOutputFormat["APPLEIMA4"] = "ima4";
  IOSOutputFormat["MPEG4AAC"] = "aac ";
  IOSOutputFormat["MPEG4CELP"] = "celp";
  IOSOutputFormat["MPEG4HVXC"] = "hvxc";
  IOSOutputFormat["MPEG4TWINVQ"] = "twvq";
  IOSOutputFormat["MACE3"] = "MAC3";
  IOSOutputFormat["MACE6"] = "MAC6";
  IOSOutputFormat["ULAW"] = "ulaw";
  IOSOutputFormat["ALAW"] = "alaw";
  IOSOutputFormat["QDESIGN"] = "QDMC";
  IOSOutputFormat["QDESIGN2"] = "QDM2";
  IOSOutputFormat["QUALCOMM"] = "Qclp";
  IOSOutputFormat["MPEGLAYER1"] = ".mp1";
  IOSOutputFormat["MPEGLAYER2"] = ".mp2";
  IOSOutputFormat["MPEGLAYER3"] = ".mp3";
  IOSOutputFormat["APPLELOSSLESS"] = "alac";
  IOSOutputFormat["MPEG4AAC_HE"] = "aach";
  IOSOutputFormat["MPEG4AAC_LD"] = "aacl";
  IOSOutputFormat["MPEG4AAC_ELD"] = "aace";
  IOSOutputFormat["MPEG4AAC_ELD_SBR"] = "aacf";
  IOSOutputFormat["MPEG4AAC_ELD_V2"] = "aacg";
  IOSOutputFormat["MPEG4AAC_HE_V2"] = "aacp";
  IOSOutputFormat["MPEG4AAC_SPATIAL"] = "aacs";
  IOSOutputFormat["AMR"] = "samr";
  IOSOutputFormat["AMR_WB"] = "sawb";
  IOSOutputFormat["AUDIBLE"] = "AUDB";
  IOSOutputFormat["ILBC"] = "ilbc";
  IOSOutputFormat[IOSOutputFormat["DVIINTELIMA"] = 1836253201] = "DVIINTELIMA";
  IOSOutputFormat[IOSOutputFormat["MICROSOFTGSM"] = 1836253233] = "MICROSOFTGSM";
  IOSOutputFormat["AES3"] = "aes3";
  IOSOutputFormat["ENHANCEDAC3"] = "ec-3";
  return IOSOutputFormat;
}({});
var IOSAudioQuality = exports.IOSAudioQuality = function (IOSAudioQuality) {
  IOSAudioQuality[IOSAudioQuality["MIN"] = 0] = "MIN";
  IOSAudioQuality[IOSAudioQuality["LOW"] = 32] = "LOW";
  IOSAudioQuality[IOSAudioQuality["MEDIUM"] = 64] = "MEDIUM";
  IOSAudioQuality[IOSAudioQuality["HIGH"] = 96] = "HIGH";
  IOSAudioQuality[IOSAudioQuality["MAX"] = 127] = "MAX";
  return IOSAudioQuality;
}({});
var InterruptionModeIOS = exports.InterruptionModeIOS = function (InterruptionModeIOS) {
  InterruptionModeIOS[InterruptionModeIOS["MixWithOthers"] = 0] = "MixWithOthers";
  InterruptionModeIOS[InterruptionModeIOS["DoNotMix"] = 1] = "DoNotMix";
  InterruptionModeIOS[InterruptionModeIOS["DuckOthers"] = 2] = "DuckOthers";
  return InterruptionModeIOS;
}({});
var InterruptionModeAndroid = exports.InterruptionModeAndroid = function (InterruptionModeAndroid) {
  InterruptionModeAndroid[InterruptionModeAndroid["DoNotMix"] = 1] = "DoNotMix";
  InterruptionModeAndroid[InterruptionModeAndroid["DuckOthers"] = 2] = "DuckOthers";
  return InterruptionModeAndroid;
}({});
var AudioSourceAndroidType = exports.AudioSourceAndroidType = function (AudioSourceAndroidType) {
  AudioSourceAndroidType[AudioSourceAndroidType["DEFAULT"] = 0] = "DEFAULT";
  AudioSourceAndroidType[AudioSourceAndroidType["MIC"] = 1] = "MIC";
  AudioSourceAndroidType[AudioSourceAndroidType["VOICE_UPLINK"] = 2] = "VOICE_UPLINK";
  AudioSourceAndroidType[AudioSourceAndroidType["VOICE_DOWNLINK"] = 3] = "VOICE_DOWNLINK";
  AudioSourceAndroidType[AudioSourceAndroidType["VOICE_CALL"] = 4] = "VOICE_CALL";
  AudioSourceAndroidType[AudioSourceAndroidType["CAMCORDER"] = 5] = "CAMCORDER";
  AudioSourceAndroidType[AudioSourceAndroidType["VOICE_RECOGNITION"] = 6] = "VOICE_RECOGNITION";
  AudioSourceAndroidType[AudioSourceAndroidType["VOICE_COMMUNICATION"] = 7] = "VOICE_COMMUNICATION";
  AudioSourceAndroidType[AudioSourceAndroidType["REMOTE_SUBMIX"] = 8] = "REMOTE_SUBMIX";
  AudioSourceAndroidType[AudioSourceAndroidType["UNPROCESSED"] = 9] = "UNPROCESSED";
  AudioSourceAndroidType[AudioSourceAndroidType["RADIO_TUNER"] = 1998] = "RADIO_TUNER";
  AudioSourceAndroidType[AudioSourceAndroidType["HOTWORD"] = 1999] = "HOTWORD";
  return AudioSourceAndroidType;
}({});
var OutputFormatAndroidType = exports.OutputFormatAndroidType = function (OutputFormatAndroidType) {
  OutputFormatAndroidType[OutputFormatAndroidType["DEFAULT"] = 0] = "DEFAULT";
  OutputFormatAndroidType[OutputFormatAndroidType["THREE_GPP"] = 1] = "THREE_GPP";
  OutputFormatAndroidType[OutputFormatAndroidType["MPEG_4"] = 2] = "MPEG_4";
  OutputFormatAndroidType[OutputFormatAndroidType["AMR_NB"] = 3] = "AMR_NB";
  OutputFormatAndroidType[OutputFormatAndroidType["AMR_WB"] = 4] = "AMR_WB";
  OutputFormatAndroidType[OutputFormatAndroidType["AAC_ADIF"] = 5] = "AAC_ADIF";
  OutputFormatAndroidType[OutputFormatAndroidType["AAC_ADTS"] = 6] = "AAC_ADTS";
  OutputFormatAndroidType[OutputFormatAndroidType["OUTPUT_FORMAT_RTP_AVP"] = 7] = "OUTPUT_FORMAT_RTP_AVP";
  OutputFormatAndroidType[OutputFormatAndroidType["MPEG_2_TS"] = 8] = "MPEG_2_TS";
  OutputFormatAndroidType[OutputFormatAndroidType["WEBM"] = 9] = "WEBM";
  return OutputFormatAndroidType;
}({});
var AudioEncoderAndroidType = exports.AudioEncoderAndroidType = function (AudioEncoderAndroidType) {
  AudioEncoderAndroidType[AudioEncoderAndroidType["DEFAULT"] = 0] = "DEFAULT";
  AudioEncoderAndroidType[AudioEncoderAndroidType["AMR_NB"] = 1] = "AMR_NB";
  AudioEncoderAndroidType[AudioEncoderAndroidType["AMR_WB"] = 2] = "AMR_WB";
  AudioEncoderAndroidType[AudioEncoderAndroidType["AAC"] = 3] = "AAC";
  AudioEncoderAndroidType[AudioEncoderAndroidType["HE_AAC"] = 4] = "HE_AAC";
  AudioEncoderAndroidType[AudioEncoderAndroidType["AAC_ELD"] = 5] = "AAC_ELD";
  AudioEncoderAndroidType[AudioEncoderAndroidType["VORBIS"] = 6] = "VORBIS";
  return AudioEncoderAndroidType;
}({});
var AVEncodingOption = exports.AVEncodingOption = function (AVEncodingOption) {
  AVEncodingOption["aac"] = "aac";
  AVEncodingOption["alac"] = "alac";
  AVEncodingOption["alaw"] = "alaw";
  AVEncodingOption["amr"] = "amr";
  AVEncodingOption["flac"] = "flac";
  AVEncodingOption["ima4"] = "ima4";
  AVEncodingOption["lpcm"] = "lpcm";
  AVEncodingOption["MAC3"] = "MAC3";
  AVEncodingOption["MAC6"] = "MAC6";
  AVEncodingOption["mp1"] = "mp1";
  AVEncodingOption["mp2"] = "mp2";
  AVEncodingOption["mp4"] = "mp4";
  AVEncodingOption["opus"] = "opus";
  AVEncodingOption["ulaw"] = "ulaw";
  AVEncodingOption["wav"] = "wav";
  return AVEncodingOption;
}({});
var AVModeIOSOption = exports.AVModeIOSOption = function (AVModeIOSOption) {
  AVModeIOSOption["gamechat"] = "gamechat";
  AVModeIOSOption["measurement"] = "measurement";
  AVModeIOSOption["movieplayback"] = "movieplayback";
  AVModeIOSOption["spokenaudio"] = "spokenaudio";
  AVModeIOSOption["videochat"] = "videochat";
  AVModeIOSOption["videorecording"] = "videorecording";
  AVModeIOSOption["voicechat"] = "voicechat";
  AVModeIOSOption["voiceprompt"] = "voiceprompt";
  return AVModeIOSOption;
}({});
var AVEncoderAudioQualityIOSType = exports.AVEncoderAudioQualityIOSType = function (AVEncoderAudioQualityIOSType) {
  AVEncoderAudioQualityIOSType[AVEncoderAudioQualityIOSType["min"] = 0] = "min";
  AVEncoderAudioQualityIOSType[AVEncoderAudioQualityIOSType["low"] = 32] = "low";
  AVEncoderAudioQualityIOSType[AVEncoderAudioQualityIOSType["medium"] = 64] = "medium";
  AVEncoderAudioQualityIOSType[AVEncoderAudioQualityIOSType["high"] = 96] = "high";
  AVEncoderAudioQualityIOSType[AVEncoderAudioQualityIOSType["max"] = 127] = "max";
  return AVEncoderAudioQualityIOSType;
}({});
var AVLinearPCMBitDepthKeyIOSType = exports.AVLinearPCMBitDepthKeyIOSType = function (AVLinearPCMBitDepthKeyIOSType) {
  AVLinearPCMBitDepthKeyIOSType[AVLinearPCMBitDepthKeyIOSType["bit8"] = 8] = "bit8";
  AVLinearPCMBitDepthKeyIOSType[AVLinearPCMBitDepthKeyIOSType["bit16"] = 16] = "bit16";
  AVLinearPCMBitDepthKeyIOSType[AVLinearPCMBitDepthKeyIOSType["bit24"] = 24] = "bit24";
  AVLinearPCMBitDepthKeyIOSType[AVLinearPCMBitDepthKeyIOSType["bit32"] = 32] = "bit32";
  return AVLinearPCMBitDepthKeyIOSType;
}({});
//# sourceMappingURL=types.js.map