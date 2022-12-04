import { Comment } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { addComment, getCommentsByPostId, loadMoreComments } from 'actions';
import { AppState } from 'reducers';
import {
    addCommentPending,
    loadMoreCommentsPending,
    postComments,
    postCommentsHasFetched,
    postCommentsIsFetching,
    postCommentsLoadMoreIsAllowed,
    postCommentsSkipCounter,
} from 'selectors';

interface UseCommentsOutput {
    addCommentHandle: (comment: string) => void;
    getComments: () => void;
    loadMore: () => void;
    loadMoreCommentsPendingState: boolean;
    addingCommentPending: boolean;
    commentsByPostId: Comment[];
    commentsByPostIdHasFetched: boolean;
    commentsByPostIdIsFetching: boolean;
}

export function useComments(postId: string): UseCommentsOutput {
    const dispatch = useDispatch();
    const addingCommentPending = useSelector((state: AppState) => addCommentPending(state));
    const commentsByPostIdSkipCounter = useSelector((state: AppState) => postCommentsSkipCounter(state, postId));
    const commentsByPostIdIsFetching = useSelector((state: AppState) => postCommentsIsFetching(state, postId));
    const commentsByPostIdHasFetched = useSelector((state: AppState) => postCommentsHasFetched(state, postId));
    const loadMoreCommentsPendingState = useSelector((state: AppState) => loadMoreCommentsPending(state, postId));
    const commentsByPostId = useSelector((state: AppState) => postComments(state, postId));
    const commentsByPostIdLoadMoreIsAllowed = useSelector((state: AppState) =>
        postCommentsLoadMoreIsAllowed(state, postId),
    );

    function addCommentHandle(comment: string) {
        dispatch(addComment(postId, comment));
    }

    function getComments() {
        dispatch(getCommentsByPostId(postId));
    }

    function loadMore() {
        if (commentsByPostIdLoadMoreIsAllowed && !loadMoreCommentsPendingState) {
            dispatch(loadMoreComments(postId, commentsByPostIdSkipCounter));
        }
    }

    return {
        addCommentHandle,
        addingCommentPending,
        getComments,
        loadMore,
        commentsByPostId,
        commentsByPostIdHasFetched,
        loadMoreCommentsPendingState,
        commentsByPostIdIsFetching,
    };
}
