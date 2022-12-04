import { activities } from './activities';
import { addPost } from './addPost';
import { blockedUsers } from './blockedUsers';
import { categories } from './categories';
import { choosePersonToGroup } from './choosePersonToGroup';
import { clubDetails } from './clubDetails';
import { competitionDetails } from './competitionDetails';
import { drafts } from './drafts';
import { getLocationPermission } from './getLocationPermission';
import { getNotificationPermission } from './getNotificationPermission';
import { global } from './global';
import { globalSearch } from './globalSearch';
import { home } from './home';
import { inspired } from './inspired';
import { loading } from './loading';
import { onBoarding } from './onBoarding';
import { postFullView } from './postFullView';
import { postsByTag } from './postsByTag';
import { profile } from './profile';
import { searchLocalization } from './searchLocalization';
import { setUserCategories } from './setUserCategories';
import { showPostModal } from './showPostModal';
import { signIn } from './signIn';
import { signUp } from './signUp';
import { statute } from './statute';
import { subscribersFollowing } from './subscribersFollowing';
import { userIntroSetup } from './userIntroSetup';
import { violation } from './violation';
import { wall } from './wall';
import { worldWall } from './worldWall';

export const index = {
    ...global,
    drafts,
    clubDetails,
    competitionDetails,
    home,
    onBoarding,
    violation,
    globalSearch,
    getLocationPermission,
    getNotificationPermission,
    postsByTag,
    showPostModal,
    subscribersFollowing,
    categories,
    choosePersonToGroup,
    loading,
    signIn,
    addPost,
    signUp,
    searchLocalization,
    setUserCategories,
    profile,
    wall,
    inspired,
    worldWall,
    postFullView,
    blockedUsers,
    activities,
    userIntroSetup,
    statute,
};
