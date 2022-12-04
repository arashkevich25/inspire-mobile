import { ComponentId } from 'navigation';
import { store } from '../store/store';

import { NavigationService } from 'navigation/tools/NavigationService';

export const appIsInit = new Promise(resolve => {
    const interval = setInterval(() => {
        if (
            store.getState().authenticated.isAuthenticated &&
            store.getState().initApp.initSuccess &&
            NavigationService.activeScreen === ComponentId.AppHome
        ) {
            clearInterval(interval);
            resolve(true);
        }
        if (
            !store.getState().authenticated.isAuthenticated &&
            !store.getState().initApp.initSuccess &&
            NavigationService.activeScreen === ComponentId.AppNotSignUpUserWorldWall
        ) {
            clearInterval(interval);
            resolve(true);
        }
    }, 1000);
});
