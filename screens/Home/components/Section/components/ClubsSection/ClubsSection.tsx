import React from 'react';
import { ClubListItem } from '../ClubListItem';

import { View } from 'react-native';

import { HorizontalList, Text } from 'components';
import { HomeTemplateSectionStateItem } from 'reducers/homeTemplate';
import { deviceLocation } from 'tools';

import { Styles } from '../../styles';

interface ClubsSectionProps {
    item: HomeTemplateSectionStateItem;
}

export function ClubsSection(props: ClubsSectionProps) {
    const { body, data } = props.item as any;

    function renderItem(item: any): React.ReactElement | null {
        return <ClubListItem club={item.item} />;
    }

    return (
        <View style={Styles.topSectionContainer}>
            <View style={Styles.title}>
                <Text style={Styles.sectionTitle}>{body.title[deviceLocation]}</Text>
            </View>
            <HorizontalList sectionName={props.item.body.filterId} data={data} renderItem={renderItem} />
            {body.helpText[deviceLocation] ? (
                <Text style={Styles.helpText}>{body.helpText[deviceLocation]}</Text>
            ) : null}
        </View>
    );
}
