import React from 'react';

import { View } from 'react-native';

import { Text } from 'components';

import { Styles } from '../../../../styles';

interface CategoryPillProps {
    tkey: string;
}

export function CategoryPill(props: CategoryPillProps) {
    return (
        <View style={Styles.pill}>
            <Text color="color1" translateKey={props.tkey} />
        </View>
    );
}
