import { SimplifiedPost } from '@inspire/types';
import { ComponentId } from 'navigation';
import React, { useCallback } from 'react';

import { FlatList } from 'react-native';

import { CustomRefreshControl } from 'components';
import { EmptyFlatListPlug } from 'components/EmptyFlatListPlug';
import { FlatLitBottomLoadingBar } from 'components/FlatLitBottomLoadingBar';
import { ListItem } from './components';

interface ListProps {
    itemsArr: SimplifiedPost[];
    componentId: ComponentId.AppInspired;
    postsFetching: boolean;
    isInternetReachableState: boolean;
    loadMore: () => void;
    getInspiredPosts: () => void;
    listRef: any;
    loadMorePostsPending: boolean;
}

export function List(props: ListProps) {
    function renderItem({ item }: { item: SimplifiedPost }) {
        return (
            <ListItem
                isInternetReachableState={props.isInternetReachableState}
                componentId={props.componentId}
                listItem={item}
            />
        );
    }

    const keyExtractor = useCallback(item => {
        return item.id;
    }, []);

    return (
        <FlatList<SimplifiedPost>
            ref={props.listRef}
            ListEmptyComponent={<EmptyFlatListPlug tkey="inspired.emptyPlug" />}
            ListFooterComponent={<FlatLitBottomLoadingBar isLoading={props.loadMorePostsPending} />}
            onEndReached={props.loadMore}
            onEndReachedThreshold={1}
            data={props.itemsArr}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            refreshControl={
                <CustomRefreshControl refreshing={props.postsFetching} onRefresh={props.getInspiredPosts} />
            }
        />
    );
}
