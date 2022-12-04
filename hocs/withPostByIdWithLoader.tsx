import React from 'react';

import { useComments, usePostById } from 'hooks';
import { PostModalSkeletonLoader } from 'screens/ShowPostModal/components';

export function withPostByIdWithLoader(WrappedComponent: any) {
    return (props: any) => {
        const { fetchPostById, post, postByIdIsFetching, postByIdFetched } = usePostById(props.postId);
        const { commentsByPostIdHasFetched, commentsByPostIdIsFetching, getComments } = useComments(props.postId);

        if (!commentsByPostIdHasFetched && !commentsByPostIdIsFetching) {
            getComments();
        }

        if (postByIdIsFetching && !postByIdFetched) {
            return <PostModalSkeletonLoader />;
        }

        if (!post || post.id !== props.postId) {
            fetchPostById();
            return <PostModalSkeletonLoader />;
        }

        if (!post || !post.user) {
            fetchPostById();
            return <PostModalSkeletonLoader />;
        }

        return <WrappedComponent {...props} post={post} />;
    };
}
