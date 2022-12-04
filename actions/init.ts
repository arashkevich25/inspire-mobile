import {
    Activity,
    BasicPost,
    ClubMember,
    Competition,
    GroupsWithUsers,
    HomeTemplateSection,
    MarketingResponse,
    SimplifiedPost,
    User,
    UserCategories,
    UserContactData,
    ViolationReason,
} from '@inspire/types';
import { isAndroid, isIphone } from 'app-constants';
import { InitAppActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';
import { initActivities } from './activities';
import { fetchBlockedByUsersSuccess, fetchBlockedUsersSuccess } from './blockedUsers';
import { initHomeTemplate, initHomeTemplateFailed, initHomeTemplateSuccess } from './homeTemplate';
import { initInspiredPosts } from './inspired';
import { signOut } from './profile';
import { setPostViolationReasons } from './reportPostViolation';
import { initUserDetailsSuccess } from './userDetails';
import { setUserViolationReasons } from './userReportViolation';
import { initWallPosts } from './wall';
import { initWorldPosts } from './worldWall';

import { getBrand, getDeviceId, getSystemVersion, getVersion } from 'react-native-device-info';
import FastImage, { Source } from 'react-native-fast-image';

import { client } from 'configs/graphql';
import { ADD_DEVICE_ID, GET_HOME_SECTIONS, INIT_APP } from 'schemes';
import {
    graphqlQueryWithPolicyByNetworkConnection,
    RollbarLogging,
    setBadgeByActivities,
    showMarketingOverlay,
} from 'tools';
import I18n from 'tools/translate';
import { UserInspiredCount } from 'types';
import { setAppRoot } from '../navigation/tools/SetAppRoot';

export function initHome(userId: number, userEmail: string): any {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: InitAppActions.InitApp,
        });
        const query = client.query<{
            getWallBasicPosts: BasicPost[];
            getInspiredSimplifiedPosts: SimplifiedPost[];
            getWorldWallSimplifiedPostsAuthedUser: SimplifiedPost[];
            getPostViolationReasons: ViolationReason[];
            getUserViolationReasons: ViolationReason[];
            initMarketing: MarketingResponse;
            getHomeSections2: HomeTemplateSection[];
            user: User;
            getFollowing: User[];
            getFollowers: User[];
            getSimplifiedPostsByUser: SimplifiedPost[];
            getProductSimplifiedPostsByUser: SimplifiedPost[];
            getGroups: GroupsWithUsers[];
            getUserInspiredCount: UserInspiredCount;
            userIsBlocked: boolean;
            blockedByUsers: User[];
            blockedUsers: User[];
            getActivities: Activity[];
            getUserCategories: UserCategories;
            getUserClubs: Partial<ClubMember[]>;
            getUserContactData: UserContactData;
            getCompletedCompetition: Competition[];
            getRecommendedPostsByUser: SimplifiedPost[];
        }>({ query: INIT_APP, fetchPolicy: 'cache-first', variables: { userId, userIdInt: userId } });

        query
            .then(
                async ({
                    data: {
                        getHomeSections2,
                        getWallBasicPosts,
                        getInspiredSimplifiedPosts,
                        getWorldWallSimplifiedPostsAuthedUser,
                        user,
                        getSimplifiedPostsByUser,
                        getProductSimplifiedPostsByUser,
                        getFollowing,
                        getFollowers,
                        getGroups,
                        getUserInspiredCount,
                        userIsBlocked,
                        getUserCategories,
                        getUserClubs,
                        getUserContactData,
                        getCompletedCompetition,
                        getActivities,
                        blockedUsers,
                        blockedByUsers,
                        getRecommendedPostsByUser,
                    },
                }) => {
                    dispatch(
                        initUserDetailsSuccess(
                            userId,
                            user,
                            getSimplifiedPostsByUser,
                            getProductSimplifiedPostsByUser,
                            getFollowing,
                            getFollowers,
                            getGroups,
                            getUserInspiredCount,
                            userIsBlocked,
                            getUserCategories,
                            getUserClubs,
                            getUserContactData,
                            getCompletedCompetition,
                            getRecommendedPostsByUser,
                        ),
                    );
                    dispatch(initActivities(getActivities));
                    dispatch(fetchBlockedUsersSuccess(blockedUsers));
                    dispatch(fetchBlockedByUsersSuccess(blockedByUsers));
                    setBadgeByActivities(getActivities);
                    dispatch(initWallPosts(getWallBasicPosts));
                    dispatch(initInspiredPosts(getInspiredSimplifiedPosts));
                    dispatch(initHomeTemplateSuccess(getHomeSections2));
                    dispatch(initWorldPosts(getWorldWallSimplifiedPostsAuthedUser));
                    dispatch(initApp(userId));
                    RollbarLogging.setUser(String(userId), '', userEmail);
                    await setAppRoot(userId);
                },
            )
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'initHome');
                dispatch({
                    type: InitAppActions.InitAppFailed,
                    error,
                });
                dispatch(signOut(userId));
            });
    };
}

