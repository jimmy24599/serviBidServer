import React from 'react';
import { TranslationContextValue } from '../../../contexts/translationContext/TranslationContext';
export type MessageTimestampProps = Partial<Pick<TranslationContextValue, 'tDateTimeParser'>> & {
    /**
     * Already Formatted date
     */
    formattedDate?: string | Date;
    /**
     * The timestamp of the message.
     */
    timestamp?: string | Date;
    timestampTranslationKey?: string;
};
export declare const MessageTimestamp: (props: MessageTimestampProps) => React.JSX.Element | null;
//# sourceMappingURL=MessageTimestamp.d.ts.map