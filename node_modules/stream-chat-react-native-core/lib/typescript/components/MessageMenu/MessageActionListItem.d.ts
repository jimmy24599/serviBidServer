import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
export type ActionType = 'banUser' | 'blockUser' | 'copyMessage' | 'deleteMessage' | 'editMessage' | 'flagMessage' | 'markUnread' | 'muteUser' | 'pinMessage' | 'selectReaction' | 'reply' | 'retry' | 'quotedReply' | 'threadReply' | 'unpinMessage';
export type MessageActionType = {
    /**
     * Callback when user presses the action button.
     */
    action: () => void;
    /**
     * Type of the action performed.
     * Eg: 'banUser', 'blockUser', 'copyMessage', 'deleteMessage', 'editMessage', 'flagMessage', 'markUnread , 'muteUser', 'pinMessage', 'selectReaction', 'reply', 'retry', 'quotedReply', 'threadReply', 'unpinMessage'
     */
    actionType: ActionType | string;
    /**
     * Title for action button.
     */
    title: string;
    /**
     * Element to render as icon for action button.
     */
    icon?: React.ReactElement;
    /**
     * Styles for underlying Text component of action title.
     */
    titleStyle?: StyleProp<TextStyle>;
};
/**
 * MessageActionListItem - A high-level component that implements all the logic required for a `MessageAction` in a `MessageActionList`
 */
export type MessageActionListItemProps = MessageActionType;
export declare const MessageActionListItem: (props: MessageActionListItemProps) => React.JSX.Element;
//# sourceMappingURL=MessageActionListItem.d.ts.map