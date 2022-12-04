import { FormikProps } from 'formik';
import React from 'react';

import { Keyboard, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Button, ButtonFilled, ButtonTypes, InputBordered, Text } from 'components';
import { lpPages } from 'configs/lpPages';
import { WebView } from 'navigation/components';
import { SwitchForm } from 'tools/formFields';
import I18n from 'tools/translate';
import { Sizes } from 'types';

import { Styles } from '../../styles';

interface FormProps extends FormikProps<any> {
    isPending: boolean;
    backHandle: () => void;
}

export function Form(props: FormProps) {
    function openTermsAndConditions() {
        Navigation.showModal({ stack: { children: [{ component: WebView(lpPages.rules) }] } });
    }

    function setSwitchValue(state: boolean) {
        props.setFieldValue('termsAndConditions', state);
    }
    return (
        <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss} style={Styles.formContainer}>
            <Text isBold={true} fontSize={Sizes.DoubleLarge} translateKey="signUp.heading" />
            <View style={[Styles.inputBoxWithError, Styles.zeroTopMargin]}>
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
            <View style={[Styles.inputBoxWithError, Styles.zeroTopMargin]}>
                <InputBordered
                    topTitle={I18n.t('signUp.fields.password')}
                    value={props.values.password}
                    error={props.errors.email}
                    secureTextEntry={true}
                    errorIsPossible={true}
                    autoCapitalize="none"
                    onChangeText={props.handleChange('password')}
                    onBlur={props.handleBlur('password')}
                />
            </View>
            <View style={[Styles.inputBoxWithError, Styles.zeroTopMargin, Styles.switchBox]}>
                <SwitchForm
                    onValueChange={setSwitchValue}
                    label={
                        <>
                            <Text translateKey="signUp.text.termsAndConditions" />
                            <TouchableOpacity onPress={openTermsAndConditions}>
                                <Text color="blue" translateKey="signUp.fields.termsAndConditions" />
                            </TouchableOpacity>
                        </>
                    }
                    value={props.values.termsAndConditions}
                    hasError={props.errors.termsAndConditions as string}
                />
            </View>
            <View style={Styles.buttonBox}>
                <ButtonFilled
                    onPressHandle={props.handleSubmit}
                    translateKey="signUp.buttons.signUp"
                    isDisabled={props.isPending}
                    isLoading={props.isPending}
                    loaderPxSize={20}
                />
            </View>
            <View style={Styles.signUpLoginScreenBox}>
                <Button color="blue" onPress={props.backHandle} size={Sizes.Small} type={ButtonTypes.Link}>
                    <Text color="blue" fontSize={Sizes.Medium} translateKey="signUp.text.hasAccount1" />{' '}
                    <Text color="blue" fontSize={Sizes.Medium} isBold={true} translateKey="signUp.text.hasAccount2" />
                </Button>
            </View>
        </TouchableOpacity>
    );
}
