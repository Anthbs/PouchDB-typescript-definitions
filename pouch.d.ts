﻿/**
 * Define a global PouchDB object
 */


declare var PouchDB: pouchDB.IPouchDB;

import pDB = pouchDB;
import PouchRes = pouchDB.Response;
import PouchOpt = pouchDB.Options;
// Support AMD require
declare module 'PouchDB' {
    export = pouchDB;
}

declare module pouchDB {
    interface IPouchDB {
        new (name: string): IPouchDB;
        new (name: string, options: Options.IBase): IPouchDB;

        destroy(): ng.IPromise<any>;
        destroy(callback: (err: IError, any) => void): any;
        destroy(options: any): ng.IPromise<any>;
        destroy(options: any, callback: (err: IError, any) => void): any;

        put<T>(doc: T): ng.IPromise<Response.IOk>;
        put<T>(doc: T, callback: (err: IError, res: Response.IOk) => void): any;
        put<T>(doc: T, docId: string): ng.IPromise<Response.IOk>;
        put<T>(doc: T, docId: string, callback: (err: IError, res: Response.IOk) => void): any;
        put<T>(doc: T, docId: string, docRev: string): ng.IPromise<Response.IOk>;
        put<T>(doc: T, docId: string, docRev: string, callback: (err: IError, res: Response.IOk) => void): any;
        put<T>(doc: T, docId: string, docRev: string, options: any): ng.IPromise<Response.IOk>;
        put<T>(doc: T, docId: string, docRev: string, options: any, callback: (err: IError, res: Response.IOk) => void): any;
        
        post<T>(doc: T): ng.IPromise<Response.IOk>;
        post<T>(doc: T, callback: (err: IError, res: Response.IOk) => void): any;
        post<T>(doc: T, options: any): ng.IPromise<Response.IOk>;
        post<T>(doc: T, options: any, callback: (err: IError, res: Response.IOk) => void): any;

        get<T>(docId: string): ng.IPromise<T>;
        get<T>(docId: string, callback: (err: IError, res: T) => void): any;
        get<T>(docId: string, options: Options.IFetch): ng.IPromise<T>;
        get<T>(docId: string, options: Options.IFetch, callback: (err: IError, res: T) => void): any;

        remove<T>(doc: T): ng.IPromise<Response.IOk>;
        remove<T>(doc: T, callback: (err: IError, res: Response.IOk) => void): any;
        remove<T>(doc: T, options: any): ng.IPromise<Response.IOk>;
        remove<T>(doc: T, options: any, callback: (err: IError, res: Response.IOk) => void): any;
        remove(docId: string, docRev: string): ng.IPromise<Response.IOk>;
        remove(docId: string, docRev: string, callback: (err: IError, res: Response.IOk) => void): any;
        remove(docId: string, docRev: string, options: any): ng.IPromise<Response.IOk>;
        remove(docId: string, docRev: string, options: any, callback: (err: IError, res: Response.IOk) => void): any;
        
        bulkDocs<T>(docs: T[]): ng.IPromise<Response.IOk[]>;
        bulkDocs<T>(docs: T[], options: Options.IBulkDoc): ng.IPromise<Response.IOk[]>;
        bulkDocs<T>(docs: T[], callback: (err: IError, res: Response.IOk[]) => void): any;
        bulkDocs<T>(docs: T[], options: Options.IBulkDoc, callback: (err: IError, res: Response.IOk[]) => void): any;

        allDocs<T>(): ng.IPromise<Response.IBatchFetch<T>>;
        allDocs<T>(options: Options.IBatchFetch): ng.IPromise<Response.IBatchFetch<T>>;

       // allDocs<T>(options: Options.IBatchFetch): ng.IPromise<Response.IBatchFetch<T>, IError>;
        //allDocs<T>(options: Options.IBatchFetch): ng.IPromise<any>;
        allDocs<T>(callback: (err: IError, res: Response.IBatchFetch<T>) => void): any;
        allDocs<T>(options: Options.IBatchFetch, callback: (err: IError, res: Response.IBatchFetch<T>) => void): any;

        changes(options: Options.IChanges): IPouchDBOn;

        cancel(): IPouchDB;

        replicate: IPouchDBReplicate;
        
        sync(src: string, target: string): IPouchDBOn;
        sync(src: string, target: string, options: Options.ISync): IPouchDBOn;
        sync(remoteDB: string): IPouchDBOn;
        sync(remoteDB: string, options: Options.ISync): IPouchDBOn;
        
        putAttachment(docId: string, attachmentId: string, attachment: Object, type: string): ng.IPromise<Response.IOk>;
        putAttachment(docId: string, attachmentId: string, attachment: Object, type: string, callback: (err: IError, res: Response.IOk) => void): any;
        putAttachment(docId: string, attachmentId: string, rev: string, attachment: Object, type: string): ng.IPromise<Response.IOk>;
        putAttachment(docId: string, attachmentId: string, rev: string, attachment: Object, type: string, callback: (err: IError, res: Response.IOk) => void): any;
        
