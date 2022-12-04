import { User } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { resetStore, searchAccounts } from 'actions/globalSearch';
import { AppState } from 'reducers';
import { accountsSearchHasFetched, accountsSearchIsFetching, accountsSearchResult } from 'selectors';

interface UseAccountsGlobalSearchOutput {
    isSearching: boolean;
    hasSearched: boolean;
    accounts: User[];
    search: (query: string) => void;
    reset: () => void;
}

export function useAccountsGlobalSearch(): UseAccountsGlobalSearchOutput {
    const isSearching = useSelector((state: AppState) => accountsSearchIsFetching(state));
    const hasSearched = useSelector((state: AppState) => accountsSearchHasFetched(state));
    const accounts = useSelector((state: AppState) => accountsSearchResult(state));
    const dispatch = useDispatch();

    function search(query: string) {
        dispatch(searchAccounts(query));
    }

    function reset() {
        dispatch(resetStore());
    }

    return {
        isSearching,
        hasSearched,
        accounts,
        search,
        reset,
    };
}
