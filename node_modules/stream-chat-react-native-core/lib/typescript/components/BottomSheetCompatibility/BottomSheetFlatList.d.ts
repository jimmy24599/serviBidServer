import React from 'react';
import type { FlatListProps } from 'react-native';
import type { AnimatedProps } from 'react-native-reanimated';
import { BottomSheetFlatListMethods } from '@gorhom/bottom-sheet';
import { BottomSheetScrollableProps } from '@gorhom/bottom-sheet';
export type BottomSheetFlatListProps<T> = Omit<AnimatedProps<FlatListProps<T>>, 'decelerationRate' | 'onScroll' | 'scrollEventThrottle'> & BottomSheetScrollableProps & {
    ref?: React.Ref<BottomSheetFlatListMethods>;
};
export declare const BottomSheetFlatList: <T>(props: BottomSheetFlatListProps<T>) => React.JSX.Element;
//# sourceMappingURL=BottomSheetFlatList.d.ts.map