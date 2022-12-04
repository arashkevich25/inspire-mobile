import { Draft } from '@inspire/types';
import React from 'react';

import { ListRenderItemInfo } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import { EmptyFlatListPlug } from 'components/EmptyFlatListPlug';
import { DeleteButton, ListItem } from './components';

interface ListProps {
    items: Draft[];
    refreshData: () => void;
}

export function List(props: ListProps) {
    function renderItem({ item }: { item: Draft }) {
        return <ListItem item={item} key={item.id} />;
    }

    function renderHiddenItemHandle(data: ListRenderItemInfo<Draft>) {
        // eslint-disable-next-line react/prop-types
        return <DeleteButton refreshData={props.refreshData} item={data.item} />;
    }

    return (
        <SwipeListView
            ListEmptyComponent={<EmptyFlatListPlug tkey="drafts.emptyPlug" />}
            data={props.items}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItemHandle}
            rightOpenValue={-75}
        />
    );
}
