import React from 'react';
import { ScrollViewProps } from 'react-native';
import { PollContextValue } from '../../../../contexts';
export type PollResultsProps = PollContextValue & {
    additionalScrollViewProps?: Partial<ScrollViewProps>;
    PollResultsContent?: React.ComponentType;
};
export declare const PollResultsContent: ({ additionalScrollViewProps, }: Pick<PollResultsProps, "additionalScrollViewProps">) => React.JSX.Element;
export declare const PollResults: ({ additionalScrollViewProps, message, poll, PollResultsContent: PollResultsContentOverride, }: PollResultsProps) => React.JSX.Element;
//# sourceMappingURL=PollResults.d.ts.map