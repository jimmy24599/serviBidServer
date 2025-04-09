import type { Schema } from '../schema';
import type { PreparedQueries, TableColumnNames } from '../types';
export declare const appendOrderByClause: <T extends keyof Schema>(selectQuery: string, orderBy?: Partial<{ [k in TableColumnNames<T>]: 1 | -1; }>) => PreparedQueries;
//# sourceMappingURL=appendOrderByClause.d.ts.map