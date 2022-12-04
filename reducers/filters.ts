import { PostCoordinates } from '@inspire/types';
import { FiltersActions, FiltersUnion } from 'app-constants/actionTypes';

export interface FiltersState {
    categoryFilter: number;
    mapFilter: string;
    postCoordinatesIsFetching: boolean;
    postCoordinatesHasFetched: boolean;
    postCoordinates: PostCoordinates[];
    filteredPostsIsPending: boolean;
}

const initialState: FiltersState = {
    categoryFilter: 0,
    mapFilter: '',
    postCoordinates: [],
    postCoordinatesHasFetched: false,
    postCoordinatesIsFetching: false,
    filteredPostsIsPending: false,
};

export function filterReducer(state: FiltersState = initialState, action: FiltersUnion): FiltersState {
    switch (action.type) {
        case FiltersActions.SetMapFilter: {
            return {
                ...state,
                mapFilter: action.city,
                filteredPostsIsPending: true,
            };
        }

        case FiltersActions.RemoveMapFilter: {
            return {
                ...state,
                mapFilter: '',
                filteredPostsIsPending: true,
            };
        }

        case FiltersActions.SetCategoryFilter: {
            return {
                ...state,
                categoryFilter: action.selectedCategory,
                filteredPostsIsPending: true,
            };
        }

        case FiltersActions.RemoveCategoryFilter: {
            return {
                ...state,
                categoryFilter: 0,
                filteredPostsIsPending: true,
            };
        }

        case FiltersActions.PostsHasFetched: {
            return {
                ...state,
                filteredPostsIsPending: false,
            };
        }

        case FiltersActions.FetchPostsCoordinates: {
            return {
                ...state,
                postCoordinatesIsFetching: true,
            };
        }

        case FiltersActions.FetchPostsCoordinatesSuccess: {
            return {
                ...state,
                postCoordinatesHasFetched: true,
                postCoordinatesIsFetching: false,
                postCoordinates: action.postCoordinates,
            };
        }

        case FiltersActions.FetchPostsCoordinatesFailed: {
            return {
                ...state,
                ...initialState,
            };
        }

        default:
            return state;
    }
}
