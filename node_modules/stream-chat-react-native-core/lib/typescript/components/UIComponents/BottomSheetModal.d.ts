import React, { PropsWithChildren } from 'react';
export type BottomSheetModalProps = {
    /**
     * Function to call when the modal is closed.
     * @returns void
     */
    onClose: () => void;
    /**
     * Whether the modal is visible.
     */
    visible: boolean;
    /**
     * The height of the modal.
     */
    height?: number;
};
/**
 * A modal that slides up from the bottom of the screen.
 */
export declare const BottomSheetModal: (props: PropsWithChildren<BottomSheetModalProps>) => React.JSX.Element;
//# sourceMappingURL=BottomSheetModal.d.ts.map