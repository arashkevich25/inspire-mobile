import { NetworkStateActions, NetworkStateUnion } from 'app-constants/actionTypes';

export interface NetworkState {
    isInternetReachable: boolean;
}

const initState: NetworkState = {
    isInternetReachable: true,
};

export function networkStateReducer(state: NetworkState = initState, action: NetworkStateUnion): NetworkState {
    switch (action.type) {
        case NetworkStateActions.SetInternetReachable: {
            return {
                ...state,
                isInternetReachable: action.isInternetReachable,
            };
        }
        default: {
            return state;
        }
    }
}
