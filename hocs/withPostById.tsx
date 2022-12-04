import React from 'react';

import { View } from 'react-native';

import { useNetworkState, usePostById } from 'hooks';

export function withPostById(WrappedComponent: any) {
    return (props: any) => {
        const { fetchPostById, post, postByIdIsFetching, postByIdFetched } = usePostById(props.postId);
        const { isInternetReachableState } = useNetworkState();

        if (!isInternetReachableState) {
            return <View />;
        }

        if (postByIdIsFetching && !postByIdFetched) {
            return <View />;
        }

        if (!post || !post.user || post.id !== props.postId) {
            fetchPostById();
            return <View />;
        }

        return <WrappedComponent {...props} post={post} />;
    };
}
