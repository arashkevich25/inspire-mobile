import { AddClubMemberAdditionalDataDto, Club, ClubDetails, Competition, SimplifiedPost, User } from '@inspire/types';
import { ClubActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { client } from 'configs/graphql';
import { graphqlQueryWithPolicyByNetworkConnection, RollbarLogging } from 'tools';
import {
    GET_CLUB_BY_UNIQUE_NAME,
    GET_CLUB_BY_UNIQUE_NAME_NO_AUTH,
    GET_CLUB_COMPETITIONS,
    GET_CLUB_MEMBERS,
    JOIN_TO_CLUB,
    LEAVE_CLUB,
    SET_CLUB_MEMBER_ADDITIONAL_DATA,
} from '../schemes';
import { GET_CLUB_POSTS } from '../schemes/getClubPosts';

export function fetchClubById(uniqueName: string, authenticated: boolean) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ClubActions.GetClub,
            uniqueName,
        });

        graphqlQueryWithPolicyByNetworkConnection<{
            getClubDetailsByUniqueName: ClubDetails;
            getClubMembersByUniqueName: User[];
            getClubPostsByUniqueName: SimplifiedPost[];
            getClubDetailsNoAuth: ClubDetails;
            getClubMembersNoAuth: User[];
            getClubPostsNoAuth: SimplifiedPost[];
        }>({
            query: authenticated ? GET_CLUB_BY_UNIQUE_NAME : GET_CLUB_BY_UNIQUE_NAME_NO_AUTH,
            variables: {
                skip: 0,
                uniqueName,
            },
        })
            .then(response => {
                if (authenticated) {
                    dispatch(fetchClubByIdSuccess(response.data.getClubDetailsByUniqueName, uniqueName));
                    dispatch(fetchClubMembersSuccess(uniqueName, response.data.getClubMembersByUniqueName));
                    dispatch(fetchClubPostsSuccess(uniqueName, response.data.getClubPostsByUniqueName));
                    return;
                }
                dispatch(fetchClubByIdSuccess(response.data.getClubDetailsNoAuth, uniqueName));
                dispatch(fetchClubMembersSuccess(uniqueName, response.data.getClubMembersNoAuth));
                dispatch(fetchClubPostsSuccess(uniqueName, response.data.getClubPostsNoAuth));
            })
            .catch(error => {
                console.error('ERROR', error);
                RollbarLogging.reportErrorAtSpace(error, 'getClubByUniqueName');
                dispatch(fetchClubByIdFailure(uniqueName, error));
            });
    };
}

function fetchClubByIdSuccess(club: ClubDetails, uniqueName: string) {
    return {
        type: ClubActions.GetClubSuccess,
        club,
        uniqueName,
    };
}

function fetchClubByIdFailure(uniqueName: string, code: string) {
    return {
        type: ClubActions.GetClubFailure,
        uniqueName,
        code,
    };
}

export function fetchClubMembersById(uniqueName: string, skip: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ClubActions.GetClubMembers,
            uniqueName,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getClubMembers: User[] }>({
            query: GET_CLUB_MEMBERS,
            variables: {
                uniqueName,
                skip,
            },
        })
            .then(response => dispatch(fetchClubMembersSuccess(uniqueName, response.data.getClubMembers)))
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'getClubMembers');
                dispatch(fetchClubMembersFailure(uniqueName));
            });
    };
}

function fetchClubMembersSuccess(uniqueName: string, clubMembers: User[]) {
    return {
        type: ClubActions.GetClubMembersSuccess,
        clubMembers,
        uniqueName,
    };
}

function fetchClubMembersFailure(uniqueName: string) {
    return {
        type: ClubActions.GetClubMembersFailure,
        uniqueName,
    };
}

export function fetchClubCompetitionsById(clubId: number, uniqueName: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ClubActions.GetClubCompetitions,
            uniqueName,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getClubCompetitions: Club }>({
            query: GET_CLUB_COMPETITIONS,
            variables: {
                clubId,
            },
        })
            .then(response =>
                dispatch(fetchClubCompetitionsByIdSuccess(uniqueName, response.data.getClubCompetitions.competitions)),
            )
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'fetchClubCompetitionsById');
                dispatch(fetchClubCompetitionsByIdFailure(uniqueName));
            });
    };
}

function fetchClubCompetitionsByIdSuccess(uniqueName: string, competitions: Competition[]) {
    return {
        type: ClubActions.GetClubCompetitionsSuccess,
        competitions,
        uniqueName,
    };
}

function fetchClubCompetitionsByIdFailure(uniqueName: string) {
    return {
        type: ClubActions.GetClubCompetitionsFailure,
        uniqueName,
    };
}

export function joinToClub(clubId: number, uniqueName: string) {
    return (dispatch: any) => {
        client
            .mutate({ mutation: JOIN_TO_CLUB, variables: { clubId } })
            .then((response: any) => dispatch(fetchClubByIdSuccess(response.data.joinToClub, uniqueName)));
    };
}

export function updateAdditionalClubMemberData(variables: AddClubMemberAdditionalDataDto) {
    client
        .mutate({
            mutation: SET_CLUB_MEMBER_ADDITIONAL_DATA,
            variables,
        })
        .then();
}

export function fetchClubPosts(uniqueName: string, skip: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ClubActions.GetClubPosts,
            uniqueName,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getClubPosts: SimplifiedPost[] }>({
            query: GET_CLUB_POSTS,
            variables: {
                uniqueName,
                skip,
            },
        })
            .then(response => dispatch(fetchClubPostsSuccess(uniqueName, response.data.getClubPosts)))
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'fetchClubPosts');
                dispatch(fetchClubPostsFailed(uniqueName));
            });
    };
}

function fetchClubPostsSuccess(uniqueName: string, posts: SimplifiedPost[]) {
    return {
        type: ClubActions.GetClubPostsSuccess,
        uniqueName,
        posts,
    };
}

function fetchClubPostsFailed(uniqueName: string) {
    return {
        type: ClubActions.GetClubPostsFailure,
        uniqueName,
    };
}

export function loadMoreClubPosts(uniqueName: string, skip: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ClubActions.LoadMoreClubPosts,
            uniqueName,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getClubPosts: SimplifiedPost[] }>({
            query: GET_CLUB_POSTS,
            variables: {
                uniqueName,
                skip,
            },
        })
            .then(response => dispatch(loadMoreClubPostsSuccess(uniqueName, response.data.getClubPosts)))
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'loadMoreClubPosts');
                dispatch(loadMoreClubPostsFailed(uniqueName));
            });
    };
}

function loadMoreClubPostsSuccess(uniqueName: string, posts: SimplifiedPost[]) {
    return {
        type: ClubActions.LoadMoreClubPostsSuccess,
        uniqueName,
        posts,
    };
}

function loadMoreClubPostsFailed(uniqueName: string) {
    return {
        type: ClubActions.GetClubPostsFailure,
        uniqueName,
    };
}

export function leaveClub(clubId: number, uniqueName: string) {
    return (dispatch: any) => {
        client
            .mutate({ mutation: LEAVE_CLUB, variables: { clubId } })
            .then((response: any) => dispatch(fetchClubByIdSuccess(response.data.leaveClub, uniqueName)));
    };
}
