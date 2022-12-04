import { SimplifiedPost } from '@inspire/types';
import { PostsByTagActionTypes } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { GET_POSTS_BY_TAG } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection, RollbarLogging } from 'tools';

export function getPostsByTag(tag: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: PostsByTagActionTypes.FetchPosts,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getPostsSimplifiedByTags: SimplifiedPost[] }>({
            query: GET_POSTS_BY_TAG,
            variables: {
                tags: [tag],
                skip: 0,
            },
        })
            .then(({ data: { getPostsSimplifiedByTags } }) => {
                dispatch({
                    type: PostsByTagActionTypes.FetchPostsSuccess,
                    posts: getPostsSimplifiedByTags,
                    tag: tag,
                });
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'getPostsByTag');
                dispatch({
                    type: PostsByTagActionTypes.FetchPostsFailure,
                });
            });
    };
}

export function loadMorePostsByTag(tag: string, skip: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: PostsByTagActionTypes.LoadMorePosts,
            skip,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getPostsSimplifiedByTags: SimplifiedPost[] }>({
            query: GET_POSTS_BY_TAG,
            variables: {
                tags: [tag],
                skip,
            },
        }).then(({ data: { getPostsSimplifiedByTags } }) => {
            dispatch({
                type: PostsByTagActionTypes.LoadMorePostsSuccess,
                posts: getPostsSimplifiedByTags,
            });
        });
    };
}

export function resetStore() {
    return {
        type: PostsByTagActionTypes.ResetStore,
    };
}
