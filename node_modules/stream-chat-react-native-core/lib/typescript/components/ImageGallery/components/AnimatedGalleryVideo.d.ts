import React from 'react';
import { ViewStyle } from 'react-native';
import type { StyleProp } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import { VideoType } from '../../../native';
export type AnimatedGalleryVideoType = {
    attachmentId: string;
    handleEnd: () => void;
    handleLoad: (index: string, duration: number) => void;
    handleProgress: (index: string, progress: number, hasEnd?: boolean) => void;
    index: number;
    offsetScale: SharedValue<number>;
    paused: boolean;
    previous: boolean;
    scale: SharedValue<number>;
    screenHeight: number;
    selected: boolean;
    shouldRender: boolean;
    source: {
        uri: string;
    };
    translateX: SharedValue<number>;
    translateY: SharedValue<number>;
    videoRef: React.RefObject<VideoType>;
    repeat?: boolean;
    style?: StyleProp<ViewStyle>;
};
export declare const AnimatedGalleryVideo: React.MemoExoticComponent<(props: AnimatedGalleryVideoType) => React.JSX.Element>;
//# sourceMappingURL=AnimatedGalleryVideo.d.ts.map