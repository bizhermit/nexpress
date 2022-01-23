import expressSession from "express-session";
declare type Config = {
    rootDirname?: string;
    port?: number;
    i18nFilename?: string;
    publicDir?: string;
    session?: {
        secret?: string;
        name?: string;
        store?: (session: Storage) => expressSession.Store;
        cookie?: {
            httpOnly?: boolean;
            maxAge?: number;
        };
    };
    dev?: {
        port?: number;
        publicDir?: string;
        session?: {
            secret?: string;
            name?: string;
            store?: (session: Storage) => expressSession.Store;
            cookie?: {
                httpOnly?: boolean;
                maxAge?: number;
            };
        };
    };
};
declare const execute: (config?: Config | undefined) => void;
export default execute;
