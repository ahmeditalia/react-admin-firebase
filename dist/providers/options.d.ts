import { FireApp } from 'misc/firebase-models';
export interface RAFirebaseOptions {
    rootRef?: string | (() => string);
    app?: FireApp;
    logging?: boolean;
    watch?: string[];
    dontwatch?: string[];
    disableMeta?: boolean;
    renameMetaFields?: {
        created_at?: string;
        created_by?: string;
        updated_at?: string;
        updated_by?: string;
    };
    dontAddIdFieldToDoc?: boolean;
    persistence?: 'session' | 'local' | 'none';
    softDelete?: boolean;
    associateUsersById?: boolean;
    metaFieldCasing?: 'lower' | 'camel' | 'snake' | 'pascal' | 'kebab';
    relativeFilePaths?: boolean;
    useFileNamesInStorage?: boolean;
    lazyLoading?: {
        enabled: boolean;
    };
    firestoreCostsLogger?: {
        enabled: boolean;
        persistCount?: boolean;
    };
    transformToDb?: (resourceName: string, documentData: any, documentId: string) => any;
    /**
     * @deprecated The method should not be used
     */
    overrideDefaultId?: boolean;
}
