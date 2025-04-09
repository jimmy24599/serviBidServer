import React from 'react';
import { Thread } from 'stream-chat';
export type ThreadListItemProps = {
    thread: Thread;
    timestampTranslationKey?: string;
};
export declare const attachmentTypeIconMap: {
    readonly audio: "🔈";
    readonly file: "📄";
    readonly image: "📷";
    readonly video: "🎥";
    readonly voiceRecording: "🎙️";
};
export declare const ThreadListItemComponent: () => React.JSX.Element;
export declare const ThreadListItem: (props: ThreadListItemProps) => React.JSX.Element;
//# sourceMappingURL=ThreadListItem.d.ts.map