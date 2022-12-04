import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Image } from 'components';
import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from '../../styles';

interface SendButtonProps {
    pressHandle: () => void;
}

export function SendButton(props: SendButtonProps) {
    return (
        <TouchableOpacity onPress={props.pressHandle} style={[Styles.buttonContentContainer]}>
            <View style={Styles.sendButtonImageBox}>
                <Image
                    width={20}
                    tintColor={StylesValue(ThemeVariables.Color1)}
                    height={20}
                    uri={require('../../../../assets/share.png')}
                />
            </View>
        </TouchableOpacity>
    );
}
