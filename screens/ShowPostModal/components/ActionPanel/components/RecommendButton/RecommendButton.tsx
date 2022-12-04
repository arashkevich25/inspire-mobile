import React from 'react';
import { Counter } from '../Counter';

import { TouchableOpacity, View } from 'react-native';

import { Image, Text } from 'components';
import { StylesValue } from 'tools';
import { Sizes, ThemeVariables } from 'types';

import { Styles } from '../../styles';

interface RecommendButtonProps {
    pressHandle: () => void;
    isActive: boolean;
    recommendCounter: number;
}

export function RecommendButton(props: RecommendButtonProps) {
    return (
        <TouchableOpacity
            onPress={props.pressHandle}
            style={[
                Styles.buttonContentContainer,
                props.isActive ? Styles.recommendIsActive : null,
                props.isActive ? Styles.buttonContentContentBorderWidth : null,
            ]}>
            <View style={Styles.recommendButtonBox}>
                <Image
                    tintColor={props.isActive ? StylesValue(ThemeVariables.Gold) : StylesValue(ThemeVariables.Color1)}
                    width={20}
                    height={20}
                    uri={require('../../../../assets/check.png')}
                />
            </View>
            <Text
                fontSize={Sizes.Small}
                numberOfLines={1}
                color={props.isActive ? 'gold' : 'color1'}
                style={Styles.recommendButtonText}
                translateKey="showPostModal.recommendButton"
            />
            <Counter counter={props.recommendCounter} />
        </TouchableOpacity>
    );
}
