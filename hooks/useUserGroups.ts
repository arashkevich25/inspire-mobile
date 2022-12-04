import { GroupsWithUsers, SimplifiedPost, User } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import {
    addUsersToNewGroup,
    createNewGroup,
    fetchGroupPosts,
    initUserInEditedGroup,
    leaveGroup,
    removeUserFromNewGroup,
    updateAddedGroup,
} from 'actions';
import { AppState } from 'reducers';
import {
    createUpdateGroupPending,
    fetchedGroupPosts,
    getGroups,
    getInitUserDataFetched,
    getInitUserDataIsPending,
    groupPostsFetchState,
    selectedUsersAtGroup,
} from 'selectors';

interface UseUserGroupsOutput {
    userGroups: GroupsWithUsers[];
    userGroupsHasFetched: boolean;
    userGroupsFetching: boolean;
    usersForGroup: User[];
    createNewGroupIsPending: boolean;
    addUserToGroup: (user: User) => void;
    removeUserFromGroup: (user: User) => void;
    createGroup: (name: string, users: User[], avatarUri: string) => void;
    updateGroup: (id: number, name: string, users: User[], avatarUri: string) => void;
    groupPosts: SimplifiedPost[];
    groupPostsFetching: boolean;
    leaveGroupFromGroup: (groupId: number) => void;
    fetchPosts: (groupId: number) => void;
}

export function useUserGroups(userId: number, editedGroup: GroupsWithUsers | null = null): UseUserGroupsOutput {
    const userGroups = useSelector((state: AppState) => getGroups(state, userId));
    const userGroupsHasFetched = useSelector((state: AppState) => getInitUserDataFetched(state, userId));
    const userGroupsFetching = useSelector((state: AppState) => getInitUserDataIsPending(state, userId));
    const usersForGroup = useSelector((state: AppState) => selectedUsersAtGroup(state));
    const groupPostsFetching = useSelector((state: AppState) => groupPostsFetchState(state));
    const groupPosts = useSelector((state: AppState) => fetchedGroupPosts(state));
    const createNewGroupIsPending = useSelector((state: AppState) => createUpdateGroupPending(state));
    const dispatch = useDispatch();

    if (editedGroup && !usersForGroup.length) {
        dispatch(initUserInEditedGroup(editedGroup.users));
        dispatch(fetchGroupPosts(editedGroup.group.id));
    }

    function fetchPosts(groupId: number) {
        dispatch(fetchGroupPosts(groupId));
    }

    function addUserToGroup(user: User) {
        dispatch(addUsersToNewGroup(user));
    }

    function removeUserFromGroup(user: User) {
        dispatch(removeUserFromNewGroup(user));
    }

    function createGroup(name: string, users: User[], avatarUri: string) {
        dispatch(createNewGroup(name, users, avatarUri, userId));
    }

    function updateGroup(id: number, name: string, users: User[], avatarUri: string) {
        dispatch(updateAddedGroup(id, name, users, avatarUri, userId));
    }

    function leaveGroupFromGroup(groupId: number) {
        dispatch(leaveGroup(groupId, userId));
    }

    return {
        userGroups,
        userGroupsHasFetched,
        userGroupsFetching,
        usersForGroup,
        createNewGroupIsPending,
        addUserToGroup,
        removeUserFromGroup,
        createGroup,
        updateGroup,
        groupPosts,
        groupPostsFetching,
        leaveGroupFromGroup,
        fetchPosts,
    };
}
