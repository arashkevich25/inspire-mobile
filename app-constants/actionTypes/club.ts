import { ClubDetails, Competition, SimplifiedPost, User } from '@inspire/types';

export enum ClubActions {
    GetClub = '[Club] get club',
    GetClubSuccess = '[Club] get club success',
    GetClubFailure = '[Club] get club failure',

    GetClubMembers = '[Club] get club members',
    GetClubMembersSuccess = '[Club] get club members success',
    GetClubMembersFailure = '[Club] get club members failure',

    GetClubCompetitions = '[Club] get club competitions',
    GetClubCompetitionsSuccess = '[Club] get club competitions success',
    GetClubCompetitionsFailure = '[Club] get club competitions failure',

    GetClubPosts = '[Club] get club posts',
    GetClubPostsSuccess = '[Club] get club posts success',
    GetClubPostsFailure = '[Club] get club posts failure',
    LoadMoreClubPosts = '[Club] load more posts',
    LoadMoreClubPostsSuccess = '[Club] load more club posts success',
}

interface GetClubMembers {
    type: typeof ClubActions.GetClubMembers;
    uniqueName: string;
}

interface GetClubMembersSuccess {
    type: typeof ClubActions.GetClubMembersSuccess;
    clubMembers: User[];
    uniqueName: string;
}

interface GetClubMembersFailure {
    type: typeof ClubActions.GetClubMembersFailure;
    uniqueName: string;
}

interface GetClub {
    type: typeof ClubActions.GetClub;
    uniqueName: string;
}

interface GetClubSuccess {
    type: typeof ClubActions.GetClubSuccess;
    club: ClubDetails;
    uniqueName: string;
}

interface GetClubFailure {
    type: typeof ClubActions.GetClubFailure;
    uniqueName: string;
    code: string;
}

interface GetClubPosts {
    type: typeof ClubActions.GetClubPosts;
    uniqueName: string;
}

interface GetClubPostsSuccess {
    type: typeof ClubActions.GetClubPostsSuccess;
    posts: SimplifiedPost[];
    uniqueName: string;
}

interface GetClubPostsFailure {
    type: typeof ClubActions.GetClubPostsFailure;
    uniqueName: string;
}

interface LoadMoreClubPosts {
    type: typeof ClubActions.LoadMoreClubPosts;
    uniqueName: string;
}

interface LoadMoreClubPostsSuccess {
    type: typeof ClubActions.LoadMoreClubPostsSuccess;
    uniqueName: string;
    posts: SimplifiedPost[];
}

interface GetClubCompetitions {
    type: typeof ClubActions.GetClubCompetitions;
    uniqueName: string;
}

interface GetClubCompetitionsSuccess {
    type: typeof ClubActions.GetClubCompetitionsSuccess;
    competitions: Competition[];
    uniqueName: string;
}

interface GetClubCompetitionsFailure {
    type: typeof ClubActions.GetClubCompetitionsFailure;
    uniqueName: string;
}

export type ClubUnion =
    | GetClub
    | GetClubSuccess
    | GetClubFailure
    | GetClubPosts
    | GetClubPostsSuccess
    | GetClubPostsFailure
    | LoadMoreClubPosts
    | LoadMoreClubPostsSuccess
    | GetClubMembers
    | GetClubCompetitions
    | GetClubCompetitionsSuccess
    | GetClubCompetitionsFailure
    | GetClubMembersSuccess
    | GetClubMembersFailure;
