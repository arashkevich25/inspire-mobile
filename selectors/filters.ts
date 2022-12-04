import { PostCoordinates } from '@inspire/types';

import { AppState } from 'reducers';
import { FiltersState } from 'reducers/filters';

function filtersState(state: AppState): FiltersState {
    return state.filters;
}

export function getCategoryFilter(state: AppState): number {
    return filtersState(state).categoryFilter;
}

export function getMapFilter(state: AppState): string {
    return filtersState(state).mapFilter;
}

export function postsCoordinates(appState: AppState): PostCoordinates[] | null {
    return filtersState(appState).postCoordinates;
}

export function postsCoordinatesHasFetched(appState: AppState): boolean {
    return filtersState(appState).postCoordinatesHasFetched;
}

export function postsCoordinatesIsFetching(appState: AppState): boolean {
    return filtersState(appState).postCoordinatesIsFetching;
}

export function postsFilteredIsPending(appState: AppState): boolean {
    return filtersState(appState).filteredPostsIsPending;
}
