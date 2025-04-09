import React from 'react';
import { MessageInputContextValue } from '../../../contexts/messageInputContext/MessageInputContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type InputGiphySearchProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Pick<MessageInputContextValue<StreamChatGenerics>, 'additionalTextInputProps' | 'cooldownEndsAt' | 'setGiphyActive' | 'setShowMoreOptions'>> & {
    disabled: boolean;
};
export declare const InputGiphySearch: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ additionalTextInputProps: propAdditionalTextInputProps, cooldownEndsAt: propCooldownEndsAt, disabled, setGiphyActive: propSetGiphyActive, setShowMoreOptions: propSetShowMoreOptions, }: InputGiphySearchProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=InputGiphySearch.d.ts.map