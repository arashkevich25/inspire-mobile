import { isIphone } from 'app-constants/isIphone';
import { Formik } from 'formik';
import { ComponentId } from 'navigation';
import React from 'react';
import * as yup from 'yup';
import { Base } from '../Base/Base';
import { Form } from './Form/Form';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { FloatBackButton, Image } from 'components';
import { useSignUp } from 'hooks';
import I18n from 'tools/translate';

import { Styles } from '../styles';

const validationSchema = yup.object().shape({
    password: yup
        .string()
        .required(I18n.t('signUp.errors.passwordIsRequired'))
        .label(I18n.t('signIn.fields.password')),
    termsAndConditions: yup
        .boolean()
        .oneOf([true], I18n.t('signUp.errors.termsAndConditionsIsRequired'))
        .label(I18n.t('signUp.fields.termsAndConditions')),
});

export function Signup() {
    const { signUpHandle, authToAppIsPending } = useSignUp();

    function onSubmitHandle({ email, password }: any) {
        signUpHandle(email, password);
    }

    function backHandle() {
        Navigation.pop(ComponentId.ScreenSignUp);
    }

    return (
        <>
            {isIphone ? (
                <View style={Styles.backButtonBox}>
                    <FloatBackButton backHandle={backHandle} />
                </View>
            ) : null}
            <Base>
                <View style={[Styles.illustrationBox, Styles.illustrationSignUpBox]}>
                    <View>
                        <Image width={160} uri={require('./../assets/signUpWomen.png')} />
                    </View>
                    <View style={[Styles.conversationIllustration, Styles.conversationSignUpIllustration]}>
                        <Image
                            width={15}
                            style={Styles.conversationLogoIllustration}
                            uri={require('./../assets/short_logo_blue.png')}
                        />
                    </View>
                    <View>
                        <Image width={150} uri={require('./../assets/signUpMan.png')} />
                    </View>
                </View>
                <Formik
                    initialValues={{ email: '', password: '', termsAndConditions: false }}
                    onSubmit={onSubmitHandle}
                    validationSchema={validationSchema}>
                    {formProps => <Form backHandle={backHandle} {...formProps} isPending={authToAppIsPending} />}
                </Formik>
            </Base>
        </>
    );
}
