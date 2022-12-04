import { SocietyInterface, SuccessSignInResponse, UserId } from '@inspire/types';
import { StorageKeys } from 'app-constants';

// eslint-disable-next-line import/no-named-as-default
import Config from 'react-native-config';

import { getItemFromStorage, RollbarLogging, setItemToStorage } from 'tools';

export abstract class SocietyConfig {
    static hubApi = Config.API_USERS_HUB;
    static societyApi = Config.COMMON_SOCIETY_API;
    static restApi = `${SocietyConfig.societyApi}/api`;
    static sse = `${SocietyConfig.restApi}/sse/mobile`;
    static graphqlApi = `${SocietyConfig.societyApi}/graphql`;
    static majorSocietyApi = Config.COMMON_SOCIETY_API;
    static societyId = Config.COMMON_SOCIETY_ID;
    static userId: UserId[];
    static hubNamespaces = {
        auth: 'user-auth',
    };
    static hubEndpoints = {
        login: `${SocietyConfig.hubApi}/${SocietyConfig.hubNamespaces.auth}/login`,
        fbLogin: `${SocietyConfig.hubApi}/${SocietyConfig.hubNamespaces.auth}/fb-login`,
        googleLogin: `${SocietyConfig.hubApi}/${SocietyConfig.hubNamespaces.auth}/google-login`,
        appleLogin: `${SocietyConfig.hubApi}/${SocietyConfig.hubNamespaces.auth}/apple-login`,
        signUp: `${SocietyConfig.hubApi}/${SocietyConfig.hubNamespaces.auth}/signup`,
        logout: `${SocietyConfig.hubApi}/${SocietyConfig.hubNamespaces.auth}/logout`,
        resetPassword: `${SocietyConfig.hubApi}/${SocietyConfig.hubNamespaces.auth}/reset-password`,
        checkUser: `${SocietyConfig.hubApi}/${SocietyConfig.hubNamespaces.auth}/check-user`,
        setPassword: `${SocietyConfig.hubApi}/${SocietyConfig.hubNamespaces.auth}/set-new-password`,
        checkResetRequest: `${SocietyConfig.hubApi}/${SocietyConfig.hubNamespaces.auth}/check-reset-request`,
    };

    static async setSocietyByApiResponse(response: SuccessSignInResponse) {
        const defaultSociety: Omit<SocietyInterface, 'isDefault'> | undefined = response.societies.find(
            society => society.id === response.defaultSociety,
        );
        if (!defaultSociety) {
            const error = new Error('defaultSociety is empty');
            RollbarLogging.reportErrorAtSpace(error, 'SocietyConfig');
            throw error;
        }
        await setItemToStorage(StorageKeys.SocietyApi, defaultSociety.api);
        await setItemToStorage(StorageKeys.SocietyId, response.defaultSociety);
        await setItemToStorage(StorageKeys.UserIdWithSociety, JSON.stringify(response.userId));
        SocietyConfig.societyApi = defaultSociety.api;
        SocietyConfig.userId = response.userId;
        SocietyConfig.societyId = response.defaultSociety;
    }

    static async initFromStorage() {
        const societyApi = await getItemFromStorage(StorageKeys.SocietyApi);
        const societyId = await getItemFromStorage(StorageKeys.SocietyId);
        const userIdWithSociety = await getItemFromStorage(StorageKeys.UserIdWithSociety);
        if (!societyApi || !societyId || !userIdWithSociety) {
            return;
        }
        SocietyConfig.societyApi = societyApi;
        SocietyConfig.societyId = societyId;
        SocietyConfig.userId = JSON.parse(userIdWithSociety);
    }

    static getUserAppId(userId: UserId[]) {
        return userId.filter(userId => userId.society === SocietyConfig.societyId)[0].appId;
    }
}
