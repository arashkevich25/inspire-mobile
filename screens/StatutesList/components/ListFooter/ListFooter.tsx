import React from 'react';

import { View } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';

import { Styles } from './styles';

export function ListFooter() {
    return (
        <View>
            <Text
                color="gray"
                fontSize={Sizes.XSmall}
                style={Styles.text}
                translateKey="statute.list.footer.helpText1"
            />
            <Text
                color="gray"
                fontSize={Sizes.XSmall}
                style={Styles.text}
                translateKey="statute.list.footer.helpText2"
            />
        </View>
    );
}
