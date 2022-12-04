import { SimplifiedPost } from '@inspire/types';
import { ComponentId, NoConnectionStatus, ShowPostModalFromPostById } from 'navigation';
import React from 'react';

import { ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { ThreeColumnsList } from 'components/ThreeColumnsList';
import { EmptyPlug } from 'components/ThreeColumnsList/components/EmptyPlug';
import { useNetworkState } from 'hooks/useNetworkState';
import I18n from 'tools/translate';
import { NavProps } from 'types';

interface PostsProps extends NavProps {
    userId: number;
    posts: SimplifiedPost[];
    onEndReached?: () => void;
    loadPostsIsPending: boolean;
    scrollEnabled?: boolean;
    loadMoreAllowed?: boolean;
}

export function Posts(props: PostsProps) {
    const { isInternetReachableState } = useNetworkState();

    async function openDetails(postId: string) {
        if (!isInternetReachableState) {
            // TODO empty props, waiting for https://github.com/wix/react-native-navigation/issues/6763
            await Navigation.push(props.componentId, { component: NoConnectionStatus('') });
            return;
        }
        await Navigation.push(props.componentId, {
            component: ShowPostModalFromPostById(postId, ComponentId.AppProfile, I18n.t('profile.title')),
        });
    }

    if (!props.posts.length) {
        return <EmptyPlug />;
    }

    return (
        <ScrollView horizontal={true} style={[props.loadMoreAllowed ? { marginBottom: 50 } : null]}>
            <ThreeColumnsList
                loadPostsIsPending={props.loadPostsIsPending}
                onEndReached={props.onEndReached}
                scrollEnabled={props.scrollEnabled || false}
                pressHandle={openDetails}
                preparedArr={props.posts}
            />
        </ScrollView>
    );
}
