import React from 'react';

import { View } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';

interface NameProps {
    name: string;
}

export function Name(props: NameProps) {
    return (
        <View>
            <Text color="color1" isBold={true} fontSize={Sizes.Large}>
                {props.name}
            </Text>
        </View>
    );
}
