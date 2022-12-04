import { AvatarActionTypes, AvatarUnion } from 'app-constants/actionTypes';

export interface AvatarState {
    newAvatar: string | null;
}

const initialState: AvatarState = {
    newAvatar: null,
};

export function avatarReducer(state: AvatarState = initialState, action: AvatarUnion): AvatarState {
    switch (action.type) {
        case AvatarActionTypes.RemoveNewAvatar: {
            return {
                ...state,
                newAvatar: null,
            };
        }

        case AvatarActionTypes.SelectNewAvatar: {
            return {
                ...state,
                newAvatar: action.uri,
            };
        }

        default:
            return state;
    }
}
