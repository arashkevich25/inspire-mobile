import React, { useEffect } from 'react';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { ThreeColumnsList } from 'components';
import { EmptyPlug } from 'components/ThreeColumnsList/components/EmptyPlug';
import { usePostsByTag } from 'hooks/usePostsByTag';
import { ShowPostModalFromPostById } from 'navigation/components';
import { NavProps } from 'types';
import { SkeletonLoader } from '../AddEditGroup/components/Posts/components/SkeletonLoader';

import { Styles } from './styles';

interface PostsByTagProps extends NavProps {
    tag: string;
}

export function PostsByTag(props: PostsByTagProps) {
    const { postsIsFetching, loadMorePosts, posts, fetchPostsByTag, postsHasFetched } = usePostsByTag();

    async function openPostDetails(postId: string) {
        await Navigation.push(props.componentId, {
            component: ShowPostModalFromPostById(postId, props.componentId, `#${props.tag}`),
        });
    }

    useEffect(() => {
        fetchPostsByTag(props.tag);
    }, []);

    if (postsIsFetching) {
        return <SkeletonLoader />;
    }

    if (!posts.length && !postsIsFetching && postsHasFetched) {
        return <EmptyPlug />;
    }

    return (
        <View style={Styles.contentContainer}>
            <ThreeColumnsList
                pressHandle={openPostDetails}
                scrollEnabled={true}
                preparedArr={posts}
                onEndReached={loadMorePosts}
            />
        </View>
    );
}
