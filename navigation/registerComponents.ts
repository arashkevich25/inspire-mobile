import { ComponentName } from 'navigation';
import {
    Activities,
    AddEditGroup,
    AddPhotoTopBarControl,
    AddPost,
    ApproveSocialLoginAppPolicy,
    ChangePassword,
    ChooseGroups,
    ChooseLocationFilter,
    ChoosePersonToGroup,
    Club,
    ClubCompetitions,
    CompetitionDetails,
    Drafts,
    EditUserDetails,
    Encouraging,
    FilteredPostsList,
    FilteredPostsListByGroup,
    FilteredPostsListByStaticFilter,
    GlobalSearch,
    Home,
    Inspired,
    JoinToClubAdditionalData,
    Login,
    NoConnectionStatus,
    OnBoarding,
    OpenSourceLibraries,
    PostsByTag,
    Profile,
    RateApplication,
    RememberPassword,
    RememberPasswordDone,
    SearchLocalization,
    ShowPostModal,
    Signup,
    StatuteDetails,
    StatutesList,
    Switcher,
    TextPage,
    UserIntroSetup,
    UsersList,
    Wall,
    WebViewModal,
    WorldWall,
} from 'screens';

import { Navigation } from 'react-native-navigation';

import { BottomMenu, Notification, SendTopBarControl, TitleLogo } from 'components';
import { FilterPanel } from 'containers';
import {
    withAppSetup,
    withAppSetupWithoutSafeArea,
    withGroupById,
    withPostByIdWithLoader,
    withPostFromGroup,
    withPostFromInspired,
    withPostFromProfile,
    withPostFromWall,
    withPostFromWorldWall,
    withThemeSetup,
} from 'hocs';
import { RootUserMenu } from 'screens/Profile/components/Header/components/RootUserMenu';
import { UserMenu } from 'screens/Profile/components/Header/components/UserMenu';

export function registerCommonComponents() {
    Navigation.registerComponent(ComponentName.ComponentAddPhotoControl, () => withAppSetup(AddPhotoTopBarControl));
    Navigation.registerComponent(ComponentName.ScreenPostsByTag, () => withAppSetup(PostsByTag));
    Navigation.registerComponent(ComponentName.ComponentBottomMenu, () => withAppSetupWithoutSafeArea(BottomMenu));
    Navigation.registerComponent(ComponentName.ScreenClubCompetitions, () => withAppSetup(ClubCompetitions));
    Navigation.registerComponent(ComponentName.ScreenCompetitionDetails, () => withAppSetup(CompetitionDetails));
    Navigation.registerComponent(ComponentName.ComponentRootUserMenu, () => withAppSetup(RootUserMenu));
    Navigation.registerComponent(ComponentName.ComponentUserMenu, () => withAppSetup(UserMenu));
    Navigation.registerComponent(ComponentName.ComponentFilter, () => withAppSetup(FilterPanel));
    Navigation.registerComponent(ComponentName.ComponentTitleLogo, () => withAppSetup(TitleLogo));
    Navigation.registerComponent(ComponentName.ComponentSendControl, () => withAppSetup(SendTopBarControl));
    Navigation.registerComponent(ComponentName.ComponentWebView, () => withAppSetup(WebViewModal));
    Navigation.registerComponent(ComponentName.ScreenDrafts, () => withAppSetup(Drafts));
    Navigation.registerComponent(ComponentName.ScreenClub, () => withAppSetup(Club));
    Navigation.registerComponent(ComponentName.ScreenJoinToClubAdditionalData, () =>
        withAppSetup(JoinToClubAdditionalData),
    );
    Navigation.registerComponent(ComponentName.ScreenFilteredPostsList, () => withAppSetup(FilteredPostsList));
    Navigation.registerComponent(ComponentName.ScreenFilteredPostsListByGroup, () =>
        withAppSetup(FilteredPostsListByGroup),
    );
    Navigation.registerComponent(ComponentName.ScreenFilteredPostsListByStaticFilter, () =>
        withAppSetup(FilteredPostsListByStaticFilter),
    );
    Navigation.registerComponent(ComponentName.ScreenTextPage, () => withAppSetup(TextPage));
    Navigation.registerComponent(ComponentName.ScreenNoConnectionStatus, () => NoConnectionStatus);
    Navigation.registerComponent(ComponentName.ScreenRateApplication, () => RateApplication);
    Navigation.registerComponent(ComponentName.ScreenEncouraging, () => Encouraging);
    Navigation.registerComponent(ComponentName.ScreenOpenSourceLibraries, () => OpenSourceLibraries);

    /* Show post modal */
    Navigation.registerComponent(ComponentName.ScreenShowPostModalFromProfile, () =>
        withAppSetup(withPostFromProfile(ShowPostModal)),
    );
    Navigation.registerComponent(ComponentName.ScreenShowPostModalFromWall, () =>
        withAppSetup(withPostFromWall(ShowPostModal)),
    );
    Navigation.registerComponent(ComponentName.ScreenShowPostModalFromInspired, () =>
        withAppSetup(withPostFromInspired(ShowPostModal)),
    );
    Navigation.registerComponent(ComponentName.ScreenShowPostModalFromWorldWall, () =>
        withAppSetup(withPostFromWorldWall(ShowPostModal)),
    );
    Navigation.registerComponent(ComponentName.ScreenShowPostModalFromGroup, () =>
        withAppSetup(withPostFromGroup(ShowPostModal)),
    );
    Navigation.registerComponent(ComponentName.ScreenShowPostModalFromPostById, () =>
        withAppSetup(withPostByIdWithLoader(ShowPostModal)),
    );
    /* End */

    Navigation.registerComponent(ComponentName.ScreenChooseLocationFilter, () => withAppSetup(ChooseLocationFilter));
    Navigation.registerComponent(ComponentName.ScreenAddEditGroupById, () => withAppSetup(withGroupById(AddEditGroup)));
}

