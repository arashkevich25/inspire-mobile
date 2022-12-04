import { SimplifiedPost } from '@inspire/types';
import { ComponentId } from 'navigation/constants/componentId';
import React, { useRef } from 'react';

import { WaterfallList } from 'react-native-largelist';

import { useHomeTemplate, useNetworkState } from 'hooks';
import { LargeListScrollPreventHandle } from 'models';
import { redirectToFullPostView } from 'tools';
import { List, Post } from './components';

interface FilteredPostsListProps {
    filterId: string;
}

export function FilteredPostsList(props: FilteredPostsListProps) {
    const { isInternetReachableState } = useNetworkState();
    const [, loadMore, getSectionByFilterId, fetchData] = useHomeTemplate();
    const section = getSectionByFilterId(props.filterId);
    LargeListScrollPreventHandle.openPostHandle = openPostDetails;

    if (!section) {
        return null;
    }

    function loadMoreHandle() {
        loadMore(section!);
    }

    function fetchDataHandle() {
        fetchData(section!.body.filterId);
    }

    const listRef = useRef<WaterfallList<SimplifiedPost>>();

    async function openPostDetails(postId: string) {
        redirectToFullPostView(postId, isInternetReachableState, ComponentId.ScreenFilteredPostsList, '');
    }

    function renderItem(item: SimplifiedPost, index: number) {
        return <Post pressHandle={LargeListScrollPreventHandle.openPost} index={index} post={item} />;
    }

    if (!section.isLoading) {
        if (listRef.current) {
            listRef.current.endLoading();
            listRef.current.endRefresh();
        }
    }

    return (
        <List
            listRef={listRef}
            posts={section.data}
            stopScrolling={LargeListScrollPreventHandle.stopScrolling}
            startScrolling={LargeListScrollPreventHandle.startScrolling}
            refreshHandle={fetchDataHandle}
            renderItemHandle={renderItem}
            loadMoreHandle={loadMoreHandle}
            allContentWasLoaded={section.allContentWasLoaded}
        />
    );
}
