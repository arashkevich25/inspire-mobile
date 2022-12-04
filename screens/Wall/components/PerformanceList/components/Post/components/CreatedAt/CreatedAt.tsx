import React from 'react';

import { View } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';

interface CreatedAtProps {
    hours: number;
    createdAtDate: string;
    createdAt: string;
}

export function CreatedAt(props: CreatedAtProps) {
    return (
        <View>
            <Text fontSize={Sizes.XSmall} color="gray">
                {props.hours > 48 ? props.createdAtDate : props.createdAt}
            </Text>
        </View>
    );
}
