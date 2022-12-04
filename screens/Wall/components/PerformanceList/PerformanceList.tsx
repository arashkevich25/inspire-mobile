import { BasicPost } from '@inspire/types';
import React, { useCallback } from 'react';
import { ITEM_HEIGHT } from './constants/itemHeight';

import { FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { CustomRefreshControl, FlatLitBottomLoadingBar } from 'components';
import { useFollowUnFollowPost, useNetworkState, usePostRecommend, useRootUserData } from 'hooks';
import { NoConnectionStatus, Profile, ShowPostModalFromPostById } from 'navigation/components';
import I18n from 'tools/translate';
import { NavProps, WallPostHandles, WallPostHandlesTypes } from 'types';
import { WallPost } from './components/Post/Post';

interface PerformanceListProps extends NavProps {
    data: BasicPost[];
    loadMore: () => void;
    getPosts: () => void;
    postsFetching: boolean;
    postsLoading: boolean;
}

export function Component(props: PerformanceListProps, ref: any) {
    const [userId] = useRootUserData();
    const [, followUnFollowHandle] = useFollowUnFollowPost();
    const { isInternetReachableState } = useNetworkState();
    const { increaseOrDecreasePostRecommend } = usePostRecommend();

    async function redirectToFullPostView(postId: string) {
        if (!isInternetReachableState) {
            // TODO empty props, waiting for https://github.com/wix/react-native-navigation/issues/6763
            await Navigation.push(props.componentId, { component: NoConnectionStatus('') });
            return;
        }
        await Navigation.push(props.componentId, {
            component: ShowPostModalFromPostById(postId, props.componentId, I18n.t('wall.title')),
        });
    }

    async function redirectToProfile(userId: number) {
        if (!isInternetReachableState) {
            // TODO empty props, waiting for https://github.com/wix/react-native-navigation/issues/6763
            await Navigation.push(props.componentId, { component: NoConnectionStatus('') });
            return;
        }
        await Navigation.push(props.componentId, { component: Profile(userId) });
    }

    function pressHandle(type: WallPostHandles, post: BasicPost): void {
        switch (type) {
            case WallPostHandlesTypes.Inspire: {
                followUnFollowHandle(post, userId);
                break;
            }
            case WallPostHandlesTypes.OpenPostDetails: {
                redirectToFullPostView(post.id);
                break;
            }
            case WallPostHandlesTypes.OpenProfile: {
                redirectToProfile(post.user.id);
                break;
            }
            case WallPostHandlesTypes.Recommend: {
                increaseOrDecreasePostRecommend(post.id, post.userHasRecommend);
                break;
            }
            default:
                break;
        }
    }

    const renderItem = useCallback(
        ({ item }) => <WallPost pressHandle={pressHandle} post={item} rootUserId={userId} />,
        [isInternetReachableState],
    );

    function keyExtractor(item: BasicPost) {
        return item.id;
    }

    function getLayout(data: any, index: any) {
        return {
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
        };
    }

    return (
        <FlatList<BasicPost>
            ref={ref}
            data={props.data}
            getItemLayout={getLayout}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListFooterComponent={<FlatLitBottomLoadingBar isLoading={props.postsLoading} />}
            windowSize={4}
            initialNumToRender={4}
            maxToRenderPerBatch={2}
            showsVerticalScrollIndicator={false}
            updateCellsBatchingPeriod={10}
            onEndReached={props.loadMore}
            onEndReachedThreshold={5}
            removeClippedSubviews={true}
            refreshControl={<CustomRefreshControl refreshing={props.postsFetching} onRefresh={props.getPosts} />}
        />
    );
}

export const PerformanceList = React.forwardRef(Component);
