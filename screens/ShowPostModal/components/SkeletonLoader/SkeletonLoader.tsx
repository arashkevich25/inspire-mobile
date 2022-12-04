import React from 'react';

import { View } from 'react-native';

import { Item } from './components';

import { Styles } from './styles';

export function PostModalSkeletonLoader() {
    return (
        <View style={Styles.contentContainer}>
            <Item />
        </View>
    );
}
