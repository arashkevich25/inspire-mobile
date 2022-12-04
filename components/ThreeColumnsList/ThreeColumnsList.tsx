import { SimplifiedPost } from '@inspire/types';
import React from 'react';

import { FlatList } from 'react-native';

import { FlatLitBottomLoadingBar } from 'components/FlatLitBottomLoadingBar';
import { ListItem } from './components';

import { Styles } from './styles';

interface ThreeColumnsListProps {
    pressHandle: (postId: string) => void;
    preparedArr: SimplifiedPost[];
    scrollEnabled: boolean;
    onEndReached?: () => void;
    loadPostsIsPending?: boolean;
    header?: React.ReactElement;
    onRefresh?: () => void;
    refreshing?: boolean;
}

export function ThreeColumnsList(props: ThreeColumnsListProps) {
    function renderItem({ item }: any) {
        return <ListItem openDetails={props.pressHandle} post={item} />;
    }

    function keyExtractor(item: SimplifiedPost) {
        return item.id;
    }

    return (
        <FlatList
            onRefresh={props.onRefresh || null}
            refreshing={props.refreshing}
            ListHeaderComponent={props.header || null}
            scrollEnabled={props.scrollEnabled}
            nestedScrollEnabled={false}
            ListFooterComponent={<FlatLitBottomLoadingBar isLoading={props.loadPostsIsPending || false} />}
            data={props.preparedArr}
            initialNumToRender={10}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={Styles.contentContainer}
            onEndReached={props.onEndReached}
            onEndReachedThreshold={0.5}
            renderItem={renderItem}
            numColumns={3}
            keyExtractor={keyExtractor}
        />
    );
}
