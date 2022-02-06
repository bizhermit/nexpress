import expressSession from "express-session";
declare type Props = {
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
declare const execute: (props?: Props | undefined) => void;
export default execute;
