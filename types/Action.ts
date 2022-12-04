export type Action = (dispatch: void) => void;

/* eslint-disable */
export interface ActionObject {
    type: string;
    [key: string]: any;
}
/* eslint-enable */
