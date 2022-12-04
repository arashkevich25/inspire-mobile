import { User } from '@inspire/types';

export enum FriendActions {
    GetFriendsData = '[Friends] get friends data',
    GetFriendsDataSuccess = '[Friends] get friends data success',
    GetFriendsDataFailed = '[Friends] get friends data failed',

    InitFriends = '[Friends] init friends',
}

export interface GetFriendsData {
    type: typeof FriendActions.GetFriendsData;
}

export interface InitFriendsData {
    type: typeof FriendActions.InitFriends;
    friendsData: User[];
}

export interface GetFriendsDataSuccess {
    type: typeof FriendActions.GetFriendsDataSuccess;
    friendsData: User[];
}

export interface GetFriendsDataFailed {
    type: typeof FriendActions.GetFriendsDataFailed;
}

export type FriendsUnion = GetFriendsData | GetFriendsDataSuccess | GetFriendsDataFailed | InitFriendsData;
