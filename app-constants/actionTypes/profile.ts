import {
    Category,
    Competition,
    GroupsWithUsers,
    SimplifiedPost,
    User,
    UserClub,
    UserContactData,
} from '@inspire/types';

export enum ProfileActionTypes {
    InitUserDetails = '[Profile] init user details',
    InitUserDetailsSuccess = '[Profile] init user details success',

    UpdateUserDetails = '[Profile] update user details',
    UpdateUserPost = '[Profile] update user post',

    SetUserCategory = '[Profile] set user category',
    SetAllUserCategories = '[Profile] set all user categories',
    RemoveUserCategory = '[Profile] remove user category',
    RemoveAllUserCategories = '[Profile] remove all user categories',
    UpdateUserCategories = '[Profile] update user categories',
    UpdateUserCategoriesSuccess = '[Profile] update user categories success',
    UpdateUserCategoriesFailure = '[Profile] update user categories failure',

    CreateNewGroup = '[Profile] create user group',
    CreateNewGroupSuccessfully = '[Profile] create user group successfully',
    CreateNewGroupFailed = '[Profile] create user group failed',

    UpdateGroup = '[Profile] update group',
    UpdateGroupSuccessfully = '[Profile] update group successfully',
    UpdateGroupFailed = '[Profile] update group failed',

    FollowUser = '[Profile] follow user',
    FollowUserSuccess = '[Profile] follow users success',
    FollowUserFailed = '[Profile] follow user failed',

    UnFollowUser = '[Profile] unfollow user',
    UnFollowUserSuccess = '[Profile] unfollow user success',
    UnFollowUserFailed = '[Profile] unfollow user failed',

    GetUserGroupsSuccess = '[Profile] get user groups success',
    GetUserGroupsFailure = '[Profile] get user groups failure',

    AddUserToGroup = '[Profile] add user to group',
    RemoveUserFromGroup = '[Profile] remove user from group',
    InitUsersAtEditedGroup = '[Profile] init users ad edited group',
    RemoveAllUsersFromGroup = '[Profile] remove all users from group',

    LoadMorePosts = '[Profile] load more posts',
    LoadMoreProductPosts = '[Profile] load more products posts',
    LoadMoreProductPostsSuccess = '[Profile] load more products posts success',
    LoadMoreProductPostsFailed = '[Profile] load more products posts failed',
    RemovePostById = '[Profile] remove post by id',
    LoadMorePostsSuccess = '[Profile] load more posts success',
    LoadMorePostsFailed = '[Profile] load more posts failed',
    LoadMoreRecommendedPosts = '[Profile] load more recommended posts',
    LoadMoreRecommendedPostsSuccess = '[Profile] load more recommended posts success',
    LoadMoreRecommendedPostsFailed = '[Profile] load more recommended posts failed',

    FetchGroupPosts = '[Profile] fetch group posts',
    FetchGroupPostsSuccess = '[Profile] fetch group posts success',
    FetchGroupPostsFailed = '[Profile] fetch group posts failed',
    RemoveGroupPosts = '[Profile] remove group posts',
    UpdateGroupPost = '[Profile] update group post',

    LeaveGroup = '[Profile] leave group',
    LeaveGroupSuccess = '[Profile] leave group success',
    LeaveGroupFailed = '[Profile] leave group failed',

    UserIsBlocked = '[Profile] user is blocked',

    RecommendUser = '[Profile] recommend user',
    RecommendUserSuccess = '[Profile] recommend users success',
    RecommendUserFailed = '[Profile] recommend user failed',

    DisrecommendUser = '[Profile] disrecommend user',
    DisrecommendUserSuccess = '[Profile] disrecommend user success',
    DisrecommendUserFailed = '[Profile] disrecommend user failed',

    UpdateUserCompletedCompetition = '[Profile] update user completed competition',
}

interface UpdateUserCompletedCompetition {
    type: typeof ProfileActionTypes.UpdateUserCompletedCompetition;
    userId: number;
    completedCompetition: Competition[];
}
interface RecommendUser {
    type: typeof ProfileActionTypes.RecommendUser;
}

interface RecommendUserSuccess {
    type: typeof ProfileActionTypes.RecommendUserSuccess;
}

interface RecommendUserFailed {
    type: typeof ProfileActionTypes.RecommendUserFailed;
}

interface DisrecommendUser {
    type: typeof ProfileActionTypes.DisrecommendUser;
}

interface DisrecommendUserSuccess {
    type: typeof ProfileActionTypes.DisrecommendUserSuccess;
}

