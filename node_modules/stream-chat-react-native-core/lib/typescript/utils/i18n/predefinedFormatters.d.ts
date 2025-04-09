import { Streami18n } from './Streami18n';
export type TimestampFormatterOptions = {
    calendar?: boolean | null;
    calendarFormats?: Record<string, string>;
    format?: string;
};
export type FormatterFactory<V> = (streamI18n: Streami18n) => (value: V, lng: string | undefined, options: Record<string, unknown>) => string;
export type CustomFormatters = Record<string, FormatterFactory<any>>;
export type PredefinedFormatters = {
    timestampFormatter: FormatterFactory<string | Date>;
};
export declare const predefinedFormatters: PredefinedFormatters;
//# sourceMappingURL=predefinedFormatters.d.ts.map