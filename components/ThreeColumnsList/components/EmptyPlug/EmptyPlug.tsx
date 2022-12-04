import React from 'react';

import { View } from 'react-native';

import { Text } from 'components/Text';
import { Sizes } from 'types';

import { Styles } from './styles';

export function EmptyPlug() {
    return (
        <View style={Styles.placeholderContainer}>
            <Text isBold={true} isItalic={true} fontSize={Sizes.Large} translateKey="profile.posts.emptyPlug" />
        </View>
    );
}
