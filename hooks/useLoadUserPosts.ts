import { useDispatch, useSelector } from 'react-redux';

import { loadMoreUserPosts, loadMoreUserProductPosts, loadMoreUserRecommendedPosts } from 'actions';
import { AppState } from 'reducers';
import {
    loadMoreIsAllowed,
    loadMorePostsIsPending,
    loadMorePostsSkipCounter,
    loadMoreProductPostsSkipCounter,
    productsLoadMoreIsAllowed,
    recommendPostsLoadMoreIsAllowed,
    recommendPostsSkipCounter,
} from 'selectors';

export function useLoadUserPosts(userId: number) {
    const dispatch = useDispatch();
    const skipCounter = useSelector((state: AppState) => loadMorePostsSkipCounter(state, userId));
    const productSkipCounter = useSelector((state: AppState) => loadMoreProductPostsSkipCounter(state, userId));
    const loadPostsIsFetching = useSelector((state: AppState) => loadMorePostsIsPending(state, userId));
    const loadMorePostsIsAllowed = useSelector((state: AppState) => loadMoreIsAllowed(state, userId));
    const recommendedSkipCounter = useSelector((state: AppState) => recommendPostsSkipCounter(state, userId));
    const loadMoreRecommendedPostsIsAllowed = useSelector((state: AppState) =>
        recommendPostsLoadMoreIsAllowed(state, userId),
    );
    const productPostsLoadMoreIsAllowed = useSelector((state: AppState) => productsLoadMoreIsAllowed(state, userId));

    function loadMorePostsHandle() {
        if (!loadPostsIsFetching && loadMorePostsIsAllowed) {
            dispatch(loadMoreUserPosts(userId, skipCounter));
        }
    }

    function loadMoreProductsPostsHandle() {
        if (!loadPostsIsFetching && productPostsLoadMoreIsAllowed) {
            dispatch(loadMoreUserProductPosts(userId, productSkipCounter));
        }
    }

    function loadMoreRecommendedPostsHandle() {
        if (!loadPostsIsFetching && loadMoreRecommendedPostsIsAllowed) {
            dispatch(loadMoreUserRecommendedPosts(userId, recommendedSkipCounter));
        }
    }

    return {
        loadMorePostsHandle,
        loadMoreProductsPostsHandle,
        loadMoreRecommendedPostsHandle,
    };
}
