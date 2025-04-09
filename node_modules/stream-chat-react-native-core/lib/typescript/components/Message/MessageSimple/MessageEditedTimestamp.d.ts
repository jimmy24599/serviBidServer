import React from 'react';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import { DefaultStreamChatGenerics } from '../../../types/types';
export type MessageEditedTimestampProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Pick<MessageContextValue<StreamChatGenerics>, 'message'>> & Partial<Pick<MessagesContextValue<StreamChatGenerics>, 'MessageTimestamp'>>;
export declare const MessageEditedTimestamp: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageEditedTimestampProps<StreamChatGenerics>) => React.JSX.Element | null;
//# sourceMappingURL=MessageEditedTimestamp.d.ts.map