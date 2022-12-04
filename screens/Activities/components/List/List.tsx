import { Activity } from '@inspire/types';
import React from 'react';

import { SectionList } from 'react-native';

import { CustomRefreshControl, EmptyFlatListPlug } from 'components';
import { ListSection } from 'types';
import { ListItem, SectionHeading } from './components';

import { Styles } from './styles';

interface ListProps {
    activities: ListSection<Activity>[];
    activityHandle: (activity: Activity) => void;
    loadMore: () => void;
    fetch: () => void;
    isFetching: boolean;
}

export function List(props: ListProps) {
    function renderItem({ item }: { item: Activity }) {
        return <ListItem onClickItem={props.activityHandle} key={String(item.id)} listItem={item} />;
    }

    return (
        <SectionList
            style={Styles.listContainer}
            sections={props.activities}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={<EmptyFlatListPlug tkey="activities.emptyPlug" />}
            onEndReached={props.loadMore}
            onEndReachedThreshold={0.5}
            renderSectionHeader={({ section: { title } }) => <SectionHeading title={title} />}
            renderItem={renderItem}
            refreshControl={<CustomRefreshControl refreshing={props.isFetching} onRefresh={props.fetch} />}
        />
    );
}
