export enum NetworkStateActions {
    SetInternetReachable = '[NetworkState] set internet reachable',
}

interface SetInternetReachable {
    type: typeof NetworkStateActions.SetInternetReachable;
    isInternetReachable: boolean;
}
export type NetworkStateUnion = SetInternetReachable;
