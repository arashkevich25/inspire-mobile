import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { Base } from '../Base';

import { Keyboard, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Image, InputBordered } from 'components';
import { useEditUserDetails } from 'hooks';
import I18n from 'tools/translate';
import { UserIntroSetupStep } from 'types';
import { InputBox } from './components';

import { Styles as FormStyles } from './styles';

interface SetSocialMediaProps {
    progress: number;
    nextStep: () => void;
    prevStep: () => void;
    isClubMember: boolean;
    step: UserIntroSetupStep;
    steps: UserIntroSetupStep[];
}

const validationSchema = yup.object().shape({
    instagram: yup
        .string()
        .url(I18n.t('userIntroSetup.errors.urlIsInvalid'))
        .nullable(),
    facebook: yup
        .string()
        .url(I18n.t('userIntroSetup.errors.urlIsInvalid'))
        .nullable(),
    web: yup
        .string()
        .url(I18n.t('userIntroSetup.errors.urlIsInvalid'))
        .nullable(),
    linkedin: yup
        .string()
        .url(I18n.t('userIntroSetup.errors.urlIsInvalid'))
        .nullable(),
    phone: yup.number().nullable(),
    email: yup
        .string()
        .email(I18n.t('userIntroSetup.errors.emailIsInvalid'))
        .nullable(),
});

export function SetSocialMedia(props: SetSocialMediaProps) {
    const { submitContactData, contactData } = useEditUserDetails(props.nextStep);
    function onSubmitHandle(value: any) {
        submitContactData(value);
    }

    return (
        <Formik
            initialValues={{
                instagram: contactData.instagram,
                facebook: contactData.facebook,
                web: contactData.web,
                email: contactData.email,
                phone: contactData.phone,
                linkedin: contactData.linkedin,
            }}
            onSubmit={onSubmitHandle}
            validationSchema={validationSchema}>
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <Base
                    headerTkey="userIntroSetup.headers.setSocialMedia"
                    step={props.step}
                    steps={props.steps}
                    handleSubmit={handleSubmit}
                    descriptionTkey="userIntroSetup.descriptions.setSocialMedia"
                    prevStep={props.prevStep}
                    content={
                        <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
                            <InputBox hasError={!!errors.facebook}>
                                <View style={FormStyles.iconBox}>
                                    <Image width={32} uri={require('./../../../../assets/fb.png')} />
                                </View>
                                <InputBordered
                                    value={values.facebook || ''}
                                    autoCapitalize="none"
                                    placeholder={I18n.t('userIntroSetup.fields.fbUrl')}
                                    onChangeText={handleChange('facebook')}
                                    onBlur={handleBlur('password')}
                                    style={FormStyles.input}
                                    numberOfLines={1}
                                />
                            </InputBox>
                            <InputBox hasError={!!errors.instagram}>
                                <View style={FormStyles.iconBox}>
                                    <Image width={32} uri={require('./../../../../assets/ig.png')} />
                                </View>
                                <InputBordered
                                    value={values.instagram || ''}
                                    autoCapitalize="none"
                                    placeholder={I18n.t('userIntroSetup.fields.instagramUrl')}
                                    onChangeText={handleChange('instagram')}
                                    onBlur={handleBlur('instagram')}
                                    style={FormStyles.input}
                                />
                            </InputBox>
                            <InputBox hasError={!!errors.web}>
                                <View style={FormStyles.aroundIconBox}>
                                    <Image width={18} uri={require('./../../../../assets/net.png')} />
                                </View>
                                <InputBordered
                                    value={values.web || ''}
                                    placeholder={I18n.t('userIntroSetup.fields.site')}
                                    autoCapitalize="none"
                                    onChangeText={handleChange('web')}
                                    onBlur={handleBlur('web')}
                                    style={FormStyles.input}
                                />
                            </InputBox>
                            {/* {props.isClubMember ? (
                                <>
                                    <View style={FormStyles.fieldBox}>
                                        <Icon
                                            name="linkedin"
                                            style={FormStyles.icon}
                                            size={40}
                                            color={StylesValue(ThemeVariables.Color1)}
                                        />
                                        <InputForm
                                            translateKey="userIntroSetup.fields.linkedin"
                                            onChangeText={handleChange('linkedin')}
                                            onBlur={handleBlur('linkedin')}
                                            value={values.linkedin}
                                            hasError={errors.linkedin}
                                            autoCapitalize="none"
                                            style={FormStyles.input}
                                        />
                                    </View>
                                    <View style={FormStyles.fieldBox}>
                                        <Icon
                                            name="envelope"
                                            style={FormStyles.icon}
                                            size={40}
                                            color={StylesValue(ThemeVariables.Color1)}
                                        />
                                        <InputForm
                                            translateKey="userIntroSetup.fields.email"
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                            hasError={errors.email}
                                            autoCapitalize="none"
                                            style={FormStyles.input}
                                        />
                                    </View>
                                    <View style={FormStyles.fieldBox}>
                                        <Icon
                                            name="phone"
                                            style={FormStyles.icon}
                                            size={40}
                                            color={StylesValue(ThemeVariables.Color1)}
                                        />
                                        <InputForm
                                            translateKey="userIntroSetup.fields.phone"
                                            onChangeText={handleChange('phone')}
                                            onBlur={handleBlur('phone')}
                                            value={values.phone}
                                            hasError={errors.phone}
                                            autoCapitalize="none"
                                            style={FormStyles.input}
                                        />
                                    </View>
                                </>
                            ) : null} */}
                        </TouchableWithoutFeedback>
                    }
                />
            )}
        </Formik>
    );
}
