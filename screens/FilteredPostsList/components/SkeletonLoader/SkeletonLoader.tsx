import React from 'react';

import { View } from 'react-native';

import { Item } from './components';

import { Styles } from './styles';

export function SkeletonLoader() {
    return (
        <View style={Styles.contentContainer}>
            <View style={Styles.contentBox}>
                <Item height={180} />
                <Item height={220} />
                <Item height={180} />
                <Item height={280} />
                <Item height={220} />
            </View>
            <View style={Styles.contentBox}>
                <Item height={280} />
                <Item height={180} />
                <Item height={220} />
                <Item height={220} />
                <Item height={180} />
            </View>
        </View>
    );
}
