import { Tag } from '@inspire/types';
import React from 'react';

import { FlatList } from 'react-native';

import { useTagsGlobalSearch } from 'hooks';
import { ListItem } from './components/ListItem';

import { Styles } from './styles';

interface HashTagsOverlayProps {
    tags: Tag[];
    clickTag: (tag: Tag) => void;
}

export function HashTags(props: HashTagsOverlayProps) {
    const { loadMore, query } = useTagsGlobalSearch();
    function renderItem({ item }: { item: Tag }) {
        return <ListItem key={item.tag} item={item} clickTag={props.clickTag} />;
    }

    function loadMoreHandle() {
        loadMore(query);
    }

    return (
        <FlatList
            horizontal={true}
            data={props.tags}
            style={Styles.list}
            keyExtractor={(item: Tag) => item.tag}
            renderItem={renderItem}
            onEndReached={loadMoreHandle}
            onEndReachedThreshold={0.5}
            keyboardDismissMode={'none'}
            keyboardShouldPersistTaps={'always'}
        />
    );
}
