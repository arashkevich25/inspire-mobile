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
            <View style={Styles.resetPasswordTitle}>
                <Text isBold={true} fontSize={Sizes.DoubleLarge} translateKey="signIn.resetText" />
            </View>
            <View style={Styles.restPasswordDescription}>
                <Text
                    style={Styles.restPasswordDescriptionText}
                    fontSize={Sizes.Medium}
                    translateKey="signIn.resetTextDescription"
                />
            </View>
            <View style={Styles.inputBoxWithError}>
                <InputBordered
                    topTitle={I18n.t('signUp.fields.email')}
                    errorIsPossible={true}
                    value={props.values.email}
                    onChangeText={props.handleChange('email')}
                    onBlur={props.handleBlur('email')}
                    error={props.errors.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View style={Styles.buttonBox}>
                <ButtonFilled
                    onPressHandle={props.handleSubmit}
                    translateKey="signIn.buttons.resetPassword"
                    isDisabled={props.isPending}
                    isLoading={props.isPending}
                    loaderPxSize={20}
                />
            </View>
        </TouchableOpacity>
    );
}
