import React from 'react';
import { useSelector } from 'react-redux';

import { View } from 'react-native';

import { AppState } from 'reducers';
import { postsByUserId } from 'selectors';

export function withPostFromProfile(WrappedComponent: any) {
    return (props: any) => {
        const post = useSelector((state: AppState) => postsByUserId(state, props.userId)).filter(
            item => item.id === props.postId,
        )[0];
        if (!post) {
            return <View />;
        }
        return <WrappedComponent {...props} post={post} />;
    };
}
