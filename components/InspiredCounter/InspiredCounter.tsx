import React from 'react';
import { Text } from '../Text';
import { TextColor } from '../Text/types';

import { View } from 'react-native';

import { Sizes } from 'types';
import { globalTestsSelectors } from '../../../e2e/selectors';

import { Styles } from './styles';

interface InspiredCounterProps {
    count: number;
    isActive: boolean;
    color?: TextColor;
}

export function InspiredCounter(props: InspiredCounterProps) {
    return (
        <View style={Styles.contentContainer}>
            <View
                style={[
                    Styles.counterBox,
                    props.isActive ? Styles.active : props.color === 'white' ? Styles.borderWhite : Styles.borderDark,
                ]}>
                <Text
                    testID={globalTestsSelectors.text.inspireCounter}
                    color={props.isActive ? 'blue' : props.color || 'white'}
                    isBold={true}
                    style={Styles.text}
                    fontSize={Sizes.XSmall}>
                    {props.count}
                </Text>
            </View>
            {/* <Image
                style={[
                    Styles.icon,
                    {
                        tintColor: props.isActive
                            ? StylesValue(ThemeVariables.HighlightColor1)
                            : props.color === 'white'
                            ? StylesValue(ThemeVariables.White)
                            : StylesValue(ThemeVariables.Color1),
                    },
                ]}
                source={require('../../assets/navigation/nonactive/inspired.png')}
            /> */}
        </View>
    );
}
