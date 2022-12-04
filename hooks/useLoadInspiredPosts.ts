import { useDispatch, useSelector } from 'react-redux';

import { loadMorePosts } from 'actions';
import { useFilters } from 'hooks/useFilters';
import { AppState } from 'reducers';
import { loadInspiredPostsEmpty, loadInspiredPostsPending, loadInspiredPostsSkipCounter } from 'selectors';

interface UseLoadInspiredPosts {
    loadMorePostsHandle: () => void;
    loadPending: boolean;
}

export function useLoadInspiredPosts(): UseLoadInspiredPosts {
    const dispatch = useDispatch();
    const loadPending = useSelector((state: AppState) => loadInspiredPostsPending(state));
    const skipCounter = useSelector((state: AppState) => loadInspiredPostsSkipCounter(state));
    const loadMoreIsAllowed = useSelector((state: AppState) => loadInspiredPostsEmpty(state));
    const [selectedCategoryFilter, selectedMapFilter] = useFilters();

    function loadMorePostsHandle() {
        if (!loadPending && loadMoreIsAllowed) {
            dispatch(loadMorePosts(selectedCategoryFilter, skipCounter, selectedMapFilter));
        }
    }

    return {
        loadMorePostsHandle,
        loadPending,
    };
}
