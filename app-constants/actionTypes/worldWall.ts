import { SimplifiedPost } from '@inspire/types';

export enum WorldWallActions {
    GetWorldPosts = '[World wall] get posts',
    GetWorldPostsSuccess = '[World wall] get posts success',
    GetWorldPostsFailure = '[World wall] get posts failure',
    InitWorldPosts = '[World wall] init world posts',
    UpdateWorldPost = '[World wall] update post',
    RemovePostById = '[World wall] remove post',

    LoadWorldPosts = '[World wall] load more posts',
    LoadWorldPostsSuccess = '[World wall] load more posts success',
    LoadWorldPostsFailed = '[World wall] load more posts failed',

    MountFilters = '[World Wall] mount filters',
    UnmountFilters = '[World Wall] unmount filters',
}

interface MountFilters {
    type: WorldWallActions.MountFilters;
}

interface UnmountFilters {
    type: WorldWallActions.UnmountFilters;
}

interface GetWorldPosts {
    type: WorldWallActions.GetWorldPosts;
}

interface InitWorldPosts {
    type: WorldWallActions.InitWorldPosts;
    posts: SimplifiedPost[];
}

interface GetWorldPostsSuccess {
    type: WorldWallActions.GetWorldPostsSuccess;
    posts: SimplifiedPost[];
}

interface GetWorldPostsFailure {
    type: WorldWallActions.GetWorldPostsFailure;
}

interface RemovePostById {
    type: WorldWallActions.RemovePostById;
    postId: string;
}

interface LoadWorldPosts {
    type: WorldWallActions.LoadWorldPosts;
}

interface LoadWorldPostsSuccess {
    type: WorldWallActions.LoadWorldPostsSuccess;
    posts: SimplifiedPost[];
}

interface LoadWorldPostsFailed {
    type: WorldWallActions.LoadWorldPostsFailed;
}

interface UpdatePost {
    type: WorldWallActions.UpdateWorldPost;
    post: SimplifiedPost;
}

export type WorldWallActionsUnion =
    | GetWorldPosts
    | GetWorldPostsSuccess
    | GetWorldPostsFailure
    | LoadWorldPosts
    | MountFilters
    | UpdatePost
    | UnmountFilters
    | InitWorldPosts
    | RemovePostById
    | LoadWorldPostsSuccess
    | LoadWorldPostsFailed;
