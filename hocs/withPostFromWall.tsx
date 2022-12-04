import React from 'react';
import { useSelector } from 'react-redux';

import { View } from 'react-native';

import { AppState } from 'reducers';
import { wallPosts } from 'selectors';

export function withPostFromWall(WrappedComponent: any) {
    return (props: any) => {
        const post = useSelector((state: AppState) => wallPosts(state)).filter(item => item.id === props.postId)[0];
        if (!post || !post.user) {
            return <View />;
        }
        return <WrappedComponent {...props} post={post} />;
    };
}
