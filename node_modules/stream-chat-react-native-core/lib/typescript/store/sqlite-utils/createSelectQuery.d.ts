import type { Schema } from '../schema';
import type { PreparedQueries, TableColumnNames, TableColumnValue } from '../types';
/**
 * Creates a simple select query for sqlite.
 *
 * @param {string} table Table name
 * @param {Array} fields Array of columns which need to be selected e.g., ['*'] or ['id', 'name']
 * @param {Object} whereCondition Where condition for select query.
 *  e.g., { id: 'vishal', cid: ['messaging:id1', 'messaging:id2'] }.
 *  All the conditions will be joined with AND in final query.
 * @returns {string} Final select query
 */
export declare const createSelectQuery: <T extends keyof Schema>(table: T, fields?: Array<"*"> | Array<TableColumnNames<T>>, whereCondition?: Partial<{ [k in TableColumnNames<T>]: TableColumnValue | TableColumnValue[]; }>, orderBy?: Partial<{ [k in TableColumnNames<T>]: 1 | -1; }>) => PreparedQueries;
//# sourceMappingURL=createSelectQuery.d.ts.map