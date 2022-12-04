import { useDispatch, useSelector } from 'react-redux';

import { mountInspiredFilter, unmountInspiredFilter } from 'actions';
import { AppState } from 'reducers';
import { inspiredFiltersIsMount } from 'selectors';

type UseInspiredFilterStateOutput = [boolean, () => void, () => void];

export function useInspiredFilterState(): UseInspiredFilterStateOutput {
    const filterIsMount = useSelector((state: AppState) => inspiredFiltersIsMount(state));
    const dispatch = useDispatch();

    function mount() {
        dispatch(mountInspiredFilter());
    }

    function unmount() {
        dispatch(unmountInspiredFilter());
    }

    return [filterIsMount, mount, unmount];
}
