import { CompetitionDetails } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { attendAccount, getCompetitionDetails } from 'actions';
import { AppState } from 'reducers';
import { competition, competitionHasFetched, competitionIsFetching } from 'selectors';

interface UseCompetitionOutput {
    competitionsDetailsIsFetching: boolean;
    competitionsDetailsHasFetched: boolean;
    competitionsDetails: CompetitionDetails | null;
    fetchCompetitionDetails: () => void;
    attendCompetitionHandle: () => void;
}

export function useCompetition(competitionId: number): UseCompetitionOutput {
    const dispatch = useDispatch();
    const competitionsDetailsIsFetching = useSelector((state: AppState) => competitionIsFetching(state));
    const competitionsDetailsHasFetched = useSelector((state: AppState) => competitionHasFetched(state));
    const competitionsDetails = useSelector((state: AppState) => competition(state));

    function fetchCompetitionDetails() {
        dispatch(getCompetitionDetails(competitionId));
    }

    function attendCompetitionHandle() {
        // dispatch(attendPosts(competitionId, []));
        dispatch(attendAccount(competitionId));
    }

    return {
        competitionsDetailsIsFetching,
        competitionsDetailsHasFetched,
        competitionsDetails,
        fetchCompetitionDetails,
        attendCompetitionHandle,
    };
}
