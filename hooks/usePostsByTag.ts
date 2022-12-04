import { SimplifiedPost } from '@inspire/types';
import { SkipCounters } from 'app-constants/SkipCounters';
import { useDispatch, useSelector } from 'react-redux';

import { resetStore } from 'actions';
import { getPostsByTag, loadMorePostsByTag } from 'actions/postsByTag';
import { AppState } from 'reducers';
import {
    postsByTag,
    postsByTagFetching,
    postsByTagHasFetched,
    postsByTagLoadIsPending,
    postsByTagLoadMoreIsAllowed,
    postsByTagSearchedTag,
    postsByTagSkipCounter,
} from 'selectors';

interface UsePostsByTagOutput {
    posts: SimplifiedPost[];
    postsIsFetching: boolean;
    postsHasFetched: boolean;
    postsLoadMorePending: boolean;
    postsSkipCounter: number;
    fetchPostsByTag: (tag: string) => void;
    loadMorePosts: () => void;
    resetStoreHandle: () => void;
}

export function usePostsByTag(): UsePostsByTagOutput {
    const posts = useSelector((state: AppState) => postsByTag(state));
    const dispatch = useDispatch();
    const postsIsFetching = useSelector((state: AppState) => postsByTagFetching(state));
    const postsHasFetched = useSelector((state: AppState) => postsByTagHasFetched(state));
    const postsSkipCounter = useSelector((state: AppState) => postsByTagSkipCounter(state));
    const postsLoadMorePending = useSelector((state: AppState) => postsByTagLoadIsPending(state));
    const loadMoreIsAllowed = useSelector((state: AppState) => postsByTagLoadMoreIsAllowed(state));
    const tag = useSelector((state: AppState) => postsByTagSearchedTag(state));

    function fetchPostsByTag(tag: string) {
        dispatch(getPostsByTag(tag));
    }

    function loadMorePosts() {
        if (loadMoreIsAllowed && !postsLoadMorePending) {
            dispatch(loadMorePostsByTag(tag, postsSkipCounter + SkipCounters.SearchedTags));
        }
    }

    function resetStoreHandle() {
        dispatch(resetStore());
    }

    return {
        posts,
        postsIsFetching,
        postsHasFetched,
        postsLoadMorePending,
        postsSkipCounter,
        fetchPostsByTag,
        loadMorePosts,
        resetStoreHandle,
    };
}
