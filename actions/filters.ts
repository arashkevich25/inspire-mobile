import { BasicPost, PostCoordinates, PostLocationFilter, SimplifiedPost } from '@inspire/types';
import { FiltersActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { initInspiredPosts } from 'actions/inspired';
import { initWallPosts } from 'actions/wall';
import { initWorldPosts } from 'actions/worldWall';
import { GET_POST_COORDINATES, INIT_POSTS, INIT_POSTS_AUTHED_USER } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection, RollbarLogging } from 'tools';

export function setCategoryFilter(categoryId: number, city: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: FiltersActions.SetCategoryFilter,
            selectedCategory: categoryId,
        });

        graphqlQueryWithPolicyByNetworkConnection<{
            getWorldWallSimplifiedPosts: SimplifiedPost[];
            getWallBasicPosts: BasicPost[];
            getInspiredSimplifiedPosts: SimplifiedPost[];
        }>({
            query: INIT_POSTS,
            variables: {
                categoryId,
                city,
            },
        })
            .then(({ data: { getWorldWallSimplifiedPosts, getWallBasicPosts, getInspiredSimplifiedPosts } }) =>
                hydrateData(getWallBasicPosts, getWorldWallSimplifiedPosts, getInspiredSimplifiedPosts)(dispatch),
            )
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'setCategoryFilter');
            });
    };
}

export function setCategoryFilterAuthedUser(categoryId: number, city: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: FiltersActions.SetCategoryFilter,
            selectedCategory: categoryId,
        });

        graphqlQueryWithPolicyByNetworkConnection<{
            getWorldWallSimplifiedPostsAuthedUser: SimplifiedPost[];
            getWallBasicPosts: BasicPost[];
            getInspiredSimplifiedPosts: SimplifiedPost[];
        }>({
            query: INIT_POSTS_AUTHED_USER,
            variables: {
                categoryId,
                city,
            },
        })
            .then(
                ({ data: { getWorldWallSimplifiedPostsAuthedUser, getWallBasicPosts, getInspiredSimplifiedPosts } }) =>
                    hydrateData(
                        getWallBasicPosts,
                        getWorldWallSimplifiedPostsAuthedUser,
                        getInspiredSimplifiedPosts,
                    )(dispatch),
            )
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'setCategoryFilterAuthedUser');
            });
    };
}

export function removeCategoryFilter(city: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: FiltersActions.RemoveCategoryFilter,
        });

        graphqlQueryWithPolicyByNetworkConnection<{
            getWorldWallSimplifiedPosts: SimplifiedPost[];
            getWallBasicPosts: BasicPost[];
            getInspiredSimplifiedPosts: SimplifiedPost[];
        }>({
            query: INIT_POSTS,
            variables: {
                selectedCategory: 0,
                city,
            },
        })
            .then(({ data: { getWorldWallSimplifiedPosts, getWallBasicPosts, getInspiredSimplifiedPosts } }) =>
                hydrateData(getWallBasicPosts, getWorldWallSimplifiedPosts, getInspiredSimplifiedPosts)(dispatch),
            )
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'removeCategoryFilter');
            });
    };
}

export function removeCategoryFilterAuthedUser(city: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: FiltersActions.RemoveCategoryFilter,
        });

        graphqlQueryWithPolicyByNetworkConnection<{
            getWorldWallSimplifiedPostsAuthedUser: SimplifiedPost[];
            getWallBasicPosts: BasicPost[];
            getInspiredSimplifiedPosts: SimplifiedPost[];
        }>({
            query: INIT_POSTS_AUTHED_USER,
            variables: {
                selectedCategory: 0,
                city,
            },
        })
            .then(
                ({ data: { getWorldWallSimplifiedPostsAuthedUser, getWallBasicPosts, getInspiredSimplifiedPosts } }) =>
                    hydrateData(
                        getWallBasicPosts,
                        getWorldWallSimplifiedPostsAuthedUser,
                        getInspiredSimplifiedPosts,
                    )(dispatch),
            )
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'removeCategoryFilterAuthedUser');
            });
    };
}

export function setMapFilter(categoryId: number, city: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: FiltersActions.SetMapFilter,
            city,
        });

        graphqlQueryWithPolicyByNetworkConnection<{
            getWorldWallSimplifiedPosts: SimplifiedPost[];
            getWallBasicPosts: BasicPost[];
            getInspiredSimplifiedPosts: SimplifiedPost[];
        }>({
            query: INIT_POSTS,
            variables: {
                categoryId,
                city,
            },
        })
            .then(({ data: { getWorldWallSimplifiedPosts, getWallBasicPosts, getInspiredSimplifiedPosts } }) =>
                hydrateData(getWallBasicPosts, getWorldWallSimplifiedPosts, getInspiredSimplifiedPosts)(dispatch),
            )
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'setMapFilter');
            });
    };
}

