/**
 * ex
 * ==============
 * startDate : "1998/01/07",
 * endDate : "2022/01/07",
 * hour : "13",
 * minute : "0",
 * dayOfWeek: [1,2,5]
 */
export interface ScheduleNodePayload {
    startDate: string;
    endDate?: string;
    hour: number;
    minute: number;
    dayOfWeek?: Array<number>;
}
