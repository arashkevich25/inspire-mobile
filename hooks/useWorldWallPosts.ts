import { SimplifiedPost } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { getWorldPosts } from 'actions';
import { useFilters } from 'hooks/useFilters';
import { AppState } from 'reducers';
import { getWorldWallPosts, getWorldWallPostsHasFetched, getWorldWallPostsIsPending } from 'selectors';

interface UseWorldWallPostsOutput {
    posts: SimplifiedPost[];
    postsIsPending: boolean;
    postsFetched: boolean;
    getPosts: () => void;
}

export function useWorldWallPosts(authenticated: boolean): UseWorldWallPostsOutput {
    const dispatch = useDispatch();
    const posts = useSelector((state: AppState) => getWorldWallPosts(state));
    const postsIsPending = useSelector((state: AppState) => getWorldWallPostsIsPending(state));
    const postsFetched = useSelector((state: AppState) => getWorldWallPostsHasFetched(state));
    const [categoryFilter, cityFilter] = useFilters();

    function getPosts() {
        dispatch(getWorldPosts(categoryFilter, cityFilter, authenticated));
    }

    return {
        posts,
        postsIsPending,
        postsFetched,
        getPosts,
    };
}
