import { AppState } from 'reducers';
import { initPostByIdState } from 'reducers/postById';

function postByIdState(state: AppState, postId: string) {
    return state.postById[postId] || initPostByIdState;
}

export function fetchedPostById(state: AppState, postId: string) {
    return postByIdState(state, postId).post;
}

export function postByIdHasFetched(state: AppState, postId: string) {
    return postByIdState(state, postId).postHasFetched;
}

export function postByIdFetching(state: AppState, postId: string) {
    return postByIdState(state, postId).postIsFetching;
}
