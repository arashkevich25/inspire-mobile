import { SimplifiedPost } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { getInspiredPosts } from 'actions';
import { useFilters } from 'hooks/useFilters';
import { AppState } from 'reducers';
import { inspiredPosts, inspiredPostsFetched, inspiredPostsFetching } from 'selectors';

export function useInspiredPosts(): [SimplifiedPost[], boolean, boolean, () => void] {
    const dispatch = useDispatch();
    const posts = useSelector((state: AppState) => inspiredPosts(state));
    const postsFetching = useSelector((state: AppState) => inspiredPostsFetching(state));
    const postsFetched = useSelector((state: AppState) => inspiredPostsFetched(state));
    const [selectedCategoryFilter, selectedMapFilter] = useFilters();

    function getPosts() {
        dispatch(getInspiredPosts(selectedCategoryFilter, selectedMapFilter));
    }

    return [posts, postsFetching, postsFetched, getPosts];
}
