import { useDispatch, useSelector } from 'react-redux';

import { Alert } from 'react-native';

import { blockUser, unblockUser } from 'actions';
import { AppState } from 'reducers';
import { getBlockedByUsers, getBlockedUsers, getUserIsBlockedState } from 'selectors';
import I18n from 'tools/translate';

interface UseBlockedUsersOutput {
    blockUserHandle: () => void;
    unblockUserHandle: () => void;
    rootUserIsBlocked: () => boolean;
    userIsBlocked: () => boolean;
    isBlockedByUsers: () => boolean;
}

export function useBlockedUsers(userId: number): UseBlockedUsersOutput {
    const dispatch = useDispatch();
    const rootUserIsBlockedState = useSelector((appState: AppState) => getUserIsBlockedState(appState, userId));
    const blockedUsers = useSelector((appState: AppState) => getBlockedUsers(appState));
    const blockedByUsers = useSelector((appState: AppState) => getBlockedByUsers(appState));

    function blockUserHandle() {
        Alert.alert(I18n.t('blockedUsers.modal.title'), I18n.t('blockedUsers.modal.description'), [
            {
                text: I18n.t('choosePersonToGroup.dialog.buttons.cancel'),
                style: 'cancel',
            },
            {
                text: I18n.t('choosePersonToGroup.dialog.buttons.accept'),
                onPress: () => dispatch(blockUser(userId)),
            },
        ]);
    }

    function unblockUserHandle() {
        dispatch(unblockUser(userId));
    }

    function rootUserIsBlocked(): boolean {
        return rootUserIsBlockedState;
    }

    function userIsBlocked(): boolean {
        return !blockedUsers.map(user => user.id).includes(userId);
    }

    function isBlockedByUsers() {
        return !!blockedByUsers.map(user => user.id).includes(userId);
    }

    return {
        blockUserHandle,
        unblockUserHandle,
        rootUserIsBlocked,
        userIsBlocked,
        isBlockedByUsers,
    };
}
