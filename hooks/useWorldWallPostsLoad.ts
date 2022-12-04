import { useDispatch, useSelector } from 'react-redux';

import { loadMoreWorldWallPosts } from 'actions';
import { useFilters } from 'hooks/useFilters';
import { AppState } from 'reducers';
import { loadWorldWallPostsIsEmpty, loadWorldWallPostsPending, loadWorldWallSkipCounter } from 'selectors';

interface UseWorldWallPostsLoad {
    loadPosts: () => void;
    wallPostsLoadPending: boolean;
    loadMoreIsAllowed: boolean;
}

export function useWorldWallPostsLoad(authenticated: boolean): UseWorldWallPostsLoad {
    const dispatch = useDispatch();
    const skipCounter = useSelector((state: AppState) => loadWorldWallSkipCounter(state));
    const wallPostsLoadPending = useSelector((state: AppState) => loadWorldWallPostsPending(state));
    const loadMoreIsAllowed = useSelector((state: AppState) => loadWorldWallPostsIsEmpty(state));
    const [categoryFilter, cityFilter] = useFilters();

    function loadPosts() {
        if (!wallPostsLoadPending && loadMoreIsAllowed) {
            dispatch(loadMoreWorldWallPosts(categoryFilter, skipCounter, cityFilter, authenticated));
        }
    }

    return {
        loadPosts,
        wallPostsLoadPending,
        loadMoreIsAllowed,
    };
}
