// constants
import { ConditionOperator, ColumnDataType, HttpMethods, NodeType } from './constants'

// internalMethods
import { castToBool, castToNumber, castToString, getLength, JsonStringify } from './internalMethods'

// interface
import {
    ConditionNodePayload,
    DeclarVariableNodePayload,
    FetchDataNodePayload,
    HttpResponseNodePayload,
    InsertRowNodePayload,
    ScheduleNodePayload,
    WebHookNodePayload,
    RedirectNodePayload
} from './nodePayload'

const Constants = {
    ConditionOperator,
    ColumnDataType,
    HttpMethods,
    NodeType
}

const internalMethods = {
    castToBool,
    castToString,
    castToNumber,
    getLength,
    JsonStringify
}

export {
    Constants,
    internalMethods,
    ConditionNodePayload,
    DeclarVariableNodePayload,
    FetchDataNodePayload,
    HttpResponseNodePayload,
    InsertRowNodePayload,
    ScheduleNodePayload,
    WebHookNodePayload,
    RedirectNodePayload
}