import { SimplifiedPost } from '@inspire/types';
import { SkipCounters } from 'app-constants/SkipCounters';
import { useDispatch, useSelector } from 'react-redux';

import { loadMorePosts, resetStore, searchPosts } from 'actions/globalSearch';
import { AppState } from 'reducers';
import {
    postsLoadMoreIsPending,
    postsSearchHasFetched,
    postsSearchIsFetching,
    postsSearchLoadIsAllowed,
    postsSearchResult,
    postsSearchSkipCounter,
} from 'selectors';

interface UsePostsGlobalSearch {
    isSearching: boolean;
    hasSearched: boolean;
    posts: SimplifiedPost[];
    search: (query: string) => void;
    loadMore: (query: string) => void;
    reset: () => void;
}

export function usePostsGlobalSearch(): UsePostsGlobalSearch {
    const isSearching = useSelector((state: AppState) => postsSearchIsFetching(state));
    const hasSearched = useSelector((state: AppState) => postsSearchHasFetched(state));
    const loadPostsPending = useSelector((state: AppState) => postsLoadMoreIsPending(state));
    const posts = useSelector((state: AppState) => postsSearchResult(state));
    const loadIsAllowed = useSelector((state: AppState) => postsSearchLoadIsAllowed(state));
    const skip = useSelector((state: AppState) => postsSearchSkipCounter(state));
    const dispatch = useDispatch();

    function search(query: string) {
        dispatch(searchPosts(query));
    }

    function loadMore(query: string) {
        if (loadIsAllowed && !isSearching && !loadPostsPending) {
            dispatch(loadMorePosts(query, skip + SkipCounters.SearchedPosts));
        }
    }

    function reset() {
        dispatch(resetStore());
    }

    return {
        isSearching,
        hasSearched,
        posts,
        loadMore,
        search,
        reset,
    };
}
