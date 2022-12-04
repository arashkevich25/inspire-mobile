import { StatuteWithApproveStatus } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { approveStatute, getStatuteDetails } from 'actions';
import { AppState } from 'reducers';
import {
    approveStatuteIsPending,
    getStatuteDetails as getStatuteDetailsSelector,
    getStatuteDetailsHasFetched,
    getStatuteDetailsIsFetching,
} from 'selectors';

type UseStatuteOutput = {
    approveIsPending: boolean;
    approveStatuteHandle: () => void;
    fetchStatuteDetails: () => void;
    statuteDetails: StatuteWithApproveStatus | null;
    statuteDetailsIsFetching: boolean;
    statuteDetailsHasFetched: boolean;
};

export function useStatute(statuteId: number): UseStatuteOutput {
    const dispatch = useDispatch();
    const statuteDetailsIsFetching = useSelector((state: AppState) => getStatuteDetailsIsFetching(state));
    const statuteDetailsHasFetched = useSelector((state: AppState) => getStatuteDetailsHasFetched(state));
    const approveIsPending = useSelector((state: AppState) => approveStatuteIsPending(state));
    const statuteDetails = useSelector((state: AppState) => getStatuteDetailsSelector(state));

    function fetchStatuteDetails() {
        dispatch(getStatuteDetails(statuteId));
    }

    function approveStatuteHandle() {
        dispatch(approveStatute(statuteId));
    }

    return {
        statuteDetails,
        approveIsPending,
        statuteDetailsHasFetched,
        statuteDetailsIsFetching,
        fetchStatuteDetails,
        approveStatuteHandle,
    };
}
