import { useDispatch, useSelector } from 'react-redux';

import { mountWorldFilter, unmountWorldFilter } from 'actions';
import { AppState } from 'reducers';
import { worldWallFiltersIsMount } from 'selectors';

type UseWorldWallPostsFilterState = [boolean, () => void, () => void];

export function useWorldWallPostsFilterState(): UseWorldWallPostsFilterState {
    const filterIsMount = useSelector((state: AppState) => worldWallFiltersIsMount(state));
    const dispatch = useDispatch();

    function mount() {
        dispatch(mountWorldFilter());
    }

    function unmount() {
        dispatch(unmountWorldFilter());
    }

    return [filterIsMount, mount, unmount];
}
