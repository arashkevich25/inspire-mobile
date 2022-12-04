import React from 'react';
import { useSelector } from 'react-redux';

import { View } from 'react-native';

import { AppState } from 'reducers';
import { inspiredPosts } from 'selectors';

export function withPostFromInspired(WrappedComponent: any) {
    return (props: any) => {
        const post = useSelector((state: AppState) => inspiredPosts(state)).filter(item => item.id === props.postId)[0];
        if (!post) {
            return <View />;
        }
        return <WrappedComponent {...props} post={post} />;
    };
}
