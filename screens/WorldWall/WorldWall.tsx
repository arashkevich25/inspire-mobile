import { SimplifiedPost } from '@inspire/types';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { FlatList, View } from 'react-native';
import { WaterfallList } from 'react-native-largelist';
import { Navigation } from 'react-native-navigation';
import { useNavigationBottomTabSelect, useNavigationComponentDidAppear } from 'react-native-navigation-hooks';

import { CustomRefreshControl, EmptyFlatListPlug } from 'components';
import { FilterPanel } from 'containers';
import { useNetworkState, useWorldWallPosts, useWorldWallPostsLoad } from 'hooks';
import { LargeListScrollPreventHandle } from 'models';
import { NoConnectionStatus, ShowPostModalFromPostById } from 'navigation/components';
import { AppState } from 'reducers';
import { isAuthenticated, postsFilteredIsPending } from 'selectors';
import I18n from 'tools/translate';
import { NavProps } from 'types';
import { Post } from '../FilteredPostsList/components';
import { List, SkeletonLoader } from './components';

import { Styles } from './styles';

interface WorldWallProps extends NavProps {
    showLoginStep: boolean;
}

export function WorldWall(props: WorldWallProps) {
    const [isAppeared, setAppeared] = useState(false);
    const authenticated = useSelector((state: AppState) => isAuthenticated(state));
    const { posts, postsFetched, postsIsPending, getPosts } = useWorldWallPosts(authenticated);
    const { loadPosts, wallPostsLoadPending, loadMoreIsAllowed } = useWorldWallPostsLoad(authenticated);
    const listRef = useRef<WaterfallList<SimplifiedPost>>();
    const postsFilteredIsPendingState = useSelector((state: AppState) => postsFilteredIsPending(state));
    const { isInternetReachableState } = useNetworkState();
    LargeListScrollPreventHandle.openPostHandle = openPostDetails;

    if (!postsIsPending) {
        if (listRef.current) {
            listRef.current.endRefresh();
        }
    }

    if (!wallPostsLoadPending) {
        if (listRef.current) {
            listRef.current.endLoading();
        }
    }

    async function openPostDetails(postId: string) {
        if (!isInternetReachableState) {
            // TODO empty props, waiting for https://github.com/wix/react-native-navigation/issues/6763
            await Navigation.push(props.componentId, { component: NoConnectionStatus('') });
            return;
        }
        await Navigation.push(props.componentId, {
            component: ShowPostModalFromPostById(postId, props.componentId, I18n.t('worldWall.title')),
        });
    }

    useNavigationComponentDidAppear(async () => {
        setAppeared(true);
    }, props.componentId);

    useNavigationBottomTabSelect(data => {
        if (
            data.selectedTabIndex === 0 &&
            data.unselectedTabIndex === 0 &&
            posts.length &&
            !postsFilteredIsPendingState
        ) {
            listRef.current!.scrollTo({ x: 0, y: 0 }, true);
        }
    });

    function renderItem(item: SimplifiedPost, index: number) {
        return <Post pressHandle={LargeListScrollPreventHandle.openPost} index={index} post={item} />;
    }

    if (postsFetched && !posts.length) {
        return (
            <View style={Styles.contentContainer}>
                <FilterPanel {...props} />
                <FlatList
                    data={[]}
                    ListEmptyComponent={<EmptyFlatListPlug tkey="worldWall.emptyPlug" />}
                    renderItem={() => <></>}
                    refreshControl={<CustomRefreshControl refreshing={postsIsPending} onRefresh={getPosts} />}
                />
            </View>
        );
    }

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
            <List
                listRef={listRef}
                startScrolling={LargeListScrollPreventHandle.startScrolling}
                stopScrolling={LargeListScrollPreventHandle.stopScrolling}
                posts={posts}
                refreshHandle={getPosts}
                renderItemHandle={renderItem}
                loadMoreHandle={loadPosts}
                allContentWasLoaded={!loadMoreIsAllowed}
                userIsAuthenticated={authenticated}
            />
        </View>
    );
}
