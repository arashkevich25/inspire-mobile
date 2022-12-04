import { Comment } from '@inspire/types';
import { CommentActionTypes, CommentUnion } from 'app-constants/actionTypes';
import { SkipCounters } from 'app-constants/SkipCounters';

export interface CommentsState {
    addCommentPending: boolean;
}

const initialState: any = {
    addCommentPending: false,
};

export interface CommentsStateByPostId {
    comments: Comment[];
    commentsIsFetching: boolean;
    commentsHasFetched: boolean;
    loadMoreCommentsPending: boolean;
    skipCounter: number;
    loadCommentsIsAllowed: boolean;
}

export interface CommentsByPostIdState {
    [key: string]: CommentsStateByPostId;
}

export const initCommentsByPostId: CommentsStateByPostId = {
    comments: [],
    commentsIsFetching: false,
    commentsHasFetched: false,
    loadMoreCommentsPending: false,
    skipCounter: 0,
    loadCommentsIsAllowed: false,
};

export function comments(state = initialState, action: CommentUnion) {
    switch (action.type) {
        case CommentActionTypes.FetchCommentsById:
        case CommentActionTypes.UpdateByNewCommentById:
        case CommentActionTypes.LoadMoreComments:
        case CommentActionTypes.LoadMoreCommentsSuccess:
        case CommentActionTypes.FetchCommentsByIdFailed:
        case CommentActionTypes.FetchCommentsByIdSuccess: {
            return {
                ...state,
                [action.postId]: reducer(state[action.postId], action),
            };
        }

        case CommentActionTypes.AddComment: {
            return {
                ...state,
                addCommentPending: true,
            };
        }

        case CommentActionTypes.AddCommentSuccess: {
            return {
                ...state,
                addCommentPending: false,
            };
        }

        case CommentActionTypes.AddCommentFailed: {
            return {
                ...state,
                addCommentPending: false,
            };
        }

        default:
            return state;
    }
}

function reducer(state: CommentsStateByPostId = initCommentsByPostId, action: CommentUnion): CommentsStateByPostId {
    switch (action.type) {
        case CommentActionTypes.FetchCommentsById: {
            return {
                ...state,
                commentsIsFetching: true,
            };
        }
        case CommentActionTypes.FetchCommentsByIdSuccess: {
            return {
                ...state,
                commentsIsFetching: false,
                commentsHasFetched: true,
                comments: action.comments,
                skipCounter: SkipCounters.Comments,
                loadCommentsIsAllowed: action.comments.length === SkipCounters.Comments,
            };
        }

        case CommentActionTypes.LoadMoreComments: {
            return {
                ...state,
                loadMoreCommentsPending: true,
            };
        }

        case CommentActionTypes.LoadMoreCommentsSuccess: {
            return {
                ...state,
                loadMoreCommentsPending: false,
                skipCounter: state.skipCounter + SkipCounters.Comments,
                loadCommentsIsAllowed: action.comments.length === SkipCounters.Comments,
                comments: [...state.comments, ...action.comments],
            };
        }

        case CommentActionTypes.FetchCommentsByIdFailed: {
            return {
                ...state,
                commentsIsFetching: false,
                commentsHasFetched: false,
                comments: [],
            };
        }
        case CommentActionTypes.UpdateByNewCommentById: {
            return {
                ...state,
                comments: [...state.comments, action.comment],
            };
        }

        default:
            return state;
    }
}
