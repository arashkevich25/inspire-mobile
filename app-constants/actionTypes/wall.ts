import { BasicPost } from '@inspire/types';

export enum WallActionTypes {
    GetFollowersPosts = '[Wall] get followers posts',
    GetFollowersPostsSuccess = '[Wall] get followers posts success',
    GetFollowersPostsFailure = '[Wall] get followers posts failure',
    InitWallPosts = '[Wall] init wall posts',

    LoadFollowersPosts = '[Wall] load new posts',
    LoadFollowersPostsSuccess = '[Wall] load new posts success',
    LoadFollowersPostsFailed = '[Wall] load new posts failed',

    MountFilters = '[Wall] mount filters',
    UnmountFilters = '[Wall] unmount filters',

    UpdatePost = '[Wall] update post',
    IncreaseInspiredCountWallPost = '[Wall] increase inspired count wall post',
    IncreaseRecommendCountWallPost = '[Wall] increase recommend count wall post',
    UpdateCommentCounterWallPost = '[Wall] update comment counter',
    DecreaseInspiredCountWallPost = '[Wall] decrease inspired count wall post',
    DecreaseRecommendCountWallPost = '[Wall] decrease recommend count wall post',
    RemovePostById = '[Wall] remove post',
}

interface UpdateCommentCounterWallPost {
    type: WallActionTypes.UpdateCommentCounterWallPost;
    postId: string;
}

interface MountFilters {
    type: WallActionTypes.MountFilters;
}

interface IncreaseInspiredCountWallPost {
    type: WallActionTypes.IncreaseInspiredCountWallPost;
    postId: string;
}

interface DecreaseInspiredCountWallPost {
    type: WallActionTypes.DecreaseInspiredCountWallPost;
    postId: string;
}

interface IncreaseRecommendCountWallPost {
    type: WallActionTypes.IncreaseRecommendCountWallPost;
    postId: string;
}

interface DecreaseRecommendCountWallPost {
    type: WallActionTypes.DecreaseRecommendCountWallPost;
    postId: string;
}

interface UnmountFilters {
    type: WallActionTypes.UnmountFilters;
}

interface InitWallPosts {
    type: WallActionTypes.InitWallPosts;
    posts: BasicPost[];
}

interface UpdatePost {
    type: WallActionTypes.UpdatePost;
    post: Partial<BasicPost>;
}

interface LoadNewFollowersPosts {
    type: WallActionTypes.LoadFollowersPosts;
    skip: number;
}

interface LoadNewFollowersPostsSuccess {
    type: WallActionTypes.LoadFollowersPostsSuccess;
    posts: BasicPost[];
    skipCounter: number;
}

interface LoadNewFollowersPostsFailed {
    type: WallActionTypes.LoadFollowersPostsFailed;
}

interface GetFollowersPosts {
    type: WallActionTypes.GetFollowersPosts;
}

interface GetFollowersPostsSuccess {
    type: WallActionTypes.GetFollowersPostsSuccess;
    posts: BasicPost[];
}

interface GetFollowersPostsFailure {
    type: WallActionTypes.GetFollowersPostsFailure;
}

interface RemovePostById {
    type: WallActionTypes.RemovePostById;
    postId: string;
}

export type WallActionUnion =
    | UpdatePost
    | GetFollowersPosts
    | InitWallPosts
    | MountFilters
    | RemovePostById
    | IncreaseRecommendCountWallPost
    | DecreaseRecommendCountWallPost
    | UnmountFilters
    | GetFollowersPostsSuccess
    | IncreaseInspiredCountWallPost
    | DecreaseInspiredCountWallPost
    | UpdateCommentCounterWallPost
    | GetFollowersPostsFailure
    | LoadNewFollowersPosts
    | LoadNewFollowersPostsSuccess
    | LoadNewFollowersPostsFailed;
