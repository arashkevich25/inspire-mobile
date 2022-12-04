import { BasicPost } from '@inspire/types';
import React, { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';

import { FlatList, View } from 'react-native';
import { useNavigationBottomTabSelect } from 'react-native-navigation-hooks';

import { CustomRefreshControl, EmptyFlatListPlug } from 'components';
import { FilterPanel } from 'containers/FilterPanel';
import { useWallPosts, useWallPostsLoad } from 'hooks';
import { AppState } from 'reducers';
import { postsFilteredIsPending } from 'selectors';
import { NavProps } from 'types';
import { PerformanceList, SkeletonLoader } from './components';

import { Styles } from './styles';

interface WallProps extends NavProps {}

export function Wall(props: WallProps) {
    const { getPosts, postsFetched, posts, postsIsPending } = useWallPosts();
    const { loadMorePosts, wallPostsLoadPending } = useWallPostsLoad();
    const listRef = useRef<FlatList<BasicPost>>();
    const postsFilteredIsPendingState = useSelector((state: AppState) => postsFilteredIsPending(state));

    const memoList = useMemo(
        () => (
            <PerformanceList
                ref={listRef}
                componentId={props.componentId}
                getPosts={getPosts}
                postsFetching={postsIsPending}
                loadMore={loadMorePosts}
                data={posts}
                postsLoading={wallPostsLoadPending}
            />
        ),
        [posts, loadMorePosts, getPosts, postsIsPending],
    );

    useNavigationBottomTabSelect(data => {
        if (
            data.selectedTabIndex === 1 &&
            data.unselectedTabIndex === 1 &&
            posts.length &&
            !postsFilteredIsPendingState
        ) {
            listRef.current!.scrollToOffset({ animated: true, offset: 0 });
        }
    });

    if (postsFilteredIsPendingState) {
        return (
            <View style={Styles.contentContainer}>
                <FilterPanel {...props} />
                <SkeletonLoader />
            </View>
        );
    }

    if (postsFetched && !posts.length) {
        return (
            <View style={Styles.contentContainer}>
                <FilterPanel {...props} />
                <FlatList
                    data={[]}
                    ListEmptyComponent={<EmptyFlatListPlug tkey="wall.emptyPlug" />}
                    renderItem={() => <></>}
                    keyExtractor={item => String(item.id)}
                    refreshControl={<CustomRefreshControl refreshing={postsIsPending} onRefresh={getPosts} />}
                />
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
