import { ClubDetails as IClubDetails, SimplifiedPost } from '@inspire/types';
import { ComponentId, NoConnectionStatus, ShowPostModalFromPostById } from 'navigation';
import React from 'react';
import { Header } from './Header';

import { Navigation } from 'react-native-navigation';

import { ThreeColumnsList } from 'components';
import { useNetworkState } from 'hooks';
import { NavProps } from 'types';

interface ClubDetailsProps extends NavProps {
    clubDetails: IClubDetails;
    openDrawer: () => void;
    fetchClubDetails: () => void;
    loadMorePosts: () => void;
    clubDetailsIsFetching: boolean;
    isAuthenticated: boolean;
    posts: SimplifiedPost[];
    postsIsFetching: boolean;
    postsLoadMoreIsAllowed: boolean;
    postsHasFetched: boolean;
    fetchDetails: () => void;
    fetchIsPending: boolean;
}

export function ClubDetails(props: ClubDetailsProps) {
    const { isInternetReachableState } = useNetworkState();

    async function openDetails(postId: string) {
        if (!isInternetReachableState) {
            await Navigation.push(props.componentId, { component: NoConnectionStatus(props.clubDetails.name) });
            return;
        }
        await Navigation.push(props.componentId, {
            component: ShowPostModalFromPostById(postId, ComponentId.ScreenClub, props.clubDetails.name),
        });
    }

    return (
        <ThreeColumnsList
            onRefresh={props.fetchDetails}
            refreshing={props.fetchIsPending}
            pressHandle={openDetails}
            preparedArr={props.posts}
            scrollEnabled={true}
            onEndReached={props.loadMorePosts}
            loadPostsIsPending={props.postsIsFetching}
            header={
                <Header
                    isAuthenticated={props.isAuthenticated}
                    clubDetails={props.clubDetails}
                    openDrawer={props.openDrawer}
                />
            }
        />
    );
}
