import React from 'react';
import type { GestureResponderEvent } from 'react-native';
export type MoreOptionsButtonProps = {
    /** Function that opens attachment options bottom sheet */
    handleOnPress?: ((event: GestureResponderEvent) => void) & (() => void);
};
export declare const MoreOptionsButton: {
    (props: MoreOptionsButtonProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MoreOptionsButton.d.ts.map