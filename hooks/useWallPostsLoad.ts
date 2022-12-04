import { useDispatch, useSelector } from 'react-redux';
import { useFilters } from './useFilters';

import { loadWallPosts } from 'actions';
import { AppState } from 'reducers';
import {
    wallPostsIsPending,
    wallPostsLoadMorePostsIsAllowed,
    wallPostsLoadPostsFetched,
    wallPostsLoadPostsPending,
    wallPostsSkipCounter,
} from 'selectors';

interface UseWallPostsLoadOutput {
    skipCounter: number;
    wallPostsLoadPending: boolean;
    wallPostsLoadFetched: boolean;
    loadMorePostsIsAllowed: boolean;
    wallPostsPending: boolean;
    loadMorePosts: () => void;
}

export function useWallPostsLoad(): UseWallPostsLoadOutput {
    const dispatch = useDispatch();
    const skipCounter = useSelector((state: AppState) => wallPostsSkipCounter(state));
    const wallPostsLoadPending = useSelector((state: AppState) => wallPostsLoadPostsPending(state));
    const wallPostsPending = useSelector((state: AppState) => wallPostsIsPending(state));
    const wallPostsLoadFetched = useSelector((state: AppState) => wallPostsLoadPostsFetched(state));
    const loadMorePostsIsAllowed = useSelector((state: AppState) => wallPostsLoadMorePostsIsAllowed(state));
    const [categoryFilter, cityFilter] = useFilters();

    function loadMorePosts(): void {
        if (loadMorePostsIsAllowed && !wallPostsLoadPending) {
            dispatch(loadWallPosts(categoryFilter, skipCounter, cityFilter));
        }
    }

    return {
        skipCounter,
        wallPostsLoadPending,
        wallPostsLoadFetched,
        loadMorePostsIsAllowed,
        wallPostsPending,
        loadMorePosts,
    };
}
