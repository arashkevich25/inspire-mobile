import { UserClub } from '@inspire/types';
import React from 'react';
import { ClubListItem } from '../ClubListItem';

import { View } from 'react-native';

import { HorizontalList, Text } from 'components';
import { NavProps } from 'types';

import { Styles } from './styles';

interface ClubsListProps extends NavProps {
    clubs: UserClub[];
}

export function ClubsList(props: ClubsListProps) {
    function renderItem(item: any): React.ReactElement | null {
        return <ClubListItem componentId={props!.componentId} key={item.index} club={item.item} />;
    }

    return (
        <View style={Styles.contentContainer}>
            <View style={Styles.titleBox}>
                <Text isBold={true} translateKey="profile.texts.clubLists" />
            </View>
            <View style={Styles.contentBox}>
                <HorizontalList sectionName="clubs" data={props.clubs} renderItem={renderItem} />
            </View>
        </View>
    );
}
