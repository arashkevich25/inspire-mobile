import { ClubDetails, Competition, SimplifiedPost, User } from '@inspire/types';
import { ClubActions, ClubUnion } from 'app-constants/actionTypes';
import { SkipCounters } from '../app-constants/SkipCounters';

export interface ClubState {
    club: ClubDetails | null;
    clubIsFetching: boolean;
    clubHasFetched: boolean;
    clubMembers: User[];
    clubMembersIsFetching: boolean;
    clubMembersHasFetched: boolean;
    skipMembers: number;
    clubCompetitions: Competition[];
    clubCompetitionsIsFetching: boolean;
    clubCompetitionsHasFetched: boolean;
    clubPosts: SimplifiedPost[];
    clubPostsSkipCounter: number;
    clubPostsLoadMoreIsAllowed: boolean;
    clubPostsIsFetching: boolean;
    clubPostsHasFetched: boolean;
    errorCode: string;
}

export const initialClubState: ClubState = {
    clubIsFetching: false,
    clubHasFetched: false,
    club: null,
    clubMembers: [],
    clubMembersIsFetching: false,
    clubMembersHasFetched: false,
    skipMembers: 0,
    clubCompetitions: [],
    errorCode: '',
    clubCompetitionsIsFetching: false,
    clubCompetitionsHasFetched: false,
    clubPosts: [],
    clubPostsSkipCounter: 0,
    clubPostsLoadMoreIsAllowed: false,
    clubPostsIsFetching: false,
    clubPostsHasFetched: false,
};

export interface ClubStateByUniqueName {
    [key: string]: ClubState;
}

function clubByIdReducer(state: ClubState = initialClubState, action: ClubUnion): ClubState {
    switch (action.type) {
        case ClubActions.GetClubPosts:
            return {
                ...state,
                clubPostsIsFetching: true,
            };

        case ClubActions.GetClubPostsSuccess:
            return {
                ...state,
                clubPostsIsFetching: false,
                clubPostsHasFetched: true,
                clubPosts: action.posts,
                clubPostsSkipCounter: SkipCounters.UserPosts,
                clubPostsLoadMoreIsAllowed: action.posts.length === SkipCounters.WallPosts,
            };

        case ClubActions.LoadMoreClubPosts:
            return {
                ...state,
                clubPostsIsFetching: true,
            };

        case ClubActions.LoadMoreClubPostsSuccess:
            return {
                ...state,
                clubPostsIsFetching: false,
                clubPosts: [...state.clubPosts, ...action.posts],
                clubPostsSkipCounter: state.clubPostsSkipCounter + SkipCounters.UserPosts,
                clubPostsLoadMoreIsAllowed: action.posts.length === SkipCounters.WallPosts,
            };

        case ClubActions.GetClubPostsFailure:
            return {
                ...state,
                clubPostsIsFetching: false,
                clubPostsHasFetched: false,
            };

        case ClubActions.GetClub:
            return {
                ...state,
                errorCode: '',
                clubIsFetching: true,
            };

        case ClubActions.GetClubSuccess:
            return {
                ...state,
                clubIsFetching: false,
                clubHasFetched: true,
                club: action.club,
            };

        case ClubActions.GetClubFailure:
            return {
                ...state,
                errorCode: action.code,
                clubIsFetching: false,
                clubHasFetched: false,
            };

        case ClubActions.GetClubMembers:
            return {
                ...state,
                clubMembersIsFetching: true,
            };

        case ClubActions.GetClubMembersSuccess:
            return {
                ...state,
                clubMembersIsFetching: false,
                clubMembersHasFetched: true,
                clubMembers: action.clubMembers,
                skipMembers: SkipCounters.Users,
            };

        case ClubActions.GetClubMembersFailure:
            return {
                ...state,
                clubMembersIsFetching: false,
                clubMembersHasFetched: false,
            };

        case ClubActions.GetClubCompetitions:
            return {
                ...state,
                clubCompetitionsIsFetching: true,
            };

        case ClubActions.GetClubCompetitionsSuccess:
            return {
                ...state,
                clubCompetitionsIsFetching: false,
                clubCompetitionsHasFetched: true,
                clubCompetitions: action.competitions,
            };

        case ClubActions.GetClubCompetitionsFailure:
            return {
                ...state,
                clubCompetitionsIsFetching: false,
                clubCompetitionsHasFetched: false,
            };

        default:
            return state;
    }
}

export function clubReducer(state: any = {}, action: ClubUnion): ClubStateByUniqueName {
    switch (action.type) {
        case ClubActions.GetClub:
        case ClubActions.GetClubSuccess:
        case ClubActions.GetClubFailure:
        case ClubActions.GetClubMembers:
        case ClubActions.GetClubMembersSuccess:
        case ClubActions.GetClubMembersFailure:
        case ClubActions.GetClubCompetitions:
        case ClubActions.GetClubPosts:
        case ClubActions.GetClubPostsSuccess:
        case ClubActions.GetClubPostsFailure:
        case ClubActions.GetClubCompetitionsFailure:
        case ClubActions.GetClubCompetitionsSuccess:
        case ClubActions.LoadMoreClubPosts:
        case ClubActions.LoadMoreClubPostsSuccess:
            return {
                ...state,
                [action.uniqueName]: clubByIdReducer(state[action.uniqueName], action),
            };

        default:
            return state;
    }
}
