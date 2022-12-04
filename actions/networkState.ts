import { NetworkStateActions } from 'app-constants/actionTypes';

export function setInternetReachable(state: boolean) {
    return {
        type: NetworkStateActions.SetInternetReachable,
        isInternetReachable: state,
    };
}