        getAttachment(docId: string, attachmentId: string): ng.IPromise<Response.IGetAttachement>;
        getAttachment(docId: string, attachmentId: string, options: Options.IGetAttachement): ng.IPromise<Response.IGetAttachement>;
        getAttachment(docId: string, attachmentId: string, callback: (err: IError, res: Response.IGetAttachement) => void): any;
        getAttachment(docId: string, attachmentId: string, options: Options.IGetAttachement, callback: (err: IError, res: Response.IGetAttachement) => void): any;

        removeAttachment(docId: string, attachmentId: string, rev: string): ng.IPromise<Response.IOk>;
        removeAttachment(docId: string, attachmentId: string, rev: string, callback: (err: IError, res: Response.IOk) => void): any;

        query(fun: ((doc: any) => void) | string): ng.IPromise<any>;
        query(fun: ((doc: any) => void) | string, callback: (err: IError, res: any) => void): any;
        query(fun: ((doc: any) => void) | string, options: Options.IQuery): ng.IPromise<any>;
        query(fun: ((doc: any) => void) | string, options: Options.IQuery, callback: (err: IError, res: any) => void): any;
        
        viewCleanup(): ng.IPromise<Response.IViewCleanup>
        viewCleanup(callback: (err: IError, res: Response.IViewCleanup) => void): void

        info(): ng.IPromise<Response.IInfo>;
        info(callback: (err: IError, res: Response.IInfo) => void): void;

        compact(): ng.IPromise<Response.IOk>;
        compact(options: Options.ICompact): ng.IPromise<Response.IOk>;
        compact(options: Options.ICompact, callback: (err: IError, res: Response.IOk) => void): void;
        compact(callback: (err: IError, res: Response.IOk) => void): void;

        revsDiff(diff: Object): ng.IPromise<any>;
        revsDiff(diff: Object, callback: (err: IError, res: any) => void): void;

        on(event: string, callback: (Object: any) => void): IPouchDB;

        defaults(): IPouchDB;
        defaults(options: Object): IPouchDB;

        plugin(plugin: Object);

        debug: IPouchDBDebug;
    }

    interface IPouchDBOn {
        on(event: string, callback: (Object: any) => void): IPouchDBOn
        cancel(): void;
    }
    interface IPouchDBDebug {
        enable(opt: string): void;
        disable(): void;
    }
    interface IPouchDBReplicate {
        to(remoteDB: string | IPouchDB): any;
        to(remoteDB: string | IPouchDB, options: Options.ISync): any;
        from(remoteDB: string | IPouchDB): any;
        from(remoteDB: string | IPouchDB, options: Options.ISync): any;
        (source: string | IPouchDB, target: string | IPouchDB): IPouchDB;
        (source: string | IPouchDB, target: string | IPouchDB, options: Options.ISync): IPouchDB;
    }
    
    export module Options { }
    module Options {
        interface IBulkDoc{
            /** You can also specify a new_edits property on the options object 
        that when set to false allows you to post and overwrite existing documents. 
        Normally only the replication algorithm needs to do this.*/
            new_edits: boolean;
        }

        interface IFetch {
            /** Fetch specific revision of a document. Defaults to winning revision*/
            rev?: string;
            /** Include revision history of the document.*/
            revs?: boolean;
            /** Include a list of revisions of the document, and their availability.*/
            revs_info?: boolean;
			/** Fetch all leaf revisions if open_revs="all" or fetch all leaf revisions specified in open_revs array.
			Leaves will be returned in the same order as specified in input array. */
            open_revs?: string | string[];
            /** If specified, conflicting leaf revisions will be attached in _conflicts array.*/
            conflicts?: boolean;
            /** Include attachment data. */
            attachments?: boolean;
            /** An object of options to be sent to the ajax requester.*/
            ajax?: any;
        }

        interface IBatchFetch {
            /** Include the document in each row in the doc field. */
            include_docs?: boolean;
            /** Include conflicts in the _conflicts field of a doc. */
            conflicts?: boolean;
            /** Include attachment data. */
            attachments?: boolean;
            /** Get rows with keys in a certain range (inclusive/inclusive).*/
            startkey?: string;
            /** Get rows with keys in a certain range (inclusive/inclusive).*/
            endkey?: string;
            inclusive_end?: any;
            /** Maximum number of rows to return. */
            limit?: number;
            /** Number of rows to skip before returning (warning: poor performance on IndexedDB/LevelDB!). */
            skip?: number;
            /** Reverse the order of the output rows. */
            descending?: string;
            /** Only return rows matching this key.*/
            key?: string;
            /** Array of keys to fetch in a single shot.
            * - Neither startkey nor endkey can be specified with this option.
            * - The rows are returned in the same order as the supplied keys array.
            * - The row for a deleted document will have the revision ID of the deletion, and an extra key "deleted":true in the value property.
            * - The row for a nonexistent document will just contain an "error" property with the value "not_found".
            */
            keys?: string[];
        }

