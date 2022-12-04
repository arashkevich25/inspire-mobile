import { authWhiteList } from '../constants/authWhiteList';

import { Navigation } from 'react-native-navigation';
import Toast from 'react-native-toast-message';

import { NavigationService } from 'navigation/tools/NavigationService';
import { isAuthenticated } from 'selectors';
import I18n from 'tools/translate';

let timeout: NodeJS.Timeout;

export const authMiddleWare = (store: any) => (next: any) => async (action: any) => {
    const isAuth = isAuthenticated(store.getState());
    if (!isAuth && !authWhiteList.includes(action.type)) {
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
            await Navigation.pop(NavigationService.activeScreen);
            Toast.show({
                text2: I18n.t(`signIn.text.signInIsRequired`),
                type: 'error',
            });
        }, 100);
        return;
    }
    next(action);
};
