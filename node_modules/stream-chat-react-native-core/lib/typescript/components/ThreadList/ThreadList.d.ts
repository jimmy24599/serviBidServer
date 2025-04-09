import React from 'react';
import { ThreadsContextValue } from '../../contexts/threadsContext/ThreadsContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type ThreadListProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ThreadsContextValue<StreamChatGenerics>, 'additionalFlatListProps' | 'isFocused' | 'onThreadSelect' | 'ThreadListItem' | 'ThreadListEmptyPlaceholder' | 'ThreadListLoadingIndicator' | 'ThreadListUnreadBanner'> & {
    ThreadList?: React.ComponentType;
};
export declare const DefaultThreadListEmptyPlaceholder: () => React.JSX.Element;
export declare const DefaultThreadListLoadingIndicator: () => React.JSX.Element;
export declare const DefaultThreadListLoadingNextIndicator: () => React.JSX.Element;
export declare const ThreadList: (props: ThreadListProps) => React.JSX.Element;
//# sourceMappingURL=ThreadList.d.ts.map