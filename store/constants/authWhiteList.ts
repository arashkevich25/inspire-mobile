import {
    AuthenticatedActionTypes,
    CategoriesActions,
    ClubActions,
    CommentActionTypes,
    CompetitionActions,
    FiltersActions,
    InspiredActionTypes,
    NetworkStateActions,
    PostByIdAction,
    RatingActions,
    ResetPasswordActions,
    WorldWallActions,
} from 'app-constants/actionTypes';

export const authWhiteList = [
    ...Object.values(WorldWallActions),
    ...Object.values(AuthenticatedActionTypes),
    ...Object.values(PostByIdAction),
    ...Object.values(CommentActionTypes),
    ...Object.values(FiltersActions),
    ...Object.values(FiltersActions),
    ...Object.values(NetworkStateActions),
    ...Object.values(ClubActions),
    CompetitionActions.GetDetails,
    CompetitionActions.GetDetailsSuccess,
    CompetitionActions.GetDetailsFailed,
    ResetPasswordActions.ResetPasswordFailed,
    ResetPasswordActions.ResetPasswordSuccess,
    ResetPasswordActions.ResetPassword,
    CategoriesActions.GetCategories,
    CategoriesActions.GetCategoriesSuccess,
    CategoriesActions.GetCategoriesFailure,
    InspiredActionTypes.FollowUnfollowPostFailed,
    RatingActions.SetRatingFailed,
];
