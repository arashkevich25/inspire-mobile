import React from 'react';
import { Text } from '../Text';
import { ButtonType } from './types/ButtonType';
import { ButtonTypes } from './types/ButtonTypes';

import { ActivityIndicator, ButtonProps, TouchableOpacity, View } from 'react-native';

import { TextColor } from 'components/Text/types';
import { StylesValue } from 'tools';
import I18n from 'tools/translate';
import { ComponentSizes, ThemeVariables } from 'types';

import { Styles } from './styles';

export type ButtonSizes = 'wide' | 'poor' | ComponentSizes;

interface StyledButtonProps extends Omit<ButtonProps, 'title'> {
    translateKey?: string;
    type: ButtonType;
    size?: ButtonSizes;
    isLoading: boolean;
    isBlocked?: boolean;
    color?: TextColor | string;
    children?: any;
}

interface ButtonState {}

export class Button extends React.PureComponent<StyledButtonProps, ButtonState> {
    public static defaultProps = {
        type: ButtonTypes.Normal,
        size: 'medium',
        isLoading: false,
        isBlocked: false,
    };

    public render(): React.ReactElement<StyledButtonProps> {
        const isBlocked = this.props.isLoading || this.props.isBlocked;
        return (
            <TouchableOpacity {...this.props} disabled={isBlocked} style={Styles.contentContainer}>
                <Text
                    style={[
                        Styles.text,
                        this.props.size === 'small' ? Styles.smallLineHeight : Styles.normalLineHeight,
                        Styles[this.props.size || 'small'],
                        Styles[this.props.type],
                        this.props.isBlocked ? Styles.blocked : {},
                        Styles[this.props.type === ButtonTypes.Filled ? 'white' : this.props.color || 'color1'],
                    ]}>
                    {this.props.translateKey ? I18n.t(this.props.translateKey) : this.props.children}
                </Text>
                <View style={Styles.loaderContainer}>
                    {this.props.isLoading ? (
                        <ActivityIndicator
                            size="small"
                            color={
                                this.props.type === ButtonTypes.Normal
                                    ? StylesValue(ThemeVariables.HighlightColor1)
                                    : StylesValue(ThemeVariables.TextColorWhite)
                            }
                        />
                    ) : null}
                </View>
            </TouchableOpacity>
        );
    }
}
