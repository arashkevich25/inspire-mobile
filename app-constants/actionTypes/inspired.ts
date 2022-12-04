import { SimplifiedPost } from '@inspire/types';

export enum InspiredActionTypes {
    InspiredPosts = '[Inspired] get posts',
    InspiredPostsSuccess = '[Inspired] get posts successfully',
    InspiredPostsFailed = '[Inspired] get posts failed',
    InitInspiredPosts = '[Inspired] init inspired posts',

    LoadInspiredPosts = '[Inspired] load more inspired posts',
    LoadInspiredPostsSuccess = '[Inspired] load more inspired posts success',
    LoadInspiredPostsFailed = '[Inspired] load more inspired posts failed',
    RemovePostById = '[Inspired] remove post by id',

    MountFilters = '[Inspired] mount filters',
    UnmountFilters = '[Inspired] unmount filters',

    UpdateInspiredPosts = '[Inspired] update inspired posts',

    FollowUnfollowPost = '[Inspired] follow or unfollow post',
    FollowUnfollowPostSuccess = '[Inspired] follow or unfollow post success',
    FollowUnfollowPostFailed = '[Inspired] follow or unfollow post failed',
}

interface RemovePostById {
    type: typeof InspiredActionTypes.RemovePostById;
    postId: string;
}

interface FollowUnfollowPost {
    type: typeof InspiredActionTypes.FollowUnfollowPost;
}

interface FollowUnfollowPostSuccess {
    type: typeof InspiredActionTypes.FollowUnfollowPostSuccess;
}

interface FollowUnfollowPostFailed {
    type: typeof InspiredActionTypes.FollowUnfollowPostFailed;
}

interface MountFilters {
    type: typeof InspiredActionTypes.MountFilters;
}

interface UnmountFilters {
    type: typeof InspiredActionTypes.UnmountFilters;
}

interface InitInspiredPosts {
    type: typeof InspiredActionTypes.InitInspiredPosts;
    posts: SimplifiedPost[];
}

interface InspiredPosts {
    type: typeof InspiredActionTypes.InspiredPosts;
}

interface InspiredPostsSuccess {
    type: typeof InspiredActionTypes.InspiredPostsSuccess;
    posts: SimplifiedPost[];
}

interface InspiredPostsFailed {
    type: typeof InspiredActionTypes.InspiredPostsFailed;
}

interface UpdateInspiredPosts {
    type: typeof InspiredActionTypes.UpdateInspiredPosts;
    post: SimplifiedPost;
}

interface LoadInspiredPosts {
    type: typeof InspiredActionTypes.LoadInspiredPosts;
}

interface LoadInspiredPostsSuccess {
    type: typeof InspiredActionTypes.LoadInspiredPostsSuccess;
    posts: SimplifiedPost[];
}

interface LoadInspiredPostsFailed {
    type: typeof InspiredActionTypes.LoadInspiredPostsFailed;
}

export type InspiredUnion =
    | FollowUnfollowPost
    | FollowUnfollowPostSuccess
    | FollowUnfollowPostFailed
    | InspiredPosts
    | InspiredPostsSuccess
    | InspiredPostsFailed
    | UpdateInspiredPosts
    | LoadInspiredPosts
    | MountFilters
    | UnmountFilters
    | LoadInspiredPostsFailed
    | InitInspiredPosts
    | RemovePostById
    | LoadInspiredPostsSuccess;
