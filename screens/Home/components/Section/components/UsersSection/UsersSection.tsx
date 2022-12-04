import React from 'react';
import { UserListItem } from '../UserListItem';

import { View } from 'react-native';

import { HorizontalList, Text } from 'components';
import { HomeTemplateSectionStateItem } from 'reducers/homeTemplate';
import { deviceLocation } from 'tools';

import { Styles } from '../../styles';

interface UsersSectionProps {
    item: HomeTemplateSectionStateItem;
    isInternetReachableState: boolean;
}

export function UsersSection(props: UsersSectionProps) {
    const { body, data } = props.item;

    function renderItem(item: any): React.ReactElement | null {
        return (
            // eslint-disable-next-line react/prop-types
            <UserListItem isInternetReachableState={props.isInternetReachableState} key={item.index} user={item.item} />
        );
    }

    return (
        <View style={[Styles.sectionContainer, Styles.title]}>
            <Text style={Styles.sectionTitle}>{body.title[deviceLocation]}</Text>
            <HorizontalList data={data} renderItem={renderItem} />
        </View>
    );
}
