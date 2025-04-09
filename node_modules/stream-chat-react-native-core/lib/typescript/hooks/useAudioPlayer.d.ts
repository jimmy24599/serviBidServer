import React from 'react';
import { SoundReturnType } from '../native';
export type UseSoundPlayerProps = {
    soundRef: React.MutableRefObject<SoundReturnType | null>;
};
/**
 * This hook is used to play, pause, seek and change audio speed.
 * It handles both Expo CLI and Native CLI.
 */
export declare const useAudioPlayer: (props: UseSoundPlayerProps) => {
    changeAudioSpeed: (speed: number) => Promise<void>;
    pauseAudio: () => Promise<void>;
    playAudio: () => Promise<void>;
    seekAudio: (currentTime: number) => Promise<void>;
};
//# sourceMappingURL=useAudioPlayer.d.ts.map