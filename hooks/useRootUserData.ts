import { User } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { getFriendsData } from 'actions';
import { AppState } from 'reducers';
import { friends, friendsIsPending, getUserId, userDetailsState } from 'selectors';

export function useRootUserData(): [number, User[], boolean, () => void, User] {
    const rootUserId = useSelector((state: AppState) => getUserId(state));
    const rootUserDetails = useSelector((state: AppState) => userDetailsState(state, rootUserId));
    const userFriends = useSelector((state: AppState) => friends(state));
    const friendsPending = useSelector((state: AppState) => friendsIsPending(state));
    const dispatch = useDispatch();

    function getFriends() {
        dispatch(getFriendsData(rootUserId));
    }

    return [rootUserId, userFriends, friendsPending, getFriends, rootUserDetails];
}
