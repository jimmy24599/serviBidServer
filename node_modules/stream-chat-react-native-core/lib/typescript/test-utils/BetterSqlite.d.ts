export class BetterSqlite {
    static openDB: () => void;
    static closeDB: () => void;
    static getTables: () => Promise<unknown>;
    static dropAllTables: () => void;
    static selectFromTable: (table: any) => Promise<unknown[]>;
    db: null;
}
//# sourceMappingURL=BetterSqlite.d.ts.map