export function registerAuthComponents() {
    Navigation.registerComponent(ComponentName.ComponentNotification, () => Notification);
    Navigation.registerComponent(ComponentName.ScreenApproveSocialLoginAppPolicy, () =>
        withAppSetup(ApproveSocialLoginAppPolicy),
    );
    Navigation.registerComponent(ComponentName.ScreenOnBoarding, () => withAppSetup(OnBoarding));
    Navigation.registerComponent(ComponentName.AuthSwitcher, () => withThemeSetup(Switcher));
    Navigation.registerComponent(ComponentName.AppWorldWall, () => withAppSetup(WorldWall));
    Navigation.registerComponent(ComponentName.AppNotSignUpUserWorldWall, () => withAppSetup(WorldWall));
    Navigation.registerComponent(ComponentName.ScreenChangePassword, () => withAppSetup(ChangePassword));
    Navigation.registerComponent(ComponentName.ScreenSignUp, () => withAppSetup(Signup));
    Navigation.registerComponent(ComponentName.ScreenRememberPassword, () => withAppSetup(RememberPassword));
    Navigation.registerComponent(ComponentName.ScreenRememberPasswordDone, () => withAppSetup(RememberPasswordDone));
    Navigation.registerComponent(ComponentName.AppLogin, () => withAppSetup(Login));
}

export function registerAppComponent() {
    Navigation.registerComponent(ComponentName.AppHome, () => withAppSetup(Home));
    Navigation.registerComponent(ComponentName.AppWall, () => withAppSetup(Wall));
    Navigation.registerComponent(ComponentName.AppAddPost, () => withAppSetup(AddPost));
    Navigation.registerComponent(ComponentName.AppInspired, () => withAppSetup(Inspired));
    Navigation.registerComponent(ComponentName.AppProfile, () => withAppSetup(Profile));
    Navigation.registerComponent(ComponentName.AppRootProfile, () => withAppSetup(Profile));
    Navigation.registerComponent(ComponentName.AppUserIntroSetup, () => withAppSetup(UserIntroSetup));
}

export function registerProfileComponents() {
    Navigation.registerComponent(ComponentName.ScreenEditUserDetails, () => withAppSetup(EditUserDetails));
    Navigation.registerComponent(ComponentName.ScreenAddEditGroup, () => withAppSetup(AddEditGroup));
    Navigation.registerComponent(ComponentName.ScreenChoosePersonToGroup, () => withAppSetup(ChoosePersonToGroup));
    Navigation.registerComponent(ComponentName.ScreenGlobalSearch, () => withAppSetup(GlobalSearch));
    Navigation.registerComponent(ComponentName.ScreenSubscribersFollowersList, () => withAppSetup(UsersList));
    Navigation.registerComponent(ComponentName.ScreenActivities, () => withAppSetup(Activities));
    Navigation.registerComponent(ComponentName.ScreenStatutesList, () => withAppSetup(StatutesList));
    Navigation.registerComponent(ComponentName.ScreenStatuteDetails, () => withAppSetup(StatuteDetails));
}

export function registerAddPostComponents() {
    Navigation.registerComponent(ComponentName.ScreenChooseGroups, () => withAppSetup(ChooseGroups));
    Navigation.registerComponent(ComponentName.ScreenSearchLocalization, () => withAppSetup(SearchLocalization));
    Navigation.registerComponent(ComponentName.ScreenDrafts, () => withAppSetup(Drafts));
}
