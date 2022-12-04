import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { Base } from '../Base/Base';
import { Form } from './Form/Form';

import { View } from 'react-native';

import { Image } from 'components';
import { useSignIn } from 'hooks';
import I18n from 'tools/translate';

import { Styles } from '../styles';

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email(I18n.t('signUp.errors.emailIsNotCorrect'))
        .required(I18n.t('signUp.errors.emailIsRequired'))
        .label(I18n.t('signIn.fields.email')),
});

export function Login() {
    const { signInHandle, authToAppIsPending } = useSignIn();

    function onSubmitHandle({ email, password }: any) {
        signInHandle(email, password);
    }

    return (
        <Base>
            <View style={Styles.illustrationBox}>
                <View>
                    <Image width={160} uri={require('./../assets/man.png')} />
                </View>
                <View style={Styles.conversationIllustration}>
                    <Image width={120} uri={require('./../assets/login_conv_cloud.png')} />
                    <Image
                        width={15}
                        style={Styles.conversationLogoIllustration}
                        uri={require('./../assets/short_logo_blue.png')}
                    />
                </View>
                <View style={Styles.illustrationLoginWoman}>
                    <Image width={150} uri={require('./../assets/woman.png')} />
                </View>
            </View>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={onSubmitHandle}
                validationSchema={validationSchema}>
                {formProps => <Form {...formProps} isPending={authToAppIsPending} />}
            </Formik>
        </Base>
    );
}
