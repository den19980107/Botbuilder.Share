export interface ConditionNodePayload {
    condition: any;
    operator: string;
    operant: any;
    true_run_node_id: string;
    false_run_node_id: string;
}
