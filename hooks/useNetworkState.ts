import { useDispatch, useSelector } from 'react-redux';

import { setInternetReachable } from 'actions';
import { AppState } from 'reducers';
import { isInternetReachable } from 'selectors';

interface UseNetworkStateOutput {
    isInternetReachableState: boolean;
    setInternetReachableState: (state: boolean) => void;
}

export function useNetworkState(): UseNetworkStateOutput {
    const dispatch = useDispatch();
    const isInternetReachableState = useSelector((state: AppState) => isInternetReachable(state));

    function setInternetReachableState(state: boolean) {
        dispatch(setInternetReachable(state));
    }

    return {
        isInternetReachableState,
        setInternetReachableState,
    };
}
