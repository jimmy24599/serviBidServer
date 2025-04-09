import React from 'react';
export type UnreadMessagesNotificationProps = {
    /**
     * Callback to handle the close event
     */
    onCloseHandler?: () => void;
    /**
     * Callback to handle the press event
     */
    onPressHandler?: () => Promise<void>;
};
export declare const UnreadMessagesNotification: (props: UnreadMessagesNotificationProps) => React.JSX.Element;
//# sourceMappingURL=UnreadMessagesNotification.d.ts.map