import { Tag } from '@inspire/types';
import React from 'react';

import { FlatList, FlatListProps } from 'react-native';

import { EmptyFlatListPlug } from 'components/EmptyFlatListPlug';
import { ListItemSeparator } from 'components/ListItemSeparator';
import { ListItem } from './components';

import { Styles } from '../../../../styles';

interface ListProps {
    loadMore: () => void;
    itemsArr: Tag[];
    clickTag: (tag: Tag) => void;
    styles?: any;
    listProps?: FlatListProps<any>;
}

export function List(props: ListProps) {
    function renderItem({ item }: { item: Tag }) {
        return <ListItem openDetails={props.clickTag} key={item.tag} tag={item} />;
    }

    function renderSeparator() {
        return <ListItemSeparator height={4} />;
    }

    return (
        <FlatList
            ListEmptyComponent={<EmptyFlatListPlug tkey="globalSearch.tags.emptyPlug" />}
            onEndReached={props.loadMore}
            onEndReachedThreshold={0.5}
            ItemSeparatorComponent={renderSeparator}
            data={props.itemsArr}
            style={[Styles.list, props.styles]}
            renderItem={renderItem}
            keyExtractor={(item: Tag) => item.tag}
            {...props.listProps}
        />
    );
}
