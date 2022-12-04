import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Image } from 'components';
import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface TopPanelProps {
    openLocationFilter: () => void;
    openLocationSearch: () => void;
    selectedMap: string;
    authenticated: boolean;
}

export function TopPanel(props: TopPanelProps) {
    return (
        <View style={Styles.container}>
            <View style={Styles.logoContainer}>
                <Image
                    width={110}
                    tintColor={StylesValue(ThemeVariables.BlueAndWhite)}
                    uri={require('../../../../assets/simplelogo.png')}
                />
            </View>
            <View style={Styles.buttonContainer}>
                <TouchableOpacity style={Styles.buttonBox} onPress={props.openLocationFilter}>
                    <Image
                        width={15}
                        height={15}
                        tintColor={
                            props.selectedMap
                                ? StylesValue(ThemeVariables.TextColorBlue)
                                : StylesValue(ThemeVariables.WhiteAndBlack)
                        }
                        uri={require('../../../../assets/post/pin.png')}
                    />
                </TouchableOpacity>
                {props.authenticated ? (
                    <TouchableOpacity style={Styles.buttonBox} onPress={props.openLocationSearch}>
                        <Image
                            width={20}
                            height={20}
                            tintColor={StylesValue(ThemeVariables.WhiteAndBlack)}
                            uri={require('../../../../assets/search.png')}
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
}
