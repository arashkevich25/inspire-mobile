import { FormikProps } from 'formik';
import React from 'react';

import { Keyboard, TouchableOpacity, View } from 'react-native';

import { ButtonFilled, InputBordered, Text } from 'components';
import I18n from 'tools/translate';
import { Sizes } from 'types';

import { Styles } from '../../styles';

interface FormProps extends FormikProps<any> {
    isPending: boolean;
}

export function Form(props: FormProps) {
    return (
        <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss} style={Styles.formContainer}>
            <Text isBold={true} fontSize={Sizes.DoubleLarge} translateKey="signUp.text.setPassword" />
            <View style={Styles.inputBoxWithError}>
                <InputBordered
                    topTitle={I18n.t('signUp.fields.password')}
                    value={props.values.password}
                    error={props.errors.password}
                    secureTextEntry={true}
                    errorIsPossible={true}
                    autoCapitalize="none"
                    onChangeText={props.handleChange('password')}
                    onBlur={props.handleBlur('password')}
                />
            </View>
            <View style={Styles.inputBoxWithError}>
                <InputBordered
                    topTitle={I18n.t('signUp.fields.repeatPassword')}
                    value={props.values.repeat}
                    secureTextEntry={true}
                    error={props.errors.repeat}
                    errorIsPossible={true}
                    autoCapitalize="none"
                    onChangeText={props.handleChange('repeat')}
                    onBlur={props.handleBlur('repeat')}
                />
            </View>
            <View style={Styles.buttonBox}>
                <ButtonFilled
                    onPressHandle={props.handleSubmit}
                    translateKey="signUp.buttons.setCredo"
                    isDisabled={props.isPending}
                    isLoading={props.isPending}
                    loaderPxSize={20}
                />
            </View>
        </TouchableOpacity>
    );
}
