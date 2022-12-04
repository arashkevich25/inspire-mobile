import { SimplifiedPost } from '@inspire/types';
import { ComponentId } from 'navigation/constants';
import React, { useRef } from 'react';

import { WaterfallList } from 'react-native-largelist';

import { EmptyFlatListPlug } from 'components';
import { useNetworkState, useRootUserData, useUserGroups } from 'hooks';
import { LargeListScrollPreventHandle } from 'models';
import { redirectToFullPostView } from 'tools';
import { List, Post, SkeletonLoader } from './components';

interface FilteredPostsListByGroupProps {
    groupId: number;
}

export function FilteredPostsListByGroup(props: FilteredPostsListByGroupProps) {
    const { isInternetReachableState } = useNetworkState();
    const listRef = useRef<WaterfallList<SimplifiedPost>>();
    const [rootId] = useRootUserData();
    const { groupPosts, groupPostsFetching, fetchPosts } = useUserGroups(rootId);
    LargeListScrollPreventHandle.openPostHandle = openPostDetails;

    async function openPostDetails(postId: string) {
        redirectToFullPostView(postId, isInternetReachableState, ComponentId.ScreenFilteredPostsListByGroup, '');
    }

    function renderItem(item: SimplifiedPost, index: number) {
        return <Post pressHandle={LargeListScrollPreventHandle.openPost} index={index} post={item} />;
    }

    function fetchPostsHandle() {
        fetchPosts(props.groupId);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function loadHandle() {}

    if (groupPostsFetching) {
        return <SkeletonLoader />;
    }

    if (!groupPosts.length) {
        return <EmptyFlatListPlug tkey="worldWall.emptyPlug" />;
    }

    return (
        <List
            listRef={listRef}
            stopScrolling={LargeListScrollPreventHandle.stopScrolling}
            startScrolling={LargeListScrollPreventHandle.startScrolling}
            posts={groupPosts}
            refreshHandle={fetchPostsHandle}
            renderItemHandle={renderItem}
            loadMoreHandle={loadHandle}
            allContentWasLoaded={true}
        />
    );
}
