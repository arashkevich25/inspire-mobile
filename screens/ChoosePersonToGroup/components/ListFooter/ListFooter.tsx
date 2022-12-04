import { View } from 'native-base';
import React from 'react';

import { Text } from 'components';

import { Styles } from './styles';

export function ListFooter() {
    return (
        <View style={Styles.contentContainer}>
            <Text style={Styles.text} color="gray" translateKey="profile.groups.listFooterTip" />
        </View>
    );
}
