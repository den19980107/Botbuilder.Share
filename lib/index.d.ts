import { ConditionOperator, ColumnDataType, HttpMethods, NodeType } from './constants';
import { ConditionNodePayload, DeclarVariableNodePayload, FetchDataNodePayload, HttpResponseNodePayload, InsertRowNodePayload, ScheduleNodePayload, WebHookNodePayload } from './nodePayload';
declare const Constants: {
    ConditionOperator: typeof ConditionOperator;
    ColumnDataType: typeof ColumnDataType;
    HttpMethods: typeof HttpMethods;
    NodeType: typeof NodeType;
};
declare const internalMethods: {
    castToBool: {
        START_SPLITER: string;
        END_SPLITER: string;
        METHOD: BooleanConstructor;
    };
    castToString: {
        START_SPLITER: string;
        END_SPLITER: string;
        METHOD: StringConstructor;
    };
    castToNumber: {
        START_SPLITER: string;
        END_SPLITER: string;
        METHOD: NumberConstructor;
    };
    getLength: {
        START_SPLITER: string;
        END_SPLITER: string;
        METHOD: (string: string) => number;
    };
    JsonStringify: {
        START_SPLITER: string;
        END_SPLITER: string;
        METHOD: {
            (value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
            (value: any, replacer?: (string | number)[], space?: string | number): string;
        };
    };
};
export { Constants, internalMethods, ConditionNodePayload, DeclarVariableNodePayload, FetchDataNodePayload, HttpResponseNodePayload, InsertRowNodePayload, ScheduleNodePayload, WebHookNodePayload };
