import { PostCoordinates } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { getPostsCoordinatesByCity } from 'actions';
import { AppState } from 'reducers';
import { postsCoordinates, postsCoordinatesHasFetched, postsCoordinatesIsFetching } from 'selectors';

type UseLocationStateOutput = [PostCoordinates[] | null, boolean, boolean, (city: string) => void];

export function useLocationState(): UseLocationStateOutput {
    const dispatch = useDispatch();
    const coordinates = useSelector((state: AppState) => postsCoordinates(state));
    const coordinatesHasFetched = useSelector((state: AppState) => postsCoordinatesHasFetched(state));
    const coordinatesIsFetching = useSelector((state: AppState) => postsCoordinatesIsFetching(state));

    async function getCoordinates(city: string) {
        dispatch(getPostsCoordinatesByCity(city));
    }

    return [coordinates, coordinatesHasFetched, coordinatesIsFetching, getCoordinates];
}
