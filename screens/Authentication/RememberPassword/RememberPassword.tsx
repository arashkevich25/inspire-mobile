import { isIphone } from 'app-constants';
import { Formik } from 'formik';
import { ComponentId } from 'navigation';
import React from 'react';
import * as yup from 'yup';
import { Base } from '../Base/Base';
import { Form } from './Form/Form';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { FloatBackButton, Image } from 'components';
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

export function RememberPassword() {
    const { resetPasswordHandle, authToAppIsPending } = useSignIn();
    function onSubmitHandle({ email }: any) {
        resetPasswordHandle(email);
    }

    function backHandle() {
        Navigation.pop(ComponentId.ScreenRememberPassword);
    }

    return (
        <>
            {isIphone ? (
                <View style={Styles.backButtonBox}>
                    <FloatBackButton backHandle={backHandle} />
                </View>
            ) : null}
            <Base>
                <View style={Styles.roundImageBox}>
                    <Image style={Styles.resetPasswordImage} width={110} uri={require('./../assets/reset.png')} />
                </View>
                <Formik initialValues={{ email: '' }} onSubmit={onSubmitHandle} validationSchema={validationSchema}>
                    {formProps => <Form {...formProps} isPending={authToAppIsPending} />}
                </Formik>
            </Base>
        </>
    );
}
