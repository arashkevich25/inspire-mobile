import { SimplifiedPost } from '@inspire/types';
import React from 'react';

import { FlatList } from 'react-native';

import { EmptyFlatListPlug } from 'components/EmptyFlatListPlug';
import { ListItem } from './components';

import { Styles } from '../../../styles';

interface ListProps {
    loadMore: () => void;
    componentId: any;
    itemsArr: SimplifiedPost[];
}

function Component(props: ListProps) {
    function renderItem({ item }: { item: SimplifiedPost }) {
        return <ListItem componentId={props.componentId} key={item.id} listItem={item} />;
    }

    return (
        <FlatList
            ListEmptyComponent={<EmptyFlatListPlug tkey="globalSearch.posts.emptyPlug" />}
            onEndReached={props.loadMore}
            onEndReachedThreshold={10}
            style={Styles.list}
            data={props.itemsArr}
            renderItem={renderItem}
            keyExtractor={(item: SimplifiedPost) => item.id}
        />
    );
}

export const List = React.memo(Component);
