import {
    Category,
    Competition,
    GroupsWithUsers,
    SimplifiedPost,
    User,
    UserClub,
    UserContactData,
} from '@inspire/types';
import { ProfileActionTypes, ProfileActionUnion } from 'app-constants/actionTypes';
import { SkipCounters } from 'app-constants/SkipCounters';

interface ProfileUserState {
    userDetails: User & { followerIds: number[] };
    initUserDataIsPending: boolean;
    initUserDataFetched: boolean;
    groups: GroupsWithUsers[];
    error: any;
    subscribers: User[];
    followers: User[];
    inspiredCount: number;
    isBlocked: boolean;
    categories: Category[];
    clubs: UserClub[];
    completedCompetition: Competition[];
    contactData: UserContactData;
    followUnFollowUserPending: boolean;
    productPosts: SimplifiedPost[];
    productPostsLoadMoreIsAllowed: boolean;
    productPostsSkipCounter: number;
    posts: SimplifiedPost[];
    postsIsPending: boolean;
    postsHasFetched: boolean;
    postsLoadMoreIsAllowed: boolean;
    postsSkipCounter: number;
    recommendedPosts: SimplifiedPost[];
    recommendedPostsLoadMoreIsAllowed: boolean;
    recommendedPostsSkipCounter: number;
}

export const profileInitialState: ProfileUserState = {
    posts: [],
    productPosts: [],
    userDetails: { id: 0, name: '', followerIds: [] } as any,
    groups: [],
    error: '',
    subscribers: [],
    followers: [],
    initUserDataIsPending: false,
    initUserDataFetched: false,
    inspiredCount: 0,
    postsIsPending: false,
    postsHasFetched: false,
    postsLoadMoreIsAllowed: false,
    productPostsLoadMoreIsAllowed: false,
    postsSkipCounter: 0,
    productPostsSkipCounter: 0,
    isBlocked: false,
    categories: [],
    clubs: [],
    completedCompetition: [],
    contactData: {} as any,
    followUnFollowUserPending: false,
    recommendedPosts: [],
    recommendedPostsLoadMoreIsAllowed: false,
    recommendedPostsSkipCounter: 0,
};

interface ProfileState {
    [key: number]: ProfileUserState;
    createUpdateGroupPending: boolean;
    usersAtGroup: User[];
    settingsBottomSheetIsOpened: boolean;
    fetchGroupPostsFetching: boolean;
    fetchGroupPostsFetched: boolean;
    leaveFromGroupPending: boolean;
    updateCategoriesPending: boolean;
    recommendOrDisrecommendUserPending: boolean;
    groupPosts: SimplifiedPost[];
}

const initialProfileState: ProfileState = {
    usersAtGroup: [],
    createUpdateGroupPending: false,
    settingsBottomSheetIsOpened: false,
    fetchGroupPostsFetched: false,
    fetchGroupPostsFetching: false,
    leaveFromGroupPending: false,
    updateCategoriesPending: false,
    recommendOrDisrecommendUserPending: false,
    groupPosts: [],
};

