import React from 'react';
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import { ThreadContextValue } from '../../../contexts/threadContext/ThreadContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const InlineLoadingMoreThreadIndicator: () => React.JSX.Element | null;
export type ThreadFooterComponentProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Pick<MessagesContextValue<StreamChatGenerics>, 'Message'>> & Partial<Pick<ThreadContextValue<StreamChatGenerics>, 'parentMessagePreventPress' | 'thread'>>;
export declare const ThreadFooterComponent: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ThreadFooterComponentProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=ThreadFooterComponent.d.ts.map