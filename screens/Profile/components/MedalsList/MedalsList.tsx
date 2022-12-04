import { Competition } from '@inspire/types';
import React from 'react';
import { MedalListItem } from '../MedalListItem';

import { View } from 'react-native';

import { HorizontalList, Text } from 'components';
import { NavProps } from 'types';

import { Styles } from './styles';

interface MedalsListProps extends NavProps {
    medals: Competition[];
}

export function MedalsList(props: MedalsListProps) {
    function renderItem(item: any): React.ReactElement | null {
        return <MedalListItem componentId={props!.componentId} key={item.index} medal={item.item} />;
    }
    return (
        <View>
            <View style={Styles.titleBox}>
                <Text>Zdobyte nagrody 2021:</Text>
            </View>
            <HorizontalList sectionName="clubs" data={props.medals} renderItem={renderItem} />
        </View>
    );
}
