import { AppConfig } from '@inspire/types';
import { useSelector } from 'react-redux';

import { appConfigHasFetched, appConfigIsFetching, getAppConfig } from 'selectors';
import { AppState } from '../reducers';

type UseAppConfigOutput = {
    appConfig: AppConfig;
    isFetching: boolean;
    hasFetched: boolean;
};

export function useAppConfig(): UseAppConfigOutput {
    const appConfig = useSelector((state: AppState) => getAppConfig(state));
    const isFetching = useSelector((state: AppState) => appConfigIsFetching(state));
    const hasFetched = useSelector((state: AppState) => appConfigHasFetched(state));

    return {
        appConfig,
        isFetching,
        hasFetched,
    };
}
