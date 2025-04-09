import React from 'react';
import type { ImageStyle, StyleProp } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
type Props = {
    accessibilityLabel: string;
    index: number;
    offsetScale: SharedValue<number>;
    photo: {
        uri: string;
    };
    previous: boolean;
    scale: SharedValue<number>;
    screenHeight: number;
    selected: boolean;
    shouldRender: boolean;
    translateX: SharedValue<number>;
    translateY: SharedValue<number>;
    style?: StyleProp<ImageStyle>;
};
export declare const AnimatedGalleryImage: React.MemoExoticComponent<(props: Props) => React.JSX.Element>;
export {};
//# sourceMappingURL=AnimatedGalleryImage.d.ts.map