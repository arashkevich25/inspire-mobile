import { isIphone } from 'app-constants';
import { FormikProps } from 'formik';
import { ComponentId, RememberPassword, SignUp } from 'navigation';
import React from 'react';

import { Keyboard, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Button, ButtonFilled, ButtonTypes, InputBordered, Text } from 'components';
import I18n from 'tools/translate';
import { Sizes } from 'types';
import { AppleLogin, FacebookLogin, GoogleLogin } from '../components';

import { Styles } from '../../styles';

interface FormProps extends FormikProps<any> {
    isPending: boolean;
}

export function Form(props: FormProps) {
    function openSignUp() {
        Navigation.push(ComponentId.AppLogin, { component: SignUp });
    }

    function openRememberPassword() {
        Navigation.push(ComponentId.AppLogin, { component: RememberPassword });
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss} style={Styles.formContainer}>
            <Text isBold={true} fontSize={Sizes.DoubleLarge} translateKey="signIn.text.login" />
            <View style={Styles.inputBoxWithError}>
                <InputBordered
                    topTitle={I18n.t('signIn.fields.email')}
                    errorIsPossible={true}
                    value={props.values.email}
                    onChangeText={props.handleChange('email')}
                    onBlur={props.handleBlur('email')}
                    error={props.errors.email}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
            </View>
            <View style={Styles.inputBox}>
                <InputBordered
                    topTitle={I18n.t('signIn.fields.password')}
                    value={props.values.password}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={props.handleChange('password')}
                    onBlur={props.handleBlur('password')}
                />
            </View>
            <View style={Styles.dontRememberPasswordBox}>
                <Button
                    color="blue"
                    onPress={openRememberPassword}
                    size={Sizes.Small}
                    type={ButtonTypes.Link}
                    translateKey="signIn.buttons.forgotPassword"
                />
            </View>
            <View style={Styles.buttonBox}>
                <ButtonFilled
                    onPressHandle={props.handleSubmit}
                    translateKey="signIn.buttons.login"
                    isDisabled={props.isPending}
                    isLoading={props.isPending}
                    loaderPxSize={20}
                />
            </View>
            <View style={Styles.signUpLoginScreenBox}>
                <Button color="blue" onPress={openSignUp} size={Sizes.Small} type={ButtonTypes.Link}>
                    <Text color="blue" fontSize={Sizes.Medium} translateKey="signIn.text.newAccountText1" />{' '}
                    <Text
                        color="blue"
                        fontSize={Sizes.Medium}
                        isBold={true}
                        translateKey="signIn.text.newAccountText2"
                    />
                </Button>
            </View>
            <View style={Styles.alternativeLogin}>
                <View style={Styles.dividerLine} />
                <View style={Styles.alternativeLoginText}>
                    <Text fontSize={Sizes.Medium} translateKey="signIn.text.alternativeLogin" />
                </View>
                <View style={Styles.dividerLine} />
            </View>
            <View style={Styles.alternativeLoginButtons}>
                {isIphone ? <AppleLogin /> : null}
                <FacebookLogin />
                <GoogleLogin />
            </View>
        </TouchableOpacity>
    );
}
