import { PostCoordinates } from '@inspire/types';
import { LocalizationActions, LocalizationUnion } from 'app-constants/actionTypes';

export interface LocalizationState {
    localization: string;
    postCoordinatesIsFetching: boolean;
    postCoordinatesHasFetched: boolean;
    postCoordinates: PostCoordinates[] | null;
}

const initialState: LocalizationState = {
    localization: '',
    postCoordinates: null,
    postCoordinatesHasFetched: false,
    postCoordinatesIsFetching: false,
};

export function localizationReducer(
    state: LocalizationState = initialState,
    action: LocalizationUnion,
): LocalizationState {
    switch (action.type) {
        case LocalizationActions.SetLocalization: {
            return {
                ...state,
                localization: action.localization,
            };
        }

        case LocalizationActions.FetchPostsCoordinates: {
            return {
                ...state,
                postCoordinatesIsFetching: true,
            };
        }

        case LocalizationActions.FetchPostsCoordinatesSuccess: {
            return {
                ...state,
                postCoordinatesHasFetched: true,
                postCoordinatesIsFetching: false,
                postCoordinates: action.postCoordinates,
            };
        }

        case LocalizationActions.FetchPostsCoordinatesFailed: {
            return {
                ...state,
                ...initialState,
            };
        }

        default:
            return state;
    }
}
