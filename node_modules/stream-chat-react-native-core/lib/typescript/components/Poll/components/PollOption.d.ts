import React from 'react';
import { ScrollViewProps } from 'react-native';
import { PollOption as PollOptionClass } from 'stream-chat';
import { PollVoteButtonProps } from './Button';
import { PollContextValue } from '../../../contexts';
export type PollOptionProps = {
    option: PollOptionClass;
    showProgressBar?: boolean;
};
export type PollAllOptionsContentProps = PollContextValue & {
    additionalScrollViewProps?: Partial<ScrollViewProps>;
    PollAllOptionsContent?: React.ComponentType;
};
export declare const PollAllOptionsContent: ({ additionalScrollViewProps, }: Pick<PollAllOptionsContentProps, "additionalScrollViewProps">) => React.JSX.Element;
export declare const PollAllOptions: ({ additionalScrollViewProps, message, poll, PollAllOptionsContent: PollAllOptionsContentOverride, }: PollAllOptionsContentProps) => React.JSX.Element;
export declare const PollOption: ({ option, showProgressBar }: PollOptionProps) => React.JSX.Element;
export declare const VoteButton: ({ onPress, option }: PollVoteButtonProps) => React.JSX.Element | null;
//# sourceMappingURL=PollOption.d.ts.map