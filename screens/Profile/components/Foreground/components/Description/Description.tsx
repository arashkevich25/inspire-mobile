import React from 'react';

import { View } from 'react-native';

import { Text } from 'components';

import { Styles } from './styles';

interface DescriptionProps {
    desc: string | undefined;
}

export function Description(props: DescriptionProps) {
    return (
        <View style={Styles.contentContainer}>
            <Text color="gray" numberOfLines={3}>
                {props.desc}
            </Text>
        </View>
    );
}
