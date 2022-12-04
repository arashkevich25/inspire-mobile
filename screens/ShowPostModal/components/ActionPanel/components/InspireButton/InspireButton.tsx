import React from 'react';
import { Counter } from '../Counter';

import { TouchableOpacity, View } from 'react-native';

import { Image, Text } from 'components';
import { StylesValue } from 'tools';
import { Sizes, ThemeVariables } from 'types';

import { Styles } from '../../styles';

interface InspireButtonProps {
    pressHandle: () => void;
    isActive: boolean;
    inspiredCounter: number;
}

export function InspireButton(props: InspireButtonProps) {
    return (
        <TouchableOpacity
            onPress={props.pressHandle}
            style={[
                Styles.buttonContentContainer,
                Styles.buttonContentContentPaddingRight,
                props.isActive ? Styles.inspiredIsActive : null,
                props.isActive ? Styles.buttonContentContentBorderWidth : null,
            ]}>
            <View style={Styles.inspireButtonImageBox}>
                <Image
                    width={25}
                    height={25}
                    tintColor={
                        props.isActive
                            ? StylesValue(ThemeVariables.HighlightColor1)
                            : StylesValue(ThemeVariables.Color1)
                    }
                    uri={require('../../../../assets/inspire.png')}
                />
            </View>
            <Text
                fontSize={Sizes.Small}
                style={Styles.inspireButtonText}
                color={props.isActive ? 'blue' : 'color1'}
                translateKey="showPostModal.inspirationButton"
            />
            <Counter counter={props.inspiredCounter} />
        </TouchableOpacity>
    );
}