interface DisrecommendUserFailed {
    type: typeof ProfileActionTypes.DisrecommendUserFailed;
}

interface UserIsBlocked {
    type: typeof ProfileActionTypes.UserIsBlocked;
    userId: number;
    userIsBlocked: boolean;
}

interface UpdateGroupPost {
    type: typeof ProfileActionTypes.UpdateGroupPost;
    post: SimplifiedPost;
}

interface LeaveGroup {
    type: typeof ProfileActionTypes.LeaveGroup;
}

interface LeaveGroupSuccess {
    type: typeof ProfileActionTypes.LeaveGroupSuccess;
}

interface LeaveGroupFailed {
    type: typeof ProfileActionTypes.LeaveGroupFailed;
}

interface RemoveGroupPosts {
    type: typeof ProfileActionTypes.RemoveGroupPosts;
}

interface FetchGroupPosts {
    type: typeof ProfileActionTypes.FetchGroupPosts;
}

interface FetchGroupPostsSuccess {
    type: typeof ProfileActionTypes.FetchGroupPostsSuccess;
    posts: SimplifiedPost[];
}

interface FetchGroupPostsFailed {
    type: typeof ProfileActionTypes.FetchGroupPostsFailed;
}

interface LoadMorePosts {
    type: typeof ProfileActionTypes.LoadMorePosts;
    userId: number;
}

interface LoadMoreRecommendedPosts {
    type: typeof ProfileActionTypes.LoadMoreRecommendedPosts;
    userId: number;
}

interface LoadMoreRecommendedPostsSuccess {
    type: typeof ProfileActionTypes.LoadMoreRecommendedPostsSuccess;
    userId: number;
    posts: SimplifiedPost[];
    skip: number;
}

interface LoadMoreRecommendedPostsFailed {
    type: typeof ProfileActionTypes.LoadMoreRecommendedPostsFailed;
    userId: number;
}

interface LoadMoreRecommendedPostsSuccess {
    type: typeof ProfileActionTypes.LoadMoreRecommendedPostsSuccess;
    userId: number;
}

interface LoadMoreProductPosts {
    type: typeof ProfileActionTypes.LoadMoreProductPosts;
    userId: number;
}

interface LoadMoreProductPostsSuccess {
    type: typeof ProfileActionTypes.LoadMoreProductPostsSuccess;
    userId: number;
    posts: SimplifiedPost[];
    skip: number;
}

interface LoadMoreProductPostsFailed {
    type: typeof ProfileActionTypes.LoadMoreProductPostsFailed;
    userId: number;
}

interface LoadMorePostsSuccess {
    type: typeof ProfileActionTypes.LoadMorePostsSuccess;
    userId: number;
    posts: SimplifiedPost[];
}

interface LoadMorePostsFailed {
    type: typeof ProfileActionTypes.LoadMorePostsFailed;
    userId: number;
}

interface UpdateUserDetails {
    type: typeof ProfileActionTypes.UpdateUserDetails;
    userId: number;
    userDetails: User;
    userContactData: UserContactData;
}

interface InitUserDetailsByUserId {
    type: typeof ProfileActionTypes.InitUserDetails;
    userId: number;
}

interface InitUserDetailsByUserIdSuccess {
    type: typeof ProfileActionTypes.InitUserDetailsSuccess;
    userId: number;
    userDetails: User & any;
    followers: User[];
    subscribers: User[];
    groups: GroupsWithUsers[];
    posts: SimplifiedPost[];
    recommendedPosts: SimplifiedPost[];
    productPosts: SimplifiedPost[];
    inspiredCount: number;
    isBlocked: boolean;
    categories: Category[];
    clubs: UserClub[];
    completedCompetition: Competition[];
    userContactData: UserContactData;
}

interface GetGroupsByUserIdSuccess {
    type: typeof ProfileActionTypes.GetUserGroupsSuccess;
    userId: number;
    groups: GroupsWithUsers[];
}

interface GetGroupsByUserIdFailed {
    type: typeof ProfileActionTypes.GetUserGroupsFailure;
    userId: number;
    error: string;
}

interface FollowUser {
    type: typeof ProfileActionTypes.FollowUser;
    userId: number;
}

interface FollowUserSuccess {
    type: typeof ProfileActionTypes.FollowUserSuccess;
    subscriber: User;
    userId: number;
}

interface FollowUserFailed {
    type: typeof ProfileActionTypes.FollowUserFailed;
    userId: number;
}

interface UnFollowUser {
    type: typeof ProfileActionTypes.UnFollowUser;
    userId: number;
}

