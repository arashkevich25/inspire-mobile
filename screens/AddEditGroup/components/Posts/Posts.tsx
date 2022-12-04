import { SimplifiedPost } from '@inspire/types';
import { ComponentId, ShowPostModalFromPostById } from 'navigation';
import React from 'react';

import { Navigation } from 'react-native-navigation';

import { ThreeColumnsList } from 'components/ThreeColumnsList';
import { EmptyPlug } from 'components/ThreeColumnsList/components/EmptyPlug';
import { SkeletonLoader } from './components';

interface PostsProps {
    posts: SimplifiedPost[];
    postsFetching: boolean;
    groupName: string;
}

export function Posts(props: PostsProps) {
    async function openDetails(postId: string) {
        await Navigation.push(ComponentId.ScreenAddEditGroup, {
            component: ShowPostModalFromPostById(postId, ComponentId.ScreenAddEditGroup, props.groupName),
        });
    }

    if (props.postsFetching) {
        return <SkeletonLoader />;
    }

    if (!props.posts.length) {
        return <EmptyPlug />;
    }

    return <ThreeColumnsList scrollEnabled={true} pressHandle={openDetails} preparedArr={props.posts} />;
}
