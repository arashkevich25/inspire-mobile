import { ClubDetails, Competition, SimplifiedPost, User } from '@inspire/types';

import { ClubState, initialClubState } from '../reducers/club';
import { AppState } from '../reducers/index';

function clubState(state: AppState, unqiueName: string): ClubState {
    return state.club[unqiueName] || initialClubState;
}

export function clubIsFetching(state: AppState, unqiueName: string): boolean {
    return clubState(state, unqiueName).clubIsFetching;
}

export function getClubDetails(state: AppState, unqiueName: string): ClubDetails | null {
    return clubState(state, unqiueName).club;
}

export function getClubErrorCode(state: AppState, unqiueName: string): string {
    return clubState(state, unqiueName).errorCode;
}

export function clubHasFetched(state: AppState, unqiueName: string): boolean {
    return clubState(state, unqiueName).clubHasFetched;
}

export function clubMembersIsFetching(state: AppState, unqiueName: string): boolean {
    return clubState(state, unqiueName).clubMembersIsFetching;
}

export function getClubMembers(state: AppState, unqiueName: string): User[] {
    return clubState(state, unqiueName).clubMembers;
}

export function clubMembersHasFetched(state: AppState, unqiueName: string): boolean {
    return clubState(state, unqiueName).clubMembersHasFetched;
}

export function clubCompetitionsIsFetching(state: AppState, unqiueName: string): boolean {
    return clubState(state, unqiueName).clubCompetitionsIsFetching;
}

export function getClubCompetitions(state: AppState, unqiueName: string): Competition[] {
    return clubState(state, unqiueName).clubCompetitions;
}

export function clubCompetitionsHasFetched(state: AppState, unqiueName: string): boolean {
    return clubState(state, unqiueName).clubCompetitionsHasFetched;
}

export function clubMembersSkipCounter(state: AppState, unqiueName: string): number {
    return clubState(state, unqiueName).skipMembers;
}

export function getClubPosts(state: AppState, unqiueName: string): SimplifiedPost[] {
    return clubState(state, unqiueName).clubPosts;
}

export function getClubPostsIsFetching(state: AppState, unqiueName: string): boolean {
    return clubState(state, unqiueName).clubPostsIsFetching;
}

export function getClubPostsHasFetched(state: AppState, unqiueName: string): boolean {
    return clubState(state, unqiueName).clubPostsHasFetched;
}

export function getClubPostsSkipCounter(state: AppState, unqiueName: string): number {
    return clubState(state, unqiueName).clubPostsSkipCounter;
}

export function getClubPostsLoadMoreIsAllowed(state: AppState, unqiueName: string): boolean {
    return clubState(state, unqiueName).clubPostsLoadMoreIsAllowed;
}
