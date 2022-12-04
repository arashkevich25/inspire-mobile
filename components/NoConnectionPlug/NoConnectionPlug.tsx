import React from 'react';

import { Image, View } from 'react-native';

import { Text } from 'components/Text';
import { Sizes } from 'types';

import { Styles } from './styles';

export function NoConnectionPlug() {
    return (
        <View style={Styles.contentContainer}>
            <Image style={Styles.icon} source={require('./assets/no-internet.png')} />
            <View style={Styles.hintTextBox}>
                <Text isBold={true} color="gray" fontSize={Sizes.Large} translateKey="text.noInternetConnection" />
            </View>
        </View>
    );
}
