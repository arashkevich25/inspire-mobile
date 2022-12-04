import { SimplifiedPost } from '@inspire/types';
import { WorldWallActions, WorldWallActionsUnion } from 'app-constants/actionTypes';
import { SkipCounters } from 'app-constants/SkipCounters';

export interface WorldWallState {
    posts: SimplifiedPost[];
    postsIsPending: boolean;
    postsFetched: boolean;
    skipCounter: number;
    loadPostsPending: boolean;
    loadMoreIsAllowed: boolean;
    filterIsMount: boolean;
}

const initialState: WorldWallState = {
    posts: [],
    postsIsPending: false,
    postsFetched: false,
    skipCounter: 0,
    loadPostsPending: false,
    loadMoreIsAllowed: false,
    filterIsMount: false,
};

export function worldWallReducer(state: WorldWallState = initialState, action: WorldWallActionsUnion): WorldWallState {
    switch (action.type) {
        case WorldWallActions.GetWorldPosts: {
            return {
                ...state,
                postsIsPending: true,
                skipCounter: SkipCounters.WorldWall,
                loadMoreIsAllowed: true,
            };
        }

        case WorldWallActions.GetWorldPostsSuccess: {
            return {
                ...state,
                posts: action.posts,
                postsIsPending: false,
                postsFetched: true,
                loadMoreIsAllowed: action.posts.length === SkipCounters.WorldWall,
            };
        }

        case WorldWallActions.InitWorldPosts: {
            return {
                ...state,
                posts: action.posts,
                postsFetched: true,
                skipCounter: SkipCounters.WorldWall,
                loadMoreIsAllowed: true,
            };
        }

        case WorldWallActions.RemovePostById: {
            const posts = state.posts.filter(post => post.id !== action.postId);
            return {
                ...state,
                posts,
            };
        }

        case WorldWallActions.MountFilters: {
            return {
                ...state,
                filterIsMount: true,
            };
        }

        case WorldWallActions.UnmountFilters: {
            return {
                ...state,
                filterIsMount: false,
            };
        }

        case WorldWallActions.GetWorldPostsFailure: {
            return {
                ...state,
                postsFetched: false,
                postsIsPending: false,
            };
        }

        case WorldWallActions.LoadWorldPosts: {
            return {
                ...state,
                loadPostsPending: true,
            };
        }

        case WorldWallActions.LoadWorldPostsSuccess: {
            return {
                ...state,
                loadPostsPending: false,
                posts: [...state.posts, ...action.posts],
                skipCounter: state.skipCounter + SkipCounters.WorldWall,
                loadMoreIsAllowed: action.posts.length === SkipCounters.WorldWall,
            };
        }

        case WorldWallActions.UpdateWorldPost: {
            const posts = state.posts.map(post => {
                if (post.id === action.post.id) {
                    return {
                        ...post,
                        ...action.post,
                    };
                }

                return post;
            });
            return {
                ...state,
                posts,
            };
        }

        case WorldWallActions.LoadWorldPostsFailed: {
            return {
                ...state,
                loadPostsPending: false,
            };
        }

        default:
            return state;
    }
}