        interface IGetAttachement {
            rev: string;
        }

        interface IQuery {
            /** Reduce function, or the string name of a built-in function: '_sum', '_count', or '_stats'. Defaults to false (no reduce). */
            reduce?: ((...args: any[]) => void) | string;
            /** Include the document in each row in the doc field. */
            include_docs?: boolean;
            /** Include conflicts in the _conflicts field of a doc. */
            conflicts?: boolean;
            /** Include attachment data. */
            attachments?: boolean;
            /** Get rows with keys in a certain range (inclusive/inclusive).*/
            startkey?: string;
            /** Get rows with keys in a certain range (inclusive/inclusive).*/
            endkey?: string;
            /** Include rows having a key equal to the given options.endkey. Default: true. */
            inclusive_end?: boolean;
            /** Maximum number of rows to return. */
            limit?: number;
            /** Number of rows to skip before returning (warning: poor performance on IndexedDB/LevelDB!). */
            skip?: number;
            /** Reverse the order of the output rows. */
            descending?: string;
            /** Only return rows matching this key.*/
            key?: string;
            /** Array of keys to fetch in a single shot.
            * - Neither startkey nor endkey can be specified with this option.
            * - The rows are returned in the same order as the supplied keys array.
            * - The row for a deleted document will have the revision ID of the deletion, and an extra key "deleted":true in the value property.
            * - The row for a nonexistent document will just contain an "error" property with the value "not_found".
            */
            keys?: string[];
            /** rue if you want the reduce function to group results by keys, rather than returning a single result. Defaults to false.*/
            group?: boolean;
            /** Number of elements in a key to group by, assuming the keys are arrays. Defaults to the full length of the array.*/
            group_level?: number;
            /** options.stale: One of 'ok' or 'update_after'. Only applies to saved views. Can be one of:
            * - unspecified (default): Returns the latest results, waiting for the view to build if necessary.
            * - 'ok': Returns results immediately, even if they’re out-of-date.
            * - 'update_after': Returns results immediately, but kicks off a build afterwards.
            */
            stale?: string;

        }

        interface ICompact {
            interval: number;
        }

        interface IBase {
            /** This turns on auto compaction, which means compact() is called after every change to the database. 
            Defaults to false.*/
            auto_compaction?: boolean;
            /** One of 'idb', 'leveldb', 'websql', or 'http'. If unspecified, 
            PouchDB will infer this automatically, preferring IndexedDB to WebSQL in browsers
            that support both (i.e. Chrome, Opera and Android 4.4+).*/
            adapter?: string;
            /** When using the 'leveldb' adapter (the default on Node), any other options given 
            will be passed to levelup. The storage layer of leveldb can be replaced 
            by passing a level backend factory (such as MemDOWN) as options.db. */
            db?: any;
            /** (Remote databases only) Ajax requester options. For instance, passing in the options*/
            ajax?: IAjax;
            /** You can specify HTTP auth parameters either by using a database 
            with a name in the form http://user:pass@host/name or via the auth.username + auth.password options.*/
            auth?: IAuth;
            /** WebSQL-only: Amount in MB to request for storage, which you will need 
            if you are storing >5MB in order to avoid storage limit errors on iOS/Safari.*/
            size?: number;
            /** SQLite Plugin: Where to store data on iOS, which may affect iTunes/iCloud backup,
            and thus whether or not your app gets rejected by Apple*/
            location?: string;
            /** SQLite Plugin: Use a pre-populated database, so you can package it with your app and users don’t have to wait for it to load*/
            createFromLocation?: string;
            /** SQLite Plugin:  
            - 1 to use the new sqlite4java implementation
            - 2 to use the older version based on the native Android APIs. 
            Defaults to 1*/
            androidDatabaseImplementation?: number;
        }

        interface IAuth {
            username: string;
            password: string;
        }

        interface IAjax {
            cache: boolean;
            timeout: number;
            headers: any;
        }

        interface ISync {
            /** If true, starts subscribing to future changes in the source database and continue 
            replicating them.*/
            live?: boolean;
            /**  If true will attempt to retry replications in the case of failure (due to being offline),
             using a backoff algorithm that retries at longer and longer intervals until a connection is re-
             established. Only applicable if options.live is also true. */
            retry?: boolean;

