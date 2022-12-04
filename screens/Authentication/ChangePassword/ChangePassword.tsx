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
import { useSignUp } from 'hooks';
import I18n from 'tools/translate';

import { Styles } from '../styles';

const validationSchema = yup.object().shape({
    password: yup
        .string()
        .required(I18n.t('signUp.errors.passwordIsRequired'))
        .label(I18n.t('signIn.fields.password')),
    repeat: yup
        .string()
        .required(I18n.t('signUp.errors.passwordIsRequired'))
        .when('password', {
            is: val => (val && val.length > 0 ? true : false),
            then: yup.string().oneOf([yup.ref('password')], I18n.t('signIn.fields.bothPasswordsShouldBeTheSame')),
        }),
});

interface ChangePasswordProps {
    token: string;
}

export function ChangePassword(props: ChangePasswordProps) {
    const { setPasswordHandle, authToAppIsPending } = useSignUp();

    function onSubmitHandle({ password }: any) {
        setPasswordHandle(props.token, password);
    }

    function backHandle() {
        Navigation.popTo(ComponentId.AppLogin);
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
                    <Image
                        style={Styles.changePasswordImage}
                        width={110}
                        uri={require('./../assets/provide_password.png')}
                    />
                </View>
                <Formik
                    initialValues={{ password: '', repeat: '', token: props.token }}
                    onSubmit={onSubmitHandle}
                    validationSchema={validationSchema}>
                    {formProps => <Form {...formProps} isPending={authToAppIsPending} />}
                </Formik>
            </Base>
        </>
    );
}
