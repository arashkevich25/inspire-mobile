import React from 'react';

import { View } from 'react-native';

import { Image } from 'components/Image/Image';
import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

export function Logo() {
    return (
        <View style={Styles.contentContainer}>
            <Image
                height={50}
                width={150}
                tintColor={StylesValue(ThemeVariables.BlueAndWhite)}
                uri={require('../../../../assets/simplelogo.png')}
            />
        </View>
    );
}
