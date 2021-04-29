import { ConditionOperator, ColumnDataType, HttpMethods, NodeType } from './constants'

// interface
import {
    ConditionNodePayload,
    DeclarVariableNodePayload,
    FetchDataNodePayload,
    HttpResponseNodePayload,
    InsertRowNodePayload,
    ScheduleNodePayload,
    WebHookNodePayload
} from './nodePayload'

const Constants = {
    ConditionOperator,
    ColumnDataType,
    HttpMethods,
    NodeType
}

export {
    Constants,
    ConditionNodePayload,
    DeclarVariableNodePayload,
    FetchDataNodePayload,
    HttpResponseNodePayload,
    InsertRowNodePayload,
    ScheduleNodePayload,
    WebHookNodePayload
}