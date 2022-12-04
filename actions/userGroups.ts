import { Group, SimplifiedPost, User } from '@inspire/types';
import { ProfileActionTypes } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { client } from 'configs/graphql';
import { CREATE_NEW_GROUP, GET_GROUP_POSTS, GET_GROUPS_BY_USER, LEAVE_GROUP, UPDATE_GROUP } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection, RollbarLogging } from 'tools';

export function getGroupsByUserId(userId: number): any {
    return (dispatch: Dispatch) => {
        graphqlQueryWithPolicyByNetworkConnection<{ getGroups: Group[] }>({
            query: GET_GROUPS_BY_USER,
        })
            .then(response => dispatch(getGroupsByUserIdSuccess(userId, response.data.getGroups)))
            .catch(error => dispatch(getGroupsByUserIdFailed(userId, error)));
    };
}

function getGroupsByUserIdSuccess(userId: number, groups: Group[]) {
    return {
        type: ProfileActionTypes.GetUserGroupsSuccess,
        userId,
        groups,
    };
}

function getGroupsByUserIdFailed(userId: number, error: string) {
    return {
        type: ProfileActionTypes.GetUserGroupsFailure,
        userId,
        error,
    };
}

export function addUsersToNewGroup(user: User) {
    return {
        type: ProfileActionTypes.AddUserToGroup,
        user,
    };
}

export function initUserInEditedGroup(users: User[]) {
    return {
        type: ProfileActionTypes.InitUsersAtEditedGroup,
        users,
    };
}

export function removeUserFromNewGroup(user: User) {
    return {
        type: ProfileActionTypes.RemoveUserFromGroup,
        user,
    };
}

export function createNewGroup(name: string, users: User[], avatarUri: string, userId: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ProfileActionTypes.CreateNewGroup,
        });

        client
            .mutate({ mutation: CREATE_NEW_GROUP(name, users, avatarUri) })
            .then(() => {
                dispatch(createNewGroupSuccessfully());
                dispatch(getGroupsByUserId(userId));
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'createNewGroup');
                dispatch(createNewGroupFailed());
            });
    };
}

export function createNewGroupSuccessfully() {
    return {
        type: ProfileActionTypes.CreateNewGroupSuccessfully,
    };
}

export function createNewGroupFailed() {
    return {
        type: ProfileActionTypes.CreateNewGroupFailed,
    };
}

export function updateAddedGroup(id: number, name: string, users: User[], avatarUri: string, userId: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ProfileActionTypes.UpdateGroup,
        });

        client
            .mutate({ mutation: UPDATE_GROUP(id, name, users, avatarUri) })
            .then(() => {
                dispatch(updateGroupSuccessfully());
                dispatch(getGroupsByUserId(userId));
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'updateAddedGroup');
                dispatch(updateGroupFailed());
            });
    };
}

export function updateGroupSuccessfully() {
    return {
        type: ProfileActionTypes.UpdateGroupSuccessfully,
    };
}

export function updateGroupFailed() {
    return {
        type: ProfileActionTypes.UpdateGroupFailed,
    };
}

export function removeUsersFromEditedGroup() {
    return {
        type: ProfileActionTypes.RemoveAllUsersFromGroup,
    };
}

export function fetchGroupPosts(groupId: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ProfileActionTypes.FetchGroupPosts,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getGroupSimplifiedPosts: SimplifiedPost[] }>({
            query: GET_GROUP_POSTS,
            variables: { groupId },
        })
            .then(({ data }) => dispatch(fetchGroupPostsSuccess(data.getGroupSimplifiedPosts)))
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'fetchGroupPosts');
                dispatch(fetchGroupPostsFailed());
            });
    };
}

function fetchGroupPostsSuccess(posts: SimplifiedPost[]) {
    return {
        type: ProfileActionTypes.FetchGroupPostsSuccess,
        posts,
    };
}

function fetchGroupPostsFailed() {
    return {
        type: ProfileActionTypes.FetchGroupPostsFailed,
    };
}

export function removeGroupPosts() {
    return {
        type: ProfileActionTypes.RemoveGroupPosts,
    };
}

export function leaveGroup(groupId: number, userId: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ProfileActionTypes.LeaveGroup,
        });

        client
            .mutate({ mutation: LEAVE_GROUP(groupId) })
            .then(() => {
                dispatch(leaveGroupSuccess());
                dispatch(getGroupsByUserId(userId));
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'leaveGroup');
                dispatch(leaveGroupFailed());
            });
    };
}

function leaveGroupSuccess() {
    return {
        type: ProfileActionTypes.LeaveGroupSuccess,
    };
}

function leaveGroupFailed() {
    return {
        type: ProfileActionTypes.LeaveGroupFailed,
    };
}

export function updateGroupPost(post: Partial<SimplifiedPost>) {
    return {
        type: ProfileActionTypes.UpdateGroupPost,
        post,
    };
}
