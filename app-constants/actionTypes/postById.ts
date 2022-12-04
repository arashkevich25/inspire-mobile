import { DetailsPost } from '@inspire/types';

export enum PostByIdAction {
    FetchPostById = '[Post by Id] fetch post by id',
    FetchPostByIdSuccess = '[Post by Id] fetch post by id success',
    FetchPostByIdFailed = '[Post by Id] fetch post by id failed',
    UpdatePostById = '[Post by Id] update post by id',
    IncreaseInspiredCountPostById = '[Post by Id] increase post inspired count by id',
    DecreaseInspiredCountPostById = '[Post by Id] decrease post inspired count by id',
    IncreaseRecommendCountPostById = '[Post by Id] increase recommend post count by id',
    DecreaseRecommendCountPostById = '[Post by Id] decrease recommend post count by id',
    UpdateRatingPostById = '[Post by Id] update rating post by id',
    RemovePostById = '[Post by Id] remove post by id',
    RemovePostByIdSuccess = '[Post by Id] remove post by id success',
}

interface RemovePostById {
    type: typeof PostByIdAction.RemovePostById;
    postId: string;
}

interface RemovePostByIdSuccess {
    type: typeof PostByIdAction.RemovePostByIdSuccess;
    postId: string;
}

interface FetchPostById {
    type: typeof PostByIdAction.FetchPostById;
    postId: string;
}

interface FetchPostByIdSuccess {
    type: typeof PostByIdAction.FetchPostByIdSuccess;
    post: DetailsPost;
    postId: string;
}

interface FetchPostByIdFailed {
    type: typeof PostByIdAction.FetchPostByIdFailed;
    postId: string;
}

interface UpdatePostById {
    type: typeof PostByIdAction.UpdatePostById;
    postId: string;
    post: DetailsPost;
}

interface IncreaseInspiredCountPostById {
    type: typeof PostByIdAction.IncreaseInspiredCountPostById;
    postId: string;
}

interface DecreaseInspiredCountPostById {
    type: typeof PostByIdAction.DecreaseInspiredCountPostById;
    postId: string;
}

interface IncreaseRecommendCountPostById {
    type: typeof PostByIdAction.IncreaseRecommendCountPostById;
    postId: string;
}

interface DecreaseRecommendCountPostById {
    type: typeof PostByIdAction.DecreaseRecommendCountPostById;
    postId: string;
}

interface UpdateRatingPostById {
    type: typeof PostByIdAction.UpdateRatingPostById;
    postId: string;
    userRating: number;
}

export type PostByIdActionUnion =
    | FetchPostById
    | FetchPostByIdSuccess
    | FetchPostByIdFailed
    | UpdatePostById
    | RemovePostById
    | IncreaseInspiredCountPostById
    | DecreaseInspiredCountPostById
    | UpdateRatingPostById
    | IncreaseRecommendCountPostById
    | DecreaseRecommendCountPostById
    | RemovePostByIdSuccess;
