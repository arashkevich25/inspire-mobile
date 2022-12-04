import React from 'react';

import { StyleSheet, Switch, View } from 'react-native';

import { Input, Text } from 'components';
import { InputProps } from 'components/Input/Input';
import { StylesValue } from 'tools/StylesValue';
import { Sizes, ThemeVariables } from 'types';

interface FormFieldProps extends InputProps {
    hasError?: string;
    label?: string;
    textAlign?: string;
}

interface FormSwitchProps {
    hasError?: string;
    label?: any;
    value?: boolean;
    onValueChange?: (e: any) => void;
    testID?: string;
}

export const InputForm: React.FC<FormFieldProps> = (props: FormFieldProps): JSX.Element => {
    return (
        <View style={Styles.inputContainer}>
            {props.label ? <Text color="color1" translateKey={props.label} /> : null}
            <Input placeholderColor="gray" {...props} />
            <Text color="gray" fontSize={Sizes.XSmall}>
                {props.hasError}
            </Text>
        </View>
    );
};

InputForm.defaultProps = {
    hasError: ' ',
};

export const BorderedInputForm: React.FC<FormFieldProps> = (props: FormFieldProps): JSX.Element => {
    return (
        <View style={Styles.inputContainer}>
            {props.label && props.value ? <Text color="gray" translateKey={props.label} /> : <Text></Text>}
            <Input placeholderColor="gray" {...props} />
            <Text color="gray" fontSize={Sizes.XSmall}>
                {props.hasError}
            </Text>
        </View>
    );
};

export const SwitchForm: React.FC<FormSwitchProps> = (props: FormSwitchProps): JSX.Element => {
    return (
        <View style={Styles.switchContainer}>
            <View style={Styles.switchBox}>
                <Switch
                    trackColor={{
                        false: StylesValue(ThemeVariables.BorderColor1),
                        true: StylesValue(ThemeVariables.HighlightColor2),
                    }}
                    thumbColor={StylesValue(ThemeVariables.HighlightColor1)}
                    {...props}
                />
                <View style={Styles.switchLabelBox}>{props.label}</View>
            </View>
            <Text>{props.hasError}</Text>
        </View>
    );
};

SwitchForm.defaultProps = {
    hasError: ' ',
};

const Styles = StyleSheet.create({
    inputContainer: {},
    switchContainer: {
        marginBottom: 20,
    },
    switchBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    switchLabelBox: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginLeft: 30,
    },
});
