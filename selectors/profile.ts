import { Competition, UserClub, UserContactData } from '@inspire/types';

import { AppState } from 'reducers';
import { profileInitialState } from 'reducers/profile';

function getProfileState(state: AppState) {
    return state.profile;
}

function getProfileByUserId(state: AppState, userId: number) {
    return getProfileState(state)[userId] || profileInitialState;
}

export function postsByUserId(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).posts;
}

export function recommendPostsByUserId(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).recommendedPosts;
}

export function recommendPostsLoadMoreIsAllowed(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).recommendedPostsLoadMoreIsAllowed;
}

export function recommendPostsSkipCounter(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).recommendedPostsSkipCounter;
}

export function productPostsByUserId(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).productPosts;
}

export function loadMoreIsAllowed(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).postsLoadMoreIsAllowed;
}

export function productsLoadMoreIsAllowed(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).productPostsLoadMoreIsAllowed;
}

export function loadMorePostsHasFetched(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).postsHasFetched;
}

export function loadMorePostsIsPending(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).postsIsPending;
}

export function loadMorePostsSkipCounter(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).postsSkipCounter;
}

export function loadMoreProductPostsSkipCounter(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).productPostsSkipCounter;
}

export function userDetailsState(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).userDetails;
}

export function userContactData(state: AppState, userId: number): UserContactData {
    return getProfileByUserId(state, userId).contactData;
}

export function getGroups(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).groups;
}

export function getUserInspiredCount(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).inspiredCount;
}

export function getFollowers(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).followers;
}

export function getSubscribers(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).subscribers;
}

export function getInitUserDataFetched(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).initUserDataFetched;
}

export function getInitUserDataIsPending(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).initUserDataIsPending;
}

export function getUserIsBlockedState(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).isBlocked;
}

export function selectedUsersAtGroup(state: AppState) {
    return state.profile.usersAtGroup;
}

export function recommendOrDisrecommendPending(state: AppState): boolean {
    return state.profile.recommendOrDisrecommendUserPending;
}

export function createUpdateGroupPending(state: AppState) {
    return state.profile.createUpdateGroupPending;
}

export function getFollowUnFollowState(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).followUnFollowUserPending;
}

export function groupPostsFetchState(state: AppState) {
    return state.profile.fetchGroupPostsFetching;
}

export function groupPostsHasFetchState(state: AppState) {
    return state.profile.fetchGroupPostsFetched;
}

export function fetchedGroupPosts(state: AppState) {
    return state.profile.groupPosts;
}

export function getUserCategories(state: AppState, userId: number) {
    return getProfileByUserId(state, userId).categories;
}

export function getInitUserClubs(state: AppState, userId: number): UserClub[] {
    return getProfileByUserId(state, userId).clubs;
}

export function getCompletedCompetitions(state: AppState, userId: number): Competition[] {
    return getProfileByUserId(state, userId).completedCompetition;
}

export function updateUserCategoriesIsPending(state: AppState) {
    return state.profile.updateCategoriesPending;
}
