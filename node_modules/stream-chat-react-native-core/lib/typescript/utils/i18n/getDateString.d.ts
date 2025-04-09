import type { TimestampFormatterOptions } from './predefinedFormatters';
import { TranslatorFunctions } from '../../contexts/translationContext/TranslationContext';
type DateFormatterOptions = TimestampFormatterOptions & Partial<TranslatorFunctions> & {
    /**
     * The timestamp to be formatted.
     */
    date?: string | Date;
    timestampTranslationKey?: string;
};
export declare const noParsingFunctionWarning = "MessageTimestamp was called but there is no datetime parsing function available";
/**
 * Utility function to format the date string.
 */
export declare function getDateString({ calendar, calendarFormats, date, format, t, tDateTimeParser, timestampTranslationKey, }: DateFormatterOptions): string | number | undefined;
export {};
//# sourceMappingURL=getDateString.d.ts.map