import { AppState } from 'reducers';
import { NetworkState } from 'reducers/networkState';

function getNetworkState(state: AppState): NetworkState {
    return state.networkState;
}

export function isInternetReachable(state: AppState): boolean {
    return getNetworkState(state).isInternetReachable;
}
