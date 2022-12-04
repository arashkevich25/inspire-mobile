import React from 'react';
import { GroupListItem } from '../GroupListItem';

import { View } from 'react-native';

import { Text, HorizontalList } from 'components';
import { HomeTemplateSectionStateItem } from 'reducers/homeTemplate';
import { deviceLocation } from 'tools';

import { Styles } from '../../styles';

interface GroupsSectionProps {
    item: HomeTemplateSectionStateItem;
}

export function GroupsSection(props: GroupsSectionProps) {
    const { body, data } = props.item;

    function renderItem(item: any): React.ReactElement | null {
        return <GroupListItem key={item.index} group={item.item} />;
    }

    return (
        <View style={Styles.sectionContainer}>
            <Text style={Styles.sectionTitle}>{body.title[deviceLocation]}</Text>
            <HorizontalList sectionName="groups" data={data} renderItem={renderItem} />
        </View>
    );
}
