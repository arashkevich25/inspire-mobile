import React from 'react';

import { View } from 'react-native';

import { Text } from 'components';
import { winWidth } from 'tools';

interface DescriptionProps {
    illustration: any;
    tkey: string;
}

export function Description(props: DescriptionProps) {
    return (
        <View style={{ width: '100%', minHeight: 150, flexDirection: 'row', position: 'relative' }}>
            <View>
                <Text color="gray" style={{ width: winWidth / 2, lineHeight: 20 }} translateKey={props.tkey} />
            </View>
            {props.illustration}
        </View>
    );
}
