import { AuthenticatedActionTypes } from 'app-constants/actionTypes';
import { combineReducers } from 'redux';
import { activitiesReducer } from './activities';
import { addPostReducer } from './addPost';
import { appConfigReducer } from './appConfig';
import { authenticatedReducer } from './authenticated';
import { avatarReducer } from './avatar';
import { blockedUsersReducer } from './blockedUsers';
import { categoriesReducer } from './categories';
import { clubReducer } from './club';
import { comments } from './comments';
import { competitionReducer } from './competition';
import { editUserDetailsReducer } from './editUserDetails';
import { filterReducer } from './filters';
import { friendsReducer } from './friends';
import { globalSearchReducer } from './globalSearch';
import { homeTemplateReducer } from './homeTemplate';
import { initReducer } from './init';
import { inspiredReducer } from './inspired';
import { localizationReducer } from './localization';
import { networkStateReducer } from './networkState';
import { postByIdReducer } from './postById';
import { postsByTagReducer } from './postsByTag';
import { postStatisticReducer } from './postStatistic';
import { profileReducer } from './profile';
import { ratingReducer } from './rating';
import { reportPostViolationReducer } from './reportPostViolation';
import { reportUserViolationReducer } from './reportUserViolation';
import { resetPasswordReducer } from './resetPassword';
import { statuteReducer } from './statute';
import { userIntroSetupReducer } from './userIntroSetup';
import { wallReducer } from './wall';
import { worldWallReducer } from './worldWall';

export const appReducer = combineReducers({
    appConfig: appConfigReducer,
    initApp: initReducer,
    addPost: addPostReducer,
    profile: profileReducer,
    worldWall: worldWallReducer,
    postStatistic: postStatisticReducer,
    wall: wallReducer,
    authenticated: authenticatedReducer,
    inspired: inspiredReducer,
    avatar: avatarReducer,
    filters: filterReducer,
    categories: categoriesReducer,
    rating: ratingReducer,
    editUserDetails: editUserDetailsReducer,
    comments: comments,
    localization: localizationReducer,
    friends: friendsReducer,
    search: globalSearchReducer,
    resetPassword: resetPasswordReducer,
    reportPostViolation: reportPostViolationReducer,
    reportUserViolation: reportUserViolationReducer,
    blockedUsers: blockedUsersReducer,
    postById: postByIdReducer,
    activities: activitiesReducer,
    postsByTag: postsByTagReducer,
    networkState: networkStateReducer,
    homeTemplate: homeTemplateReducer,
    userIntroSetup: userIntroSetupReducer,
    club: clubReducer,
    statute: statuteReducer,
    competition: competitionReducer,
});

export const rootReducer = (state: any, action: any) => {
    if (action.type === AuthenticatedActionTypes.AuthenticatedLogout) {
        state = undefined;
    }

    return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;
