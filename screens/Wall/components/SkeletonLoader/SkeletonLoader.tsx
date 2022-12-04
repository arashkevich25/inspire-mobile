import React from 'react';

import { View } from 'react-native';

import { Item } from './components';

export function SkeletonLoader() {
    return (
        <View>
            <Item />
            <Item />
        </View>
    );
}
