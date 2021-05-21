export interface FetchDataNodePayload {
    url: string,
    method: string,
    body: any,
    headers: { [keys: string]: string },
    storeDataAt: string,
    postInForm: boolean
}
