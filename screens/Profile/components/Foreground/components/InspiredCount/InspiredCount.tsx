import React from 'react';

import { View } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';

import { styles } from '../../styles';

interface InspiredCountProps {
    count: number;
}

export function InspiredCount(props: InspiredCountProps) {
    return (
        <View style={styles.statisticsBox}>
            <Text fontSize={Sizes.Large}>{props.count}</Text>
            <Text color="gray" fontSize={Sizes.XSmall} translateKey="profile.statistics.inspired" />
        </View>
    );
}
