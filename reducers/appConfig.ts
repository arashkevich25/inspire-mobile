import { AppConfig } from '@inspire/types';
import { AppConfigActions, AppConfigUnion } from 'app-constants/actionTypes';

export interface AppConfigState {
    config: AppConfig | null;
    isFetching: boolean;
    hasFetched: boolean;
}

const initialState: AppConfigState = {
    config: null,
    isFetching: false,
    hasFetched: false,
};

export function appConfigReducer(state: AppConfigState = initialState, action: AppConfigUnion): AppConfigState {
    switch (action.type) {
        case AppConfigActions.FetchAppConfig: {
            return {
                ...state,
                isFetching: true,
            };
        }

        case AppConfigActions.FetchAppConfigFailed: {
            return {
                ...state,
                hasFetched: false,
                isFetching: false,
            };
        }

        case AppConfigActions.FetchAppConfigSuccess: {
            return {
                ...state,
                config: action.config,
                isFetching: false,
                hasFetched: true,
            };
        }

        default:
            return state;
    }
}