export function initHomeSections() {
    return (dispatch: any) => {
        dispatch(initHomeTemplate());

        client
            .query<{
                getHomeSections2: HomeTemplateSection[];
            }>({ query: GET_HOME_SECTIONS, fetchPolicy: 'network-only' })
            .then(({ data: { getHomeSections2 } }) => {
                dispatch(initHomeTemplateSuccess(getHomeSections2));
            })
            .catch(() => {
                dispatch(initHomeTemplateFailed());
            });
    };
}

export function initApp(userId: number): any {
    return async (dispatch: Dispatch) => {
        graphqlQueryWithPolicyByNetworkConnection<{
            getWallBasicPosts: BasicPost[];
            getInspiredSimplifiedPosts: SimplifiedPost[];
            getWorldWallSimplifiedPostsAuthedUser: SimplifiedPost[];
            getPostViolationReasons: ViolationReason[];
            getUserViolationReasons: ViolationReason[];
            initMarketing: MarketingResponse;
            getHomeSections2: HomeTemplateSection[];
            user: User;
            getFollowing: User[];
            getFollowers: User[];
            getSimplifiedPostsByUser: SimplifiedPost[];
            getProductSimplifiedPostsByUser: SimplifiedPost[];
            getGroups: GroupsWithUsers[];
            getUserInspiredCount: UserInspiredCount;
            userIsBlocked: boolean;
            blockedByUsers: User[];
            blockedUsers: User[];
            getActivities: Activity[];
            getUserCategories: UserCategories;
            getUserClubs: Partial<ClubMember[]>;
            getUserContactData: UserContactData;
            getCompletedCompetition: Competition[];
            getRecommendedPostsByUser: SimplifiedPost[];
        }>({ query: INIT_APP, variables: { userId, userIdInt: userId } })
            .then(
                async ({
                    data: {
                        getWallBasicPosts,
                        getInspiredSimplifiedPosts,
                        getPostViolationReasons,
                        getUserViolationReasons,
                        initMarketing,
                        getHomeSections2,
                        getWorldWallSimplifiedPostsAuthedUser,
                        user,
                        getSimplifiedPostsByUser,
                        getProductSimplifiedPostsByUser,
                        getFollowing,
                        getFollowers,
                        getGroups,
                        getUserInspiredCount,
                        userIsBlocked,
                        getUserCategories,
                        getUserClubs,
                        getUserContactData,
                        getCompletedCompetition,
                        getActivities,
                        blockedUsers,
                        blockedByUsers,
                        getRecommendedPostsByUser,
                    },
                }) => {
                    dispatch(
                        initUserDetailsSuccess(
                            userId,
                            user,
                            getSimplifiedPostsByUser,
                            getProductSimplifiedPostsByUser,
                            getFollowing,
                            getFollowers,
                            getGroups,
                            getUserInspiredCount,
                            userIsBlocked,
                            getUserCategories,
                            getUserClubs,
                            getUserContactData,
                            getCompletedCompetition,
                            getRecommendedPostsByUser,
                        ),
                    );
                    dispatch(initActivities(getActivities));
                    dispatch(fetchBlockedUsersSuccess(blockedUsers));
                    dispatch(fetchBlockedByUsersSuccess(blockedByUsers));
                    setBadgeByActivities(getActivities);
                    dispatch(initWallPosts(getWallBasicPosts));
                    dispatch(initInspiredPosts(getInspiredSimplifiedPosts));
                    dispatch(initWorldPosts(getWorldWallSimplifiedPostsAuthedUser));
                    dispatch(initHomeTemplateSuccess(getHomeSections2));
                    const images: Source[] = [
                        ...getWallBasicPosts.map(post => ({ uri: post.photo })),
                        ...getInspiredSimplifiedPosts.map(post => ({ uri: post.photo })),
                        ...getWorldWallSimplifiedPostsAuthedUser.map(post => ({ uri: post.photo })),
                    ];

                    FastImage.preload(images);

                    dispatch(setPostViolationReasons(getPostViolationReasons));
                    dispatch(setUserViolationReasons(getUserViolationReasons));

                    if (initMarketing) {
                        showMarketingOverlay(initMarketing);
                    }
                    dispatch({
                        type: InitAppActions.InitAppSuccess,
                    });
                },
            )
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'initApp');
                dispatch({
                    type: InitAppActions.InitAppFailed,
                    error,
                });
                dispatch(signOut(userId));
            });
    };
}

export function initDevice(deviceId: string) {
    const detailsData = {
        isIos: isIphone,
        isAndroid: isAndroid,
        appVersion: getVersion(),
        osVersion: getSystemVersion(),
        deviceBrand: getBrand(),
        deviceModel: getDeviceId(),
        deviceLanguage: I18n.locale,
        deviceId,
    };

    client.mutate({ mutation: ADD_DEVICE_ID(detailsData) }).then(response => {
        if (!response.data.addDeviceDetails) {
            throw new Error('Error while adding device id');
        }
    });
}
