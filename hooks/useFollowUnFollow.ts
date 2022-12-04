import { User } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { Alert } from 'react-native';

import { subscribeUser, unsubscribeUser } from 'actions';
import { AppState } from 'reducers';
import { getFollowUnFollowState } from 'selectors';
import I18n from 'tools/translate';

type UseFollowUnFollowOutPut = [boolean, () => void, () => void, boolean];

export function useFollowUnFollow(userId: number, rootDetails: User & any, showDialog = true): UseFollowUnFollowOutPut {
    const dispatch = useDispatch();
    const followUnfollowPending = useSelector((state: AppState) => getFollowUnFollowState(state, userId));
    const isFriend = rootDetails.followerIds.includes(Number(userId));
    function followUser() {
        dispatch(subscribeUser(userId, rootDetails.id));
    }

    function unFollowUser() {
        dispatch(unsubscribeUser(userId, rootDetails.id));
    }

    function stopFollowing() {
        if (showDialog) {
            Alert.alert(
                I18n.t('profile.texts.stopFollowingAlertTitle'),
                I18n.t('profile.texts.stopFollowingAlertDescription'),
                [
                    {
                        text: I18n.t('choosePersonToGroup.dialog.buttons.cancel'),
                        style: 'cancel',
                    },
                    {
                        text: I18n.t('choosePersonToGroup.dialog.buttons.accept'),
                        onPress: unFollowUser,
                    },
                ],
            );
        } else {
            unFollowUser();
        }
    }

    return [isFriend, followUser, stopFollowing, followUnfollowPending];
}
