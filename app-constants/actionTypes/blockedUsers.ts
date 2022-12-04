import { User } from '@inspire/types';

export enum BlockUserActionTypes {
    BlockedUsers = '[Block user] blocked users',
    BlockedUsersSuccess = '[Block user] blocked users success',

    BlockedByUsers = '[Block user] blocked by users',
    BlockedByUsersSuccess = '[Block user] blocked by users success',

    BlockUser = '[Block user] block user',
    BlockUserSuccess = '[Block user] block user success',

    UnblockUser = '[Block user] unblock user',
    UnblockUserSuccess = '[Block user] unblock user success',
}

interface BlockedByUsers {
    type: typeof BlockUserActionTypes.BlockedByUsers;
}

interface BlockedByUsersSuccess {
    type: typeof BlockUserActionTypes.BlockedByUsersSuccess;
    blockedByUsers: User[];
}

interface BlockedUsers {
    type: typeof BlockUserActionTypes.BlockedUsers;
}

interface BlockedUsersSuccess {
    type: typeof BlockUserActionTypes.BlockedUsersSuccess;
    blockedUsers: User[];
}

interface BlockUsers {
    type: typeof BlockUserActionTypes.BlockUser;
}

interface UnblockUser {
    type: typeof BlockUserActionTypes.UnblockUser;
}

interface BlockUserSuccess {
    type: typeof BlockUserActionTypes.BlockUserSuccess;
    blockedUsers: User[];
}

interface UnblockUserSuccess {
    type: typeof BlockUserActionTypes.UnblockUserSuccess;
    blockedUsers: User[];
}

export type BlockedUsersUnion =
    | BlockedUsers
    | BlockedUsersSuccess
    | BlockUsers
    | UnblockUser
    | BlockedByUsers
    | BlockedByUsersSuccess
    | BlockUserSuccess
    | UnblockUserSuccess;
