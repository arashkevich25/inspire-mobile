import { AppState } from 'reducers';
import { AvatarState } from 'reducers/avatar';

function getAvatarState(state: AppState): AvatarState {
    return state.avatar;
}

export function getNewAvatar(state: AppState): string | null {
    return getAvatarState(state).newAvatar;
}
