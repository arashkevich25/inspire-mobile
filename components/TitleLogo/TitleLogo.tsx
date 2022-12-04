import React from 'react';
import { ThemeVariables } from '../../types/ThemeVariables';

import { View } from 'react-native';

import { Image } from 'components/Image/Image';
import { StylesValue } from '../../tools/StylesValue';

import { Styles } from './styles';

export function TitleLogo() {
    return (
        <View style={Styles.contentContainer}>
            <Image
                width={80}
                tintColor={StylesValue(ThemeVariables.BlueAndWhite)}
                uri={require('../../assets/simplelogo.png')}
            />
        </View>
    );
}
