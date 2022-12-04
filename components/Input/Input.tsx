import React from 'react';

import { TextInput, TextInputProps } from 'react-native';

import { StylesValue } from 'tools';
import I18n from 'tools/translate';
import { ComponentSizes, PlaceholderColor, Sizes, ThemeVariables } from 'types';

import { Styles } from './styles';

export interface InputProps extends TextInputProps {
    translateKey?: string;
    size?: ComponentSizes;
    hasHighlight?: boolean;
    name?: string;
    isEditable?: boolean;
    placeholderColor?: PlaceholderColor;
    innerRef?: any;
    children?: JSX.Element | JSX.Element[];
}

interface InputState {}

export class Input extends React.PureComponent<InputProps, InputState> {
    static defaultProps = {
        hasHighlight: false,
        isEditable: true,
        placeholderColor: 'gray',
    };

    public render(): React.ReactElement<InputProps> {
        return (
            <TextInput
                ref={this.props.innerRef}
                allowFontScaling={false}
                editable={this.props.isEditable}
                style={[
                    Styles[this.props.size || Sizes.Small],
                    Styles.input,
                    this.props.hasHighlight ? Styles.hasHighlight : {},
                ]}
                placeholderTextColor={
                    this.props.placeholderColor === 'gray'
                        ? StylesValue(ThemeVariables.TextColorGray)
                        : StylesValue(ThemeVariables.TextColorWhite)
                }
                placeholder={I18n.t(this.props.translateKey)}
                {...this.props}>
                {this.props.children}
            </TextInput>
        );
    }
}
