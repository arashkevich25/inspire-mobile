import {
    Activity,
    ClubMember,
    Competition,
    GroupsWithUsers,
    SimplifiedPost,
    User,
    UserCategories,
    UserContactData,
} from '@inspire/types';
import { ProfileActionTypes, ProfileActionUnion } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { initActivities } from 'actions/activities';
import { fetchBlockedByUsersSuccess, fetchBlockedUsersSuccess } from 'actions/blockedUsers';
import { INIT_USER_DATA } from 'schemes/initUserData';
import { graphqlQueryWithPolicyByNetworkConnection, setBadgeByActivities } from 'tools';
import { UserInspiredCount } from 'types';

export function updateUserDetails(
    userDetails: User,
    userId: number,
    userContactData: UserContactData = {} as any,
): ProfileActionUnion {
    return {
        type: ProfileActionTypes.UpdateUserDetails,
        userId,
        userDetails,
        userContactData,
    };
}

export function initUserDetails(userId: number): any {
    return (dispatch: Dispatch) => {
        graphqlQueryWithPolicyByNetworkConnection<{
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
        }>({ query: INIT_USER_DATA, variables: { userId, userIdInt: userId } }).then(async ({ data }) => {
            dispatch(
                initUserDetailsSuccess(
                    userId,
                    data.user,
                    data.getSimplifiedPostsByUser,
                    data.getProductSimplifiedPostsByUser,
                    data.getFollowing,
                    data.getFollowers,
                    data.getGroups,
                    data.getUserInspiredCount,
                    data.userIsBlocked,
                    data.getUserCategories,
                    data.getUserClubs,
                    data.getUserContactData,
                    data.getCompletedCompetition,
                    data.getRecommendedPostsByUser,
                ),
            );
            dispatch(initActivities(data.getActivities));
            dispatch(fetchBlockedUsersSuccess(data.blockedUsers));
            dispatch(fetchBlockedByUsersSuccess(data.blockedByUsers));
            setBadgeByActivities(data.getActivities);
        });

        dispatch({
            type: ProfileActionTypes.InitUserDetails,
            userId,
        });
    };
}

export function initUserDetailsSuccess(
    userId: number,
    userDetails: User,
    posts: SimplifiedPost[],
    productPosts: SimplifiedPost[],
    subscribers: User[],
    followers: User[],
    groups: GroupsWithUsers[],
    inspiredCount: UserInspiredCount,
    isBlocked: boolean,
    userCategories: UserCategories,
    clubs: Partial<ClubMember[]>,
    userContactData: UserContactData,
    completedCompetition: Competition[],
    recommendedPosts: SimplifiedPost[],
) {
    return {
        type: ProfileActionTypes.InitUserDetailsSuccess,
        userId,
        userDetails,
        posts,
        productPosts,
        subscribers,
        recommendedPosts,
        followers,
        groups,
        inspiredCount: inspiredCount.count,
        isBlocked,
        categories: userCategories?.categories || [],
        clubs,
        userContactData,
        completedCompetition,
    };
}

export function removeProfilePostById(postId: string, userId: number) {
    return {
        type: ProfileActionTypes.RemovePostById,
        postId,
        userId,
    };
}
