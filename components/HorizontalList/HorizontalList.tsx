import React from 'react';

import { FlatList, ListRenderItem } from 'react-native';

interface HorizontalListProps<T> {
    sectionName?: string;
    data: any;
    renderItem: ListRenderItem<T>;
}

export function HorizontalList<T = any>(props: HorizontalListProps<T>) {
    return (
        <FlatList
            data={props.data}
            renderItem={props.renderItem}
            horizontal={true}
            keyExtractor={(item: T) => `${props.sectionName}-${item.id.toString()}`}
            showsHorizontalScrollIndicator={false}
        />
    );
}
