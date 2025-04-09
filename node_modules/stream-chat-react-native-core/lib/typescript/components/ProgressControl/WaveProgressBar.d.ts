import React from 'react';
export type WaveProgressBarProps = {
    /**
     * The progress of the waveform in percentage
     */
    progress: number;
    /**
     * The waveform data to be displayed
     */
    waveformData: number[];
    /**
     * The number of amplitudes to display
     */
    amplitudesCount?: number;
    /**
     * The color of the filled waveform
     */
    filledColor?: string;
    /**
     * The function to be called when the user ends dragging the waveform
     */
    onEndDrag?: (progress: number) => void;
    /**
     * The function to be called when the user plays or pauses the audio
     * @deprecated Use onStartDrag and onEndDrag instead
     */
    onPlayPause?: (status?: boolean) => void;
    /**
     * The function to be called when the user is dragging the waveform
     */
    onProgressDrag?: (progress: number) => void;
    /**
     * The function to be called when the user starts dragging the waveform
     */
    onStartDrag?: (progress: number) => void;
};
export declare const WaveProgressBar: React.MemoExoticComponent<(props: WaveProgressBarProps) => React.JSX.Element>;
//# sourceMappingURL=WaveProgressBar.d.ts.map