export function setMapFilterAuthedUser(categoryId: number, city: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: FiltersActions.SetMapFilter,
            city,
        });

        graphqlQueryWithPolicyByNetworkConnection<{
            getWorldWallSimplifiedPostsAuthedUser: SimplifiedPost[];
            getWallBasicPosts: BasicPost[];
            getInspiredSimplifiedPosts: SimplifiedPost[];
        }>({
            query: INIT_POSTS_AUTHED_USER,
            variables: {
                categoryId,
                city,
            },
        })
            .then(
                ({ data: { getWorldWallSimplifiedPostsAuthedUser, getWallBasicPosts, getInspiredSimplifiedPosts } }) =>
                    hydrateData(
                        getWallBasicPosts,
                        getWorldWallSimplifiedPostsAuthedUser,
                        getInspiredSimplifiedPosts,
                    )(dispatch),
            )
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'setMapFilterAuthedUser');
            });
    };
}

export function removeMapFilter(selectedCategory: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: FiltersActions.RemoveMapFilter,
        });

        graphqlQueryWithPolicyByNetworkConnection<{
            getWorldWallSimplifiedPosts: SimplifiedPost[];
            getWallBasicPosts: BasicPost[];
            getInspiredSimplifiedPosts: SimplifiedPost[];
        }>({
            query: INIT_POSTS,
            variables: {
                selectedCategory,
                city: '',
            },
        })
            .then(({ data: { getWorldWallSimplifiedPosts, getWallBasicPosts, getInspiredSimplifiedPosts } }) =>
                hydrateData(getWallBasicPosts, getWorldWallSimplifiedPosts, getInspiredSimplifiedPosts)(dispatch),
            )
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'removeMapFilter');
            });
    };
}

export function removeMapFilterAuthedUser(selectedCategory: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: FiltersActions.RemoveMapFilter,
        });

        graphqlQueryWithPolicyByNetworkConnection<{
            getWorldWallSimplifiedPostsAuthedUser: SimplifiedPost[];
            getWallBasicPosts: BasicPost[];
            getInspiredSimplifiedPosts: SimplifiedPost[];
        }>({
            query: INIT_POSTS_AUTHED_USER,
            variables: {
                selectedCategory,
                city: '',
            },
        })
            .then(
                ({ data: { getWorldWallSimplifiedPostsAuthedUser, getWallBasicPosts, getInspiredSimplifiedPosts } }) =>
                    hydrateData(
                        getWallBasicPosts,
                        getWorldWallSimplifiedPostsAuthedUser,
                        getInspiredSimplifiedPosts,
                    )(dispatch),
            )
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'removeMapFilterAuthedUser');
            });
    };
}

export function getPostsCoordinatesByCity(city: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: FiltersActions.FetchPostsCoordinates,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getPostsLocationByCity: PostLocationFilter[] }>({
            query: GET_POST_COORDINATES,
            variables: {
                city,
            },
        })
            .then(response => {
                dispatch(
                    getPostsCoordinatesByCitySuccess(
                        response.data.getPostsLocationByCity.map(item => item.coordinates),
                    ),
                );
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'getPostsCoordinatesByCity');
                dispatch(getPostsCoordinatesByCityFailed(error));
            });
    };
}

function getPostsCoordinatesByCitySuccess(postCoordinates: PostCoordinates[]) {
    return {
        type: FiltersActions.FetchPostsCoordinatesSuccess,
        postCoordinates,
    };
}

function getPostsCoordinatesByCityFailed(error: any) {
    return {
        type: FiltersActions.FetchPostsCoordinatesFailed,
        error,
    };
}

function postsHasFetched() {
    return {
        type: FiltersActions.PostsHasFetched,
    };
}

function hydrateData(getWallPosts: BasicPost[], getWorldPosts: SimplifiedPost[], getInspiredPosts: SimplifiedPost[]) {
    return (dispatch: Dispatch) => {
        dispatch(initWallPosts(getWallPosts));
        dispatch(initWorldPosts(getWorldPosts));
        dispatch(initInspiredPosts(getInspiredPosts));
        dispatch(postsHasFetched());
    };
}
