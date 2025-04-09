import React from 'react';
import { MessageActionType } from './MessageActionListItem';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
export type MessageActionListProps = Pick<MessagesContextValue, 'MessageActionListItem'> & {
    /**
     * Function to close the message actions bottom sheet
     * @returns void
     */
    dismissOverlay?: () => void;
    /**
     * An array of message actions to render
     */
    messageActions?: MessageActionType[];
};
export declare const MessageActionList: (props: MessageActionListProps) => React.JSX.Element | null;
//# sourceMappingURL=MessageActionList.d.ts.map