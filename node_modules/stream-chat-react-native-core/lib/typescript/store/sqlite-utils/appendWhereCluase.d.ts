import type { Schema } from '../schema';
import type { PreparedQueries, TableColumnNames, TableColumnValue } from '../types';
export declare const appendWhereClause: <T extends keyof Schema>(selectQuery: string, whereCondition?: Partial<{ [k in TableColumnNames<T>]: TableColumnValue | TableColumnValue[]; }>) => PreparedQueries;
//# sourceMappingURL=appendWhereCluase.d.ts.map