function postsByUser(state = profileInitialState, action: ProfileActionUnion): ProfileUserState {
    switch (action.type) {
        case ProfileActionTypes.InitUserDetails: {
            return {
                ...state,
                initUserDataIsPending: true,
            };
        }

        case ProfileActionTypes.FollowUser: {
            return {
                ...state,
                followUnFollowUserPending: true,
            };
        }

        case ProfileActionTypes.FollowUserSuccess: {
            return {
                ...state,
                followUnFollowUserPending: false,
                subscribers: [...state.subscribers.filter(user => user.id !== action.subscriber.id), action.subscriber],
                userDetails: {
                    ...state.userDetails,
                    followerIds: [
                        ...state.userDetails.followerIds.filter(id => id !== action.subscriber.id),
                        action.subscriber.id,
                    ],
                },
            };
        }

        case ProfileActionTypes.FollowUserFailed: {
            return {
                ...state,
                followUnFollowUserPending: false,
            };
        }

        case ProfileActionTypes.UnFollowUser: {
            return {
                ...state,
                followUnFollowUserPending: true,
            };
        }

        case ProfileActionTypes.UnFollowUserSuccess: {
            return {
                ...state,
                followUnFollowUserPending: false,
                subscribers: state.subscribers.filter(user => user.id !== action.subscriber.id),
                userDetails: {
                    ...state.userDetails,
                    followerIds: state.userDetails.followerIds.filter(id => id !== action.subscriber.id),
                },
            };
        }
        case ProfileActionTypes.UnFollowUserFailed: {
            return {
                ...state,
                followUnFollowUserPending: false,
            };
        }

        case ProfileActionTypes.SetUserCategory: {
            return {
                ...state,
                categories: [
                    ...state.categories.filter(category => category.id !== action.category.id),
                    action.category,
                ],
            };
        }

        case ProfileActionTypes.SetAllUserCategories: {
            return {
                ...state,
                categories: action.categories,
            };
        }

        case ProfileActionTypes.RemoveAllUserCategories: {
            return {
                ...state,
                categories: [],
            };
        }

        case ProfileActionTypes.RemoveUserCategory: {
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.category.id),
            };
        }

        case ProfileActionTypes.InitUserDetailsSuccess: {
            return {
                ...state,
                userDetails: action.userDetails as any,
                groups: action.groups,
                productPosts: action.productPosts,
                followers: action.followers,
                subscribers: action.subscribers,
                posts: action.posts,
                inspiredCount: action.inspiredCount,
                postsSkipCounter: 20,
                productPostsSkipCounter: 20,
                postsLoadMoreIsAllowed: true,
                productPostsLoadMoreIsAllowed: true,
                recommendedPostsSkipCounter: 20,
                recommendedPostsLoadMoreIsAllowed: true,
                recommendedPosts: action.recommendedPosts,
                initUserDataIsPending: false,
                initUserDataFetched: true,
                isBlocked: action.isBlocked,
                categories: action.categories,
                clubs: action.clubs,
                contactData: action.userContactData,
                completedCompetition: action.completedCompetition,
            };
        }

        case ProfileActionTypes.UpdateUserCompletedCompetition: {
            return {
                ...state,
                completedCompetition: action.completedCompetition,
            };
        }

        case ProfileActionTypes.LoadMorePosts: {
            return {
                ...state,
                postsIsPending: true,
                postsSkipCounter: state.postsSkipCounter + SkipCounters.UserPosts,
            };
        }

        case ProfileActionTypes.LoadMoreRecommendedPosts: {
            return {
                ...state,
                postsIsPending: true,
                recommendedPostsSkipCounter: state.recommendedPostsSkipCounter + SkipCounters.UserPosts,
            };
        }

        case ProfileActionTypes.LoadMoreRecommendedPostsFailed: {
            return {
                ...state,
                postsIsPending: false,
            };
        }

        case ProfileActionTypes.LoadMoreRecommendedPostsSuccess: {
            return {
                ...state,
                postsIsPending: false,
                recommendedPosts: [...state.recommendedPosts, ...action.posts],
                recommendedPostsSkipCounter: action.skip + SkipCounters.UserPosts,
                recommendedPostsLoadMoreIsAllowed: action.posts.length === SkipCounters.UserPosts,
            };
        }

        case ProfileActionTypes.LoadMoreProductPosts: {
            return {
                ...state,
                postsIsPending: true,
            };
        }

        case ProfileActionTypes.RemovePostById: {
            const posts = state.posts.filter(post => post.id !== action.postId);
            const productPosts = state.productPosts.filter(post => post.id !== action.postId);
            return {
                ...state,
                posts,
                productPosts,
            };
        }

        case ProfileActionTypes.LoadMoreProductPostsSuccess: {
            return {
                ...state,
                postsIsPending: false,
                productPosts: [...state.productPosts, ...action.posts],
                productPostsSkipCounter: action.skip + SkipCounters.UserPosts,
                productPostsLoadMoreIsAllowed: action.posts.length === SkipCounters.UserPosts,
            };
        }

        case ProfileActionTypes.LoadMoreProductPostsFailed: {
            return {
                ...state,
                postsIsPending: false,
            };
        }

        case ProfileActionTypes.LoadMorePostsSuccess: {
            return {
                ...state,
                postsIsPending: false,
                posts: [...state.posts, ...action.posts],
                postsLoadMoreIsAllowed: action.posts.length === SkipCounters.UserPosts,
            };
        }

        case ProfileActionTypes.LoadMorePostsFailed: {
            return {
                ...state,
                postsIsPending: false,
            };
        }

        case ProfileActionTypes.UpdateUserDetails: {
            return {
                ...state,
                initUserDataIsPending: false,
                initUserDataFetched: true,
                userDetails: action.userDetails as any,
                contactData: { ...state.contactData, ...action.userContactData },
            };
        }

        case ProfileActionTypes.UpdateUserPost: {
            const posts = state.posts.map(post => {
                if (post.id === action.post.id) {
                    return {
                        ...post,
                        ...action.post,
                    };
                }

                return post;
            });
            const productPosts = state.productPosts.map(post => {
                if (post.id === action.post.id) {
                    return {
                        ...post,
                        ...action.post,
                    };
                }

                return post;
            });
            return {
                ...state,
                posts,
                productPosts,
            };
        }

        case ProfileActionTypes.GetUserGroupsSuccess: {
            return {
                ...state,
                groups: action.groups,
            };
        }

        case ProfileActionTypes.GetUserGroupsFailure: {
            return {
                ...state,
                error: action.error,
            };
        }

        default: {
            return state;
        }
    }
}

