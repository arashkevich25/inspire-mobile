import { AuthenticatedActionTypes } from 'app-constants/actionTypes';
import { StorageKeys } from 'app-constants/storageKeys';
import { Dispatch } from 'redux';
import { initHome } from './init';

import { getCategories } from 'actions/categories';
import { getItemFromStorage, sseListener } from 'tools';
import { setAuth } from '../navigation/tools/SetAuthRoot';
import { getSensitiveItem } from '../tools/manageSecurityData';

export function switchScreens(rehydrateQueue: () => void) {
    return async (dispatch: Dispatch) => {
        Promise.all([
            getSensitiveItem(StorageKeys.AuthToken),
            getItemFromStorage(StorageKeys.UserEmail),
            getItemFromStorage(StorageKeys.UserId),
        ]).then(res => {
            dispatch(getCategories());
            if (res[0] && res[1]) {
                const userEmail = res[1];
                const userId = Number(res[2]);
                dispatch({
                    type: AuthenticatedActionTypes.AuthenticatedSuccess,
                    userId,
                });
                dispatch(initHome(userId, userEmail));
                // TODO to remove
                setTimeout(() => {
                    rehydrateQueue();
                }, 3000);
                sseListener(dispatch, userId);
                return;
            }
            setAuth();
        });
    };
}
