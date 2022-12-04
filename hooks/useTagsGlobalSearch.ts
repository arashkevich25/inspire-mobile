import { Tag } from '@inspire/types';
import { SkipCounters } from 'app-constants/SkipCounters';
import { useDispatch, useSelector } from 'react-redux';

import { loadMoreTags, resetStore, searchTags } from 'actions/globalSearch';
import { AppState } from 'reducers';
import {
    searchedTagQuery,
    tagsLoadMoreIsPending,
    tagsSearchHasFetched,
    tagsSearchIsFetching,
    tagsSearchLoadIsAllowed,
    tagsSearchResult,
    tagsSearchSkipCounter,
} from 'selectors';

interface UseTagsGlobalSearch {
    isSearching: boolean;
    hasSearched: boolean;
    tags: Tag[];
    search: (query: string) => void;
    loadMore: (query: string) => void;
    reset: () => void;
    query: string;
}

export function useTagsGlobalSearch(): UseTagsGlobalSearch {
    const isSearching = useSelector((state: AppState) => tagsSearchIsFetching(state));
    const hasSearched = useSelector((state: AppState) => tagsSearchHasFetched(state));
    const query = useSelector((state: AppState) => searchedTagQuery(state));
    const tags = useSelector((state: AppState) => tagsSearchResult(state));
    const skip = useSelector((state: AppState) => tagsSearchSkipCounter(state));
    const loadIsAllowed = useSelector((state: AppState) => tagsSearchLoadIsAllowed(state));
    const loadTagsPending = useSelector((state: AppState) => tagsLoadMoreIsPending(state));
    const dispatch = useDispatch();

    function search(query: string) {
        dispatch(searchTags(query));
    }

    function loadMore(query: string) {
        if (loadIsAllowed && !isSearching && !loadTagsPending) {
            dispatch(loadMoreTags(query, skip + SkipCounters.SearchedTags));
        }
    }

    function reset() {
        dispatch(resetStore());
    }

    return {
        isSearching,
        hasSearched,
        query,
        tags,
        loadMore,
        search,
        reset,
    };
}