export function profileReducer(state: ProfileState = initialProfileState, action: ProfileActionUnion) {
    switch (action.type) {
        case ProfileActionTypes.UpdateUserPost:
        case ProfileActionTypes.InitUserDetails:
        case ProfileActionTypes.GetUserGroupsSuccess:
        case ProfileActionTypes.GetUserGroupsFailure:
        case ProfileActionTypes.InitUserDetailsSuccess:
        case ProfileActionTypes.LoadMorePosts:
        case ProfileActionTypes.RemovePostById:
        case ProfileActionTypes.LoadMorePostsSuccess:
        case ProfileActionTypes.LoadMorePostsFailed:
        case ProfileActionTypes.SetUserCategory:
        case ProfileActionTypes.SetAllUserCategories:
        case ProfileActionTypes.RemoveAllUserCategories:
        case ProfileActionTypes.FollowUser:
        case ProfileActionTypes.FollowUserSuccess:
        case ProfileActionTypes.FollowUserFailed:
        case ProfileActionTypes.UnFollowUser:
        case ProfileActionTypes.LoadMoreProductPosts:
        case ProfileActionTypes.LoadMoreProductPostsSuccess:
        case ProfileActionTypes.UnFollowUserSuccess:
        case ProfileActionTypes.UnFollowUserFailed:
        case ProfileActionTypes.UpdateUserCompletedCompetition:
        case ProfileActionTypes.LoadMoreRecommendedPosts:
        case ProfileActionTypes.LoadMoreRecommendedPostsSuccess:
        case ProfileActionTypes.LoadMoreRecommendedPostsFailed:
        case ProfileActionTypes.RemoveUserCategory:
        case ProfileActionTypes.UpdateUserDetails: {
            return {
                ...state,
                [action.userId]: postsByUser(state[action.userId], action),
            };
        }

        case ProfileActionTypes.DisrecommendUser:
        case ProfileActionTypes.RecommendUser: {
            return {
                ...state,
                recommendOrDisrecommendUserPending: true,
            };
        }

        case ProfileActionTypes.DisrecommendUserSuccess:
        case ProfileActionTypes.DisrecommendUserFailed:
        case ProfileActionTypes.RecommendUserSuccess:
        case ProfileActionTypes.RecommendUserFailed: {
            return {
                ...state,
                recommendOrDisrecommendUserPending: false,
            };
        }

        case ProfileActionTypes.UpdateUserCategories: {
            return {
                ...state,
                updateCategoriesPending: true,
            };
        }

        case ProfileActionTypes.UpdateUserCategoriesFailure:
        case ProfileActionTypes.UpdateUserCategoriesSuccess: {
            return {
                ...state,
                updateCategoriesPending: false,
            };
        }

        case ProfileActionTypes.LeaveGroup: {
            return {
                ...state,
                leaveFromGroupPending: true,
            };
        }

        case ProfileActionTypes.LeaveGroupFailed:
        case ProfileActionTypes.LeaveGroupSuccess: {
            return {
                ...state,
                leaveFromGroupPending: false,
            };
        }

        case ProfileActionTypes.FetchGroupPosts: {
            return {
                ...state,
                fetchGroupPostsFetching: true,
            };
        }

        case ProfileActionTypes.FetchGroupPostsSuccess: {
            return {
                ...state,
                fetchGroupPostsFetching: false,
                fetchGroupPostsFetched: true,
                groupPosts: action.posts,
            };
        }

        case ProfileActionTypes.FetchGroupPostsFailed: {
            return {
                ...state,
                fetchGroupPostsFetching: false,
                fetchGroupPostsFetched: false,
                groupPosts: [],
            };
        }

        case ProfileActionTypes.RemoveGroupPosts: {
            return {
                ...state,
                fetchGroupPostsFetching: false,
                fetchGroupPostsFetched: false,
                groupPosts: [],
            };
        }

        case ProfileActionTypes.AddUserToGroup: {
            return {
                ...state,
                usersAtGroup: [...state.usersAtGroup, action.user],
            };
        }

        case ProfileActionTypes.InitUsersAtEditedGroup: {
            return {
                ...state,
                usersAtGroup: action.users,
            };
        }

        case ProfileActionTypes.RemoveAllUsersFromGroup: {
            return {
                ...state,
                usersAtGroup: [],
            };
        }

        case ProfileActionTypes.RemoveUserFromGroup: {
            const preparedUsers = state.usersAtGroup.filter(user => user.id !== action.user.id);
            return {
                ...state,
                usersAtGroup: preparedUsers,
            };
        }

        case ProfileActionTypes.UpdateGroup: {
            return {
                ...state,
                createUpdateGroupPending: true,
            };
        }

        case ProfileActionTypes.UpdateGroupSuccessfully: {
            return {
                ...state,
                createUpdateGroupPending: false,
                usersAtGroup: [],
            };
        }

        case ProfileActionTypes.UpdateGroupFailed: {
            return {
                ...state,
                createUpdateGroupPending: false,
            };
        }

        case ProfileActionTypes.CreateNewGroup: {
            return {
                ...state,
                createUpdateGroupPending: true,
            };
        }

        case ProfileActionTypes.CreateNewGroupSuccessfully: {
            return {
                ...state,
                createUpdateGroupPending: false,
                usersAtGroup: [],
            };
        }

        case ProfileActionTypes.CreateNewGroupFailed: {
            return {
                ...state,
                createUpdateGroupPending: false,
            };
        }

        case ProfileActionTypes.UpdateGroupPost: {
            const groupPosts = state.groupPosts.map(post => {
                if (post.id === action.post.id) {
                    return {
                        ...post,
                        ...action.post,
                    };
                }

                return post;
            });
            return {
                ...state,
                groupPosts,
            };
        }

        default: {
            return state;
        }
    }
}
