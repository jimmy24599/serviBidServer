import type { Channel, CommandResponse, StreamChat } from 'stream-chat';
import type { EmojiSearchIndex, MentionAllAppUsersQuery } from '../contexts/messageInputContext/MessageInputContext';
import type { SuggestionCommand, SuggestionComponentType, SuggestionUser } from '../contexts/suggestionsContext/SuggestionsContext';
import { Emoji } from '../emoji-data';
import type { DefaultStreamChatGenerics } from '../types/types';
export type TriggerSettingsOutputType = {
    caretPosition: string;
    key: string;
    text: string;
};
export type TriggerSettings<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    '/'?: {
        dataProvider: (query: CommandResponse<StreamChatGenerics>['name'], text: string, onReady?: (data: CommandResponse<StreamChatGenerics>[], q: CommandResponse<StreamChatGenerics>['name']) => void, options?: {
            limit?: number;
        }) => SuggestionCommand<StreamChatGenerics>[];
        output: (entity: CommandResponse<StreamChatGenerics>) => TriggerSettingsOutputType;
        type: SuggestionComponentType;
    };
    ':'?: {
        dataProvider: (query: Emoji['name'], _: string, onReady?: (data: Emoji[], q: Emoji['name']) => void) => Emoji[] | Promise<Emoji[]>;
        output: (entity: Emoji) => TriggerSettingsOutputType;
        type: SuggestionComponentType;
    };
    '@'?: {
        callback: (item: SuggestionUser<StreamChatGenerics>) => void;
        dataProvider: (query: SuggestionUser<StreamChatGenerics>['name'], _: string, onReady?: (data: SuggestionUser<StreamChatGenerics>[], q: SuggestionUser<StreamChatGenerics>['name']) => void, options?: {
            limit?: number;
            mentionAllAppUsersEnabled?: boolean;
            mentionAllAppUsersQuery?: MentionAllAppUsersQuery<StreamChatGenerics>;
        }) => SuggestionUser<StreamChatGenerics>[] | Promise<void> | void;
        output: (entity: SuggestionUser<StreamChatGenerics>) => TriggerSettingsOutputType;
        type: SuggestionComponentType;
    };
};
export type ACITriggerSettingsParams<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    channel: Channel<StreamChatGenerics>;
    client: StreamChat<StreamChatGenerics>;
    onMentionSelectItem: (item: SuggestionUser<StreamChatGenerics>) => void;
    emojiSearchIndex?: EmojiSearchIndex;
};
export declare const isCommandTrigger: (trigger: Trigger) => trigger is "/";
export declare const isEmojiTrigger: (trigger: Trigger) => trigger is ":";
export declare const isMentionTrigger: (trigger: Trigger) => trigger is "@";
export type Trigger = '/' | '@' | ':';
/**
 * ACI = AutoCompleteInput
 *
 * DataProvider accepts `onReady` function, which will execute once the data is ready.
 * Another approach would have been to simply return the data from dataProvider and let the
 * component await for it and then execute the required logic. We are going for callback instead
 * of async-await since we have debounce function in dataProvider. Which will delay the execution
 * of api call on trailing end of debounce (lets call it a1) but will return with result of
 * previous call without waiting for a1. So in this case, we want to execute onReady, when trailing
 * end of debounce executes.
 */
export declare const ACITriggerSettings: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channel, client, emojiSearchIndex, onMentionSelectItem, }: ACITriggerSettingsParams<StreamChatGenerics>) => TriggerSettings<StreamChatGenerics>;
//# sourceMappingURL=ACITriggerSettings.d.ts.map