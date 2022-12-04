import { GroupsWithUsers } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { getGroupsByUserId, selectGroup, unselectGroup } from 'actions';
import { AppState } from 'reducers';
import { getGroups, getUserId, selectedGroups } from 'selectors';

export function useGroups(): [GroupsWithUsers[], () => void, number[], (id: number) => void] {
    const userId = useSelector((state: AppState) => getUserId(state));
    const userGroups = useSelector((state: AppState) => getGroups(state, userId));
    const chosenGroups = useSelector((state: AppState) => selectedGroups(state));
    const dispatch = useDispatch();

    function addGroup(groupId: number) {
        if (chosenGroups.includes(groupId)) {
            dispatch(unselectGroup(groupId));
            return;
        }
        dispatch(selectGroup(groupId));
    }

    function getGroupsHandle() {
        dispatch(getGroupsByUserId(userId));
    }

    return [userGroups, getGroupsHandle, chosenGroups, addGroup];
}
