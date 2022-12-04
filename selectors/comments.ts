import { AppState } from 'reducers';
import { CommentsState, CommentsStateByPostId, initCommentsByPostId } from 'reducers/comments';

function commentState(appState: AppState): CommentsState {
    return appState.comments;
}

export function addCommentPending(appState: AppState) {
    return commentState(appState).addCommentPending;
}

function commentsByPostId(appState: AppState, postId: string): CommentsStateByPostId {
    return appState.comments[postId] || initCommentsByPostId;
}

export function postComments(appState: AppState, postId: string) {
    return commentsByPostId(appState, postId).comments;
}

export function postCommentsIsFetching(appState: AppState, postId: string) {
    return commentsByPostId(appState, postId).commentsIsFetching;
}

export function postCommentsHasFetched(appState: AppState, postId: string) {
    return commentsByPostId(appState, postId).commentsHasFetched;
}

export function loadMoreCommentsPending(appState: AppState, postId: string) {
    return commentsByPostId(appState, postId).loadMoreCommentsPending;
}

export function postCommentsLoadMoreIsAllowed(appState: AppState, postId: string) {
    return commentsByPostId(appState, postId).loadCommentsIsAllowed;
}

export function postCommentsSkipCounter(appState: AppState, postId: string) {
    return commentsByPostId(appState, postId).skipCounter;
}
