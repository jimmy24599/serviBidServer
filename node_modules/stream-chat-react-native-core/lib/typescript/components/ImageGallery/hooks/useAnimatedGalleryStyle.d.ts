import type { ImageStyle } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
type Props = {
    index: number;
    offsetScale: SharedValue<number>;
    previous: boolean;
    scale: SharedValue<number>;
    screenHeight: number;
    selected: boolean;
    translateX: SharedValue<number>;
    translateY: SharedValue<number>;
};
export declare const useAnimatedGalleryStyle: ({ index, offsetScale, previous, scale, screenHeight, selected, translateX, translateY, }: Props) => (ImageStyle | {
    transform: ({
        scaleX: number;
        translateY?: undefined;
        translateX?: undefined;
        scale?: undefined;
    } | {
        translateY: number;
        scaleX?: undefined;
        translateX?: undefined;
        scale?: undefined;
    } | {
        translateX: number;
        scaleX?: undefined;
        translateY?: undefined;
        scale?: undefined;
    } | {
        scale: number;
        scaleX?: undefined;
        translateY?: undefined;
        translateX?: undefined;
    })[];
})[];
export {};
//# sourceMappingURL=useAnimatedGalleryStyle.d.ts.map