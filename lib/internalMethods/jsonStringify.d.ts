declare const jsonStringify: {
    START_SPLITER: string;
    END_SPLITER: string;
    METHOD: {
        (value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
        (value: any, replacer?: (string | number)[], space?: string | number): string;
    };
};
export default jsonStringify;
