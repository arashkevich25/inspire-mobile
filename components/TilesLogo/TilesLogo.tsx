import React from 'react';

import { View } from 'react-native';

import { Logo, Tiles } from './components';

import { Styles } from './styles';

export function TilesLogo() {
    return (
        <>
            <View style={Styles.tilesContainer}>
                <Tiles />
            </View>
            <View style={Styles.logoContainer}>
                <Logo />
            </View>
        </>
    );
}
