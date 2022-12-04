import { AppConfig } from '@inspire/types';

export enum AppConfigActions {
    FetchAppConfig = '[App config] fetch app config',
    FetchAppConfigSuccess = '[App config] fetch app config success',
    FetchAppConfigFailed = '[App config] fetch app config failed',
}

interface FetchAppConfig {
    type: typeof AppConfigActions.FetchAppConfig;
}

interface FetchAppConfigSuccess {
    type: typeof AppConfigActions.FetchAppConfigSuccess;
    config: AppConfig;
}

interface FetchAppConfigFailed {
    type: typeof AppConfigActions.FetchAppConfigFailed;
}

export type AppConfigUnion = FetchAppConfig | FetchAppConfigSuccess | FetchAppConfigFailed;
