import { BasicPost } from '@inspire/types';
import { WallActionTypes, WallActionUnion } from 'app-constants/actionTypes';
import { SkipCounters } from 'app-constants/SkipCounters';

export interface WallState {
    posts: BasicPost[];
    postsIsPending: boolean;
    postsFetched: boolean;
    skipCounter: number;
    loadingPostsPending: boolean;
    loadingPostsFetched: boolean;
    loadMorePostsIsAllowed: boolean;
    filterIsMount: boolean;
}

const initialState: WallState = {
    posts: [],
    postsIsPending: false,
    postsFetched: false,
    skipCounter: 0,
    loadingPostsFetched: false,
    loadingPostsPending: false,
    loadMorePostsIsAllowed: false,
    filterIsMount: false,
};

export function wallReducer(state: WallState = initialState, actions: WallActionUnion): WallState {
    switch (actions.type) {
        case WallActionTypes.GetFollowersPosts: {
            return {
                ...state,
                postsIsPending: true,
                loadingPostsPending: false,
                loadingPostsFetched: false,
                postsFetched: false,
            };
        }

        case WallActionTypes.GetFollowersPostsSuccess: {
            return {
                ...state,
                posts: actions.posts,
                postsFetched: true,
                postsIsPending: false,
                skipCounter: SkipCounters.WallPosts,
                loadMorePostsIsAllowed: actions.posts.length === SkipCounters.WallPosts,
            };
        }

        case WallActionTypes.MountFilters: {
            return {
                ...state,
                filterIsMount: true,
            };
        }

        case WallActionTypes.UnmountFilters: {
            return {
                ...state,
                filterIsMount: false,
            };
        }

        case WallActionTypes.InitWallPosts: {
            return {
                ...state,
                posts: actions.posts,
                postsFetched: true,
                skipCounter: SkipCounters.WallPosts,
                loadMorePostsIsAllowed: actions.posts.length === SkipCounters.WallPosts,
            };
        }

        case WallActionTypes.UpdateCommentCounterWallPost: {
            return {
                ...state,
                posts: [
                    ...state.posts.map(post => {
                        if (post.id === actions.postId) {
                            return {
                                ...post,
                                commentsCount: post.commentsCount + 1,
                            };
                        }
                        return post;
                    }),
                ],
            };
        }

        case WallActionTypes.LoadFollowersPosts: {
            return {
                ...state,
                loadingPostsPending: true,
                loadingPostsFetched: false,
                skipCounter: state.skipCounter + SkipCounters.WallPosts,
            };
        }

        case WallActionTypes.LoadFollowersPostsFailed: {
            return {
                ...state,
                loadingPostsFetched: false,
            };
        }

        case WallActionTypes.LoadFollowersPostsSuccess: {
            return {
                ...state,
                posts: [...state.posts, ...actions.posts],
                loadingPostsFetched: true,
                loadingPostsPending: false,
                loadMorePostsIsAllowed: actions.posts.length === SkipCounters.WallPosts,
            };
        }

        case WallActionTypes.GetFollowersPostsFailure: {
            return {
                ...state,
                postsIsPending: false,
                postsFetched: false,
            };
        }

        case WallActionTypes.DecreaseRecommendCountWallPost: {
            const posts = state.posts.map(post => {
                if (post.id === actions.postId) {
                    return {
                        ...post,
                        recommends: post.recommends - 1,
                        userHasRecommend: false,
                    };
                }
                return post;
            });
            return {
                ...state,
                posts,
            };
        }

        case WallActionTypes.DecreaseInspiredCountWallPost: {
            const posts = state.posts.map(post => {
                if (post.id === actions.postId) {
                    return {
                        ...post,
                        inspirationCount: post.inspirationCount - 1,
                        isInspiredByUser: false,
                    };
                }
                return post;
            });
            return {
                ...state,
                posts,
            };
        }

        case WallActionTypes.IncreaseRecommendCountWallPost: {
            const posts = state.posts.map(post => {
                if (post.id === actions.postId) {
                    return {
                        ...post,
                        recommends: post.recommends + 1,
                        userHasRecommend: true,
                    };
                }
                return post;
            });
            return {
                ...state,
                posts,
            };
        }

        case WallActionTypes.IncreaseInspiredCountWallPost: {
            const posts = state.posts.map(post => {
                if (post.id === actions.postId) {
                    return {
                        ...post,
                        inspirationCount: post.inspirationCount + 1,
                        isInspiredByUser: true,
                    };
                }
                return post;
            });
            return {
                ...state,
                posts,
            };
        }

        case WallActionTypes.RemovePostById: {
            const posts = state.posts.filter(post => post.id !== actions.postId);
            return {
                ...state,
                posts,
            };
        }

        case WallActionTypes.UpdatePost: {
            const posts = state.posts.map(post => {
                if (post.id === actions.post.id) {
                    return {
                        ...post,
                        ...actions.post,
                    };
                }

                return post;
            });
            return {
                ...state,
                posts,
            };
        }

        default:
            return state;
    }
}
