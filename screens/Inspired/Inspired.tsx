import { SimplifiedPost } from '@inspire/types';
import { ComponentId } from 'navigation/constants';
import React, { useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { FlatList, View } from 'react-native';
import { useNavigationBottomTabSelect, useNavigationComponentDidAppear } from 'react-native-navigation-hooks';

import { FilterPanel } from 'containers/FilterPanel';
import { useInspiredPosts, useLoadInspiredPosts, useNetworkState } from 'hooks';
import { AppState } from 'reducers';
import { postsFilteredIsPending } from 'selectors';
import { NavProps } from 'types';
import { List, SkeletonLoader } from './components';

import { Styles } from './styles';

interface InspiredProps extends NavProps {}

export function Inspired(props: InspiredProps) {
    const [posts, postsFetching, , getPosts] = useInspiredPosts();
    const { loadMorePostsHandle, loadPending } = useLoadInspiredPosts();
    const [isAppeared, setAppeared] = useState(false);
    const postsFilteredIsPendingState = useSelector((state: AppState) => postsFilteredIsPending(state));
    const listRef = useRef<FlatList<SimplifiedPost[]>>();
    const { isInternetReachableState } = useNetworkState();

    const memoList = useMemo(
        () => (
            <List
                isInternetReachableState={isInternetReachableState}
                listRef={listRef}
                getInspiredPosts={getPosts}
                componentId={props.componentId as ComponentId.AppInspired}
                loadMore={loadMorePostsHandle}
                itemsArr={posts}
                postsFetching={postsFetching}
                loadMorePostsPending={loadPending}
            />
        ),
        [posts, loadPending, postsFetching, isAppeared, loadMorePostsHandle, isInternetReachableState],
    );

    useNavigationComponentDidAppear(() => {
        setAppeared(true);
    }, props.componentId);

    useNavigationBottomTabSelect(data => {
        if (
            data.selectedTabIndex === 3 &&
            data.unselectedTabIndex === 3 &&
            posts.length &&
            !postsFilteredIsPendingState
        ) {
            listRef.current!.scrollToIndex({ animated: true, index: 0 });
        }
    });

    if (!isAppeared || postsFilteredIsPendingState) {
        return (
            <View style={Styles.contentContainer}>
                <FilterPanel {...props} />
                <SkeletonLoader />
            </View>
        );
    }

    return (
        <View style={Styles.contentContainer}>
            <FilterPanel {...props} />
            {memoList}
        </View>
    );
}
