import React from 'react';
export type ProgressControlProps = {
    /**
     * The duration of the audio in seconds
     */
    duration: number;
    /**
     * The color of the filled progress bar
     */
    filledColor: string;
    /**
     * The progress of the progress bar in percentage
     */
    progress: number;
    /**
     * The test ID of the progress control
     */
    testID: string;
    /**
     * The function to be called when the user ends dragging the progress bar
     */
    onEndDrag?: (progress: number) => void;
    /**
     * The function to be called when the user plays or pauses the audio
     * @deprecated Use onStartDrag and onEndDrag instead
     */
    onPlayPause?: (status?: boolean) => void;
    /**
     * The function to be called when the user is dragging the progress bar
     */
    onProgressDrag?: (progress: number) => void;
    /**
     * The function to be called when the user starts dragging the progress bar
     */
    onStartDrag?: (progress: number) => void;
    /**
     * The width of the progress control
     */
    width?: number | string;
};
export declare const ProgressControl: {
    (props: ProgressControlProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ProgressControl.d.ts.map