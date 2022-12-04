import { AppConfig } from '@inspire/types';

import { AppState } from 'src/reducers';
import { AppConfigState } from '../reducers/appConfig';

function appConfigState(state: AppState): AppConfigState {
    return state.appConfig;
}

export function getAppConfig(state: AppState): AppConfig {
    return appConfigState(state).config;
}

export function appConfigIsFetching(state: AppState): boolean {
    return appConfigState(state).isFetching;
}

export function appConfigHasFetched(state: AppState): boolean {
    return appConfigState(state).hasFetched;
}