interface UnFollowUserSuccess {
    type: typeof ProfileActionTypes.UnFollowUserSuccess;
    subscriber: User;
    userId: number;
}

interface SetAllUserCategories {
    type: typeof ProfileActionTypes.SetAllUserCategories;
    categories: Category[];
    userId: number;
}

interface SetUserCategory {
    type: typeof ProfileActionTypes.SetUserCategory;
    category: Category;
    userId: number;
}

interface RemoveUserCategory {
    type: typeof ProfileActionTypes.RemoveUserCategory;
    category: Category;
    userId: number;
}

interface RemoveAllUserCategories {
    type: typeof ProfileActionTypes.RemoveAllUserCategories;
    userId: number;
}

interface UpdateUserCategories {
    type: typeof ProfileActionTypes.UpdateUserCategories;
}

interface UpdateUserCategorySuccess {
    type: typeof ProfileActionTypes.UpdateUserCategoriesSuccess;
}

interface UpdateUserCategoryFailed {
    type: typeof ProfileActionTypes.UpdateUserCategoriesFailure;
}

interface UnFollowUserFailed {
    type: typeof ProfileActionTypes.UnFollowUserFailed;
    userId: number;
}

interface RemoveUserFromGroup {
    type: typeof ProfileActionTypes.RemoveUserFromGroup;
    user: User;
}

interface AddUserToGroup {
    type: typeof ProfileActionTypes.AddUserToGroup;
    user: User;
}

interface InitUsersAtEditedGroup {
    type: typeof ProfileActionTypes.InitUsersAtEditedGroup;
    users: User[];
}

interface RemoveAllUsersFromEditedGroup {
    type: typeof ProfileActionTypes.RemoveAllUsersFromGroup;
}

interface UpdateGroup {
    type: typeof ProfileActionTypes.UpdateGroup;
}

interface RemovePostById {
    type: typeof ProfileActionTypes.RemovePostById;
    postId: string;
    userId: number;
}

interface UpdateGroupSuccessfully {
    type: typeof ProfileActionTypes.UpdateGroupSuccessfully;
}

interface UpdateGroupFailed {
    type: typeof ProfileActionTypes.UpdateGroupFailed;
}

interface CreateNewGroup {
    type: typeof ProfileActionTypes.CreateNewGroup;
}

interface CreateNewGroupSuccessfully {
    type: typeof ProfileActionTypes.CreateNewGroupSuccessfully;
}

interface CreateNewGroupFailed {
    type: typeof ProfileActionTypes.CreateNewGroupFailed;
}

interface UpdateUserPost {
    type: typeof ProfileActionTypes.UpdateUserPost;
    post: Partial<SimplifiedPost>;
    userId: number;
}

export type ProfileActionUnion =
    | UpdateUserPost
    | FollowUser
    | UnFollowUser
    | RemoveUserFromGroup
    | UpdateUserDetails
    | AddUserToGroup
    | RecommendUser
    | RecommendUserSuccess
    | RecommendUserFailed
    | DisrecommendUser
    | DisrecommendUserSuccess
    | DisrecommendUserFailed
    | CreateNewGroup
    | CreateNewGroupSuccessfully
    | CreateNewGroupFailed
    | FollowUserSuccess
    | FollowUserFailed
    | UnFollowUserSuccess
    | GetGroupsByUserIdSuccess
    | GetGroupsByUserIdFailed
    | InitUserDetailsByUserIdSuccess
    | InitUserDetailsByUserId
    | UnFollowUserFailed
    | LoadMorePosts
    | UpdateGroup
    | UpdateGroupSuccessfully
    | UpdateGroupFailed
    | InitUsersAtEditedGroup
    | LoadMorePostsSuccess
    | RemoveAllUsersFromEditedGroup
    | FetchGroupPosts
    | LoadMoreProductPosts
    | LoadMoreProductPostsSuccess
    | LoadMoreProductPostsFailed
    | UpdateUserCompletedCompetition
    | RemoveGroupPosts
    | FetchGroupPostsSuccess
    | SetUserCategory
    | RemoveUserCategory
    | UpdateUserCategories
    | SetAllUserCategories
    | RemoveAllUserCategories
    | UpdateUserCategorySuccess
    | UpdateUserCategoryFailed
    | UserIsBlocked
    | LeaveGroup
    | LeaveGroupSuccess
    | LeaveGroupFailed
    | FetchGroupPostsFailed
    | LoadMoreRecommendedPosts
    | LoadMoreRecommendedPostsSuccess
    | LoadMoreRecommendedPostsFailed
    | UpdateGroupPost
    | RemovePostById
    | LoadMorePostsFailed;
