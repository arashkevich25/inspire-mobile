import { User } from '@inspire/types';
import { BlockedUsersUnion, BlockUserActionTypes } from 'app-constants/actionTypes';

export interface BlockedUsersState {
    blockedBydUsers: User[];
    blockedUsers: User[];
    fetchingBlockedUsers: boolean;
    fetchingBlockedByUsers: boolean;
    blockUnblockPending: boolean;
}

const initialState: BlockedUsersState = {
    blockedUsers: [],
    blockedBydUsers: [],
    fetchingBlockedUsers: false,
    fetchingBlockedByUsers: false,
    blockUnblockPending: false,
};

export function blockedUsersReducer(
    state: BlockedUsersState = initialState,
    action: BlockedUsersUnion,
): BlockedUsersState {
    switch (action.type) {
        case BlockUserActionTypes.BlockedUsers: {
            return {
                ...state,
                fetchingBlockedUsers: true,
            };
        }

        case BlockUserActionTypes.BlockedUsersSuccess: {
            return {
                ...state,
                fetchingBlockedUsers: false,
                blockedUsers: action.blockedUsers,
            };
        }

        case BlockUserActionTypes.BlockedByUsers: {
            return {
                ...state,
                fetchingBlockedByUsers: true,
            };
        }

        case BlockUserActionTypes.BlockedByUsersSuccess: {
            return {
                ...state,
                fetchingBlockedByUsers: false,
                blockedBydUsers: action.blockedByUsers,
            };
        }

        case BlockUserActionTypes.UnblockUser:
        case BlockUserActionTypes.BlockUser: {
            return {
                ...state,
                blockUnblockPending: true,
            };
        }

        case BlockUserActionTypes.BlockUserSuccess:
        case BlockUserActionTypes.UnblockUserSuccess: {
            return {
                ...state,
                blockUnblockPending: false,
                blockedUsers: action.blockedUsers,
            };
        }

        default:
            return state;
    }
}
