import { BasicPost } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { getWallPosts } from 'actions';
import { useFilters } from 'hooks/useFilters';
import { AppState } from 'reducers';
import { wallPosts, wallPostsFetched, wallPostsIsPending } from 'selectors';

interface UseWallPostsOutput {
    posts: BasicPost[];
    postsIsPending: boolean;
    postsFetched: boolean;
    getPosts: (categoryId?: number, city?: string) => void;
}

export function useWallPosts(): UseWallPostsOutput {
    const dispatch = useDispatch();
    const posts = useSelector((state: AppState) => wallPosts(state));
    const postsIsPending = useSelector((state: AppState) => wallPostsIsPending(state));
    const postsFetched = useSelector((state: AppState) => wallPostsFetched(state));
    const [categoryFilter, cityFilter] = useFilters();

    function getPosts() {
        dispatch(getWallPosts(categoryFilter, cityFilter));
    }

    return {
        posts,
        postsIsPending,
        postsFetched,
        getPosts,
    };
}
