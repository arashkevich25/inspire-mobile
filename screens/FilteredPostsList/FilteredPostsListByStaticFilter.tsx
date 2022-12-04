import { SimplifiedPost } from '@inspire/types';
import { ComponentId } from 'navigation';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { WaterfallList } from 'react-native-largelist';

import { EmptyFlatListPlug } from 'components';
import { useNetworkState, useWorldWallPosts, useWorldWallPostsLoad } from 'hooks';
import { LargeListScrollPreventHandle } from 'models';
import { AppState } from 'reducers';
import { postsFilteredIsPending } from 'selectors';
import { redirectToFullPostView } from 'tools';
import { List, Post, SkeletonLoader } from './components';

export function FilteredPostsListByStaticFilter() {
    const { isInternetReachableState } = useNetworkState();
    const listRef = useRef<WaterfallList<SimplifiedPost>>();
    const postsFilteredIsPendingState = useSelector((state: AppState) => postsFilteredIsPending(state));

    const { posts, postsIsPending, getPosts } = useWorldWallPosts(true);
    const { loadPosts, loadMoreIsAllowed, wallPostsLoadPending } = useWorldWallPostsLoad(true);
    LargeListScrollPreventHandle.openPostHandle = openPostDetails;

    async function openPostDetails(postId: string) {
        redirectToFullPostView(postId, isInternetReachableState, ComponentId.ScreenFilteredPostsListByStaticFilter, '');
    }

    function renderItem(item: SimplifiedPost, index: number) {
        return <Post pressHandle={LargeListScrollPreventHandle.openPost} index={index} post={item} />;
    }

    if ((!postsIsPending || !wallPostsLoadPending) && listRef.current) {
        listRef.current.endLoading();
        listRef.current.endRefresh();
    }

    if (postsFilteredIsPendingState) {
        return <SkeletonLoader />;
    }

    if (!posts.length) {
        return <EmptyFlatListPlug tkey="worldWall.emptyPlug" />;
    }

    return (
        <List
            listRef={listRef}
            posts={posts}
            stopScrolling={LargeListScrollPreventHandle.stopScrolling}
            startScrolling={LargeListScrollPreventHandle.startScrolling}
            refreshHandle={getPosts}
            renderItemHandle={renderItem}
            loadMoreHandle={loadPosts}
            allContentWasLoaded={!loadMoreIsAllowed}
        />
    );
}
