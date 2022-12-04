import { useDispatch, useSelector } from 'react-redux';

import { mountFilter, unmountFilter } from 'actions';
import { AppState } from 'reducers';
import { wallFiltersIsMount } from 'selectors';

type UseWallPostsFilterStateOutput = [boolean, () => void, () => void];

export function useWallPostsFilterState(): UseWallPostsFilterStateOutput {
    const filterIsMount = useSelector((state: AppState) => wallFiltersIsMount(state));
    const dispatch = useDispatch();

    function mount() {
        dispatch(mountFilter());
    }

    function unmount() {
        dispatch(unmountFilter());
    }

    return [filterIsMount, mount, unmount];
}