            /** Reference a filter function from a design document to selectively get updates. 
            To use a view function, pass _view here and provide a reference to the view function 
            in options.view. See filtered replication for details.*/
            filter?: any;
            /** Only show changes for docs with these ids (array of strings).*/
            doc_ids?: string | string[];
            /** Object containing properties that are passed to the filter function, 
            e.g. {"foo:"bar"}, where "bar" will be available in the filter function 
            as params.query.foo. To access the params, define your filter function 
            like function (doc, params) { ... }*/
            query_param?: any;
            /** Specify a view function (e.g. 'design_doc_name/view_name') to act as a filter.
            Documents counted as “passed” for a view filter if a map function emits at least one record for them. 
            Note: options.filter must be set to '_view' for this option to work.*/
            view?: any;

            /** Replicate changes after the given sequence number.*/
            since?: any;
            /** Number of documents to process at a time. Defaults to 100. 
            This affects the number of docs held in memory and the number sent at a time to the target server. 
            You may need to adjust downward if targeting devices with low amounts of memory (e.g. phones)
            or if the documents are large in size (e.g. with attachments). 
            If your documents are small in size, then increasing this number will probably speed replication up.*/
            batch_size?: number;
            /** Number of batches to process at a time. Defaults to 10. 
            This (along wtih batch_size) controls how many docs are kept in memory at a time,
             so the maximum docs in memory at once would equal batch_size × batches_limit */
            batches_limit?: number;
            /** backoff function to be used in retry replication. 
            This is a function that takes the current backoff as input (or 0 the first time) 
            and returns a new backoff in milliseconds. You can use this to tweak when and 
            how replication will try to reconnect to a remote database when the user goes offline. 
            Defaults to a function that chooses a random backoff between 0 and 2 seconds 
            and doubles every time it fails to connect. */
            back_off_function?: any;

        }

        interface IChanges {
            /** Does “live” changes, using CouchDB’s _longpoll_ feed if remote.*/
            live?: boolean;
            /** Include the document in each row in the doc field. */
            include_docs?: boolean;
            /** Include conflicts in the _conflicts field of a doc. */
            conflicts?: boolean;
            /** Include attachment data. */
            attachments?: boolean;
            /** Reverse the order of the output rows. */
            descending?: string;
            /** Replicate changes after the given sequence number.*/
            since?: any;
            /** Maximum number of rows to return. */
            limit?: number;
            /** Request timeout (in milliseconds).*/
            timeout?: any;

            /** Reference a filter function from a design document to selectively get updates. 
           To use a view function, pass _view here and provide a reference to the view function 
           in options.view. See filtered replication for details.*/
            filter?: any;
        
            /** Only show changes for docs with these ids (array of strings).*/
            doc_ids?: string | string[];
            /** Object containing properties that are passed to the filter function, 
            e.g. {"foo:"bar"}, where "bar" will be available in the filter function 
            as params.query.foo. To access the params, define your filter function 
            like function (doc, params) { ... }*/
            query_param?: any;
            /** Specify a view function (e.g. 'design_doc_name/view_name') to act as a filter.
            Documents counted as “passed” for a view filter if a map function emits at least one record for them. 
            Note: options.filter must be set to '_view' for this option to work.*/
            view?: any;

            /**  Is available for non-http databases and defaults to true. 
            Passing false prevents the changes feed from keeping all the documents in memory – 
            in other words complete always has an empty results array, and the change event 
            is the only way to get the event.
            Useful for large change sets where otherwise you would run out of memory.*/
            returnDocs?: boolean;
            /** Only available for http databases, this configures how many changes to fetch at a time.
            Increasing this can reduce the number of requests made. Default is 25.*/
            batch_size?: number;
            /** Specifies how many revisions are returned in the changes array. 
            The default, 'main_only', will only return the current “winning” revision; 
            'all_docs' will return all leaf revisions (including conflicts and deleted former conflicts).
            Most likely you won’t need this unless you’re writing a replicator.*/
            style?: any;
        }
    }

    module Response {
        interface IBatchFetch<T> {
            total_rows: number;
            offset: number;
            rows: IBatchDoc<T>[];
        }

        interface IBatchDoc<T> {
            doc: T;
            id: string;
            key: string;
            value: IPouchDBBatchDocRev;
        }

        interface IGetAttachement {
            _attachments: Object;
            _id: string;
            _rev: string;
        }

        interface IInfo {
            db_name: string;
            doc_count: number;
            update_seq: string;
            idb_attachment_format: string;
            sqlite_plugin: boolean;
            websql_encoding: string;
        }

        interface IViewCleanup {
            ok: string;
        }

        interface IOk {
            ok: boolean;
            id: string;
            rev: string;
        }

        
    }

    interface IError {
        status: number;
        error: string;
        reason: string;
    }

    interface IBaseDoc {
        _id: string;
        _rev: string;
    }
      
    interface IPouchDBBatchDocRev {
        rev: string;
    }
    
}