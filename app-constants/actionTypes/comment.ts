import { Comment } from '@inspire/types';

export enum CommentActionTypes {
    AddComment = '[Comment] add new comment',
    AddCommentSuccess = '[Comment] add new comment success',
    AddCommentFailed = '[Comment] add new comment failed',

    FetchCommentsById = '[Comment] fetch comments by post id',
    FetchCommentsByIdSuccess = '[Comment] fetch comments by post id success',
    FetchCommentsByIdFailed = '[Comment] fetch comments by post id failed',

    LoadMoreComments = '[Comment] load more comments',
    LoadMoreCommentsSuccess = '[Comment] load more comments success',

    UpdateByNewCommentById = '[Comment] update by new comment by post id',
}

export interface UpdateByNewCommentById {
    type: typeof CommentActionTypes.UpdateByNewCommentById;
    postId: string;
    comment: Comment;
}

export interface LoadMoreComments {
    type: typeof CommentActionTypes.LoadMoreComments;
    postId: string;
}

export interface LoadMoreCommentsSuccess {
    type: typeof CommentActionTypes.LoadMoreCommentsSuccess;
    postId: string;
    comments: Comment[];
}

export interface FetchCommentsById {
    type: typeof CommentActionTypes.FetchCommentsById;
    postId: string;
}

export interface FetchCommentsByIdSuccess {
    type: typeof CommentActionTypes.FetchCommentsByIdSuccess;
    postId: string;
    comments: Comment[];
}

export interface FetchCommentsByIdFailed {
    type: typeof CommentActionTypes.FetchCommentsByIdFailed;
    postId: string;
}

export interface AddComment {
    type: typeof CommentActionTypes.AddComment;
}

export interface AddCommentSuccess {
    type: typeof CommentActionTypes.AddCommentSuccess;
}

export interface AddCommentFailed {
    type: typeof CommentActionTypes.AddCommentFailed;
}

export type CommentUnion =
    | AddComment
    | AddCommentSuccess
    | AddCommentFailed
    | UpdateByNewCommentById
    | FetchCommentsById
    | LoadMoreComments
    | LoadMoreCommentsSuccess
    | FetchCommentsByIdSuccess
    | FetchCommentsByIdFailed;
