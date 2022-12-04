import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { Base } from '../Base';
import { Description } from '../Description';

import { Keyboard, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Image, Text } from 'components';
import { useEditUserDetails } from 'hooks';
import { InputForm } from 'tools/formFields';
import I18n from 'tools/translate';
import { UserIntroSetupStep } from 'types';

import { Styles } from '../../styles';
import { Styles as FormStyles } from './styles';

interface UserNameAndDescriptionProps {
    progress: number;
    step: UserIntroSetupStep;
    steps: UserIntroSetupStep[];
    nextStep: () => void;
    prevStep: () => void;
}

const validationSchema = (maxWords: number) =>
    yup.object().shape({
        name: yup.string().required(I18n.t('userIntroSetup.errors.nameIsRequired')),
        desc: yup.string().max(maxWords, I18n.t('userIntroSetup.errors.descTooLong')),
    });

export function UserNameAndDescription(props: UserNameAndDescriptionProps) {
    const { submitNewDetails, profileData } = useEditUserDetails(props.nextStep);

    function onSubmitHandle(value: any) {
        submitNewDetails(value);
    }

    return (
        <Formik
            initialValues={{ name: profileData.name, desc: profileData.desc }}
            onSubmit={onSubmitHandle}
            validationSchema={validationSchema(50)}>
            {({ handleChange, handleBlur, handleSubmit, values, errors }: any) => (
                <Base
                    headerTkey="userIntroSetup.headers.setNameAndDescription"
                    step={props.step}
                    steps={props.steps}
                    handleSubmit={handleSubmit}
                    prevStep={props.prevStep}
                    content={
                        <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
                            <View style={Styles.itemBox}>
                                <Description
                                    illustration={
                                        <Image style={FormStyles.illustrationBox} uri={require('../../assets/1.png')} />
                                    }
                                    tkey="userIntroSetup.descriptions.setNameAndDescription"
                                />
                            </View>
                            <View style={FormStyles.formContainer}>
                                <View style={FormStyles.itemBox}>
                                    <View style={FormStyles.labelBox}>
                                        <Text translateKey="userIntroSetup.fields.nameLabel" />
                                    </View>
                                    <InputForm
                                        translateKey="userIntroSetup.fields.name"
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        hasError={errors.name}
                                        style={FormStyles.titleInput}
                                    />
                                </View>
                                <View style={FormStyles.itemBox}>
                                    <View style={FormStyles.labelBox}>
                                        <Text>
                                            {I18n.t('userIntroSetup.fields.descLabel1')}
                                            <Text
                                                color="gray"
                                                isItalic={true}
                                                translateKey="userIntroSetup.fields.descLabel2"
                                            />
                                        </Text>
                                    </View>
                                    <InputForm
                                        translateKey="userIntroSetup.fields.desc"
                                        onChangeText={handleChange('desc')}
                                        onBlur={handleBlur('desc')}
                                        value={values.desc}
                                        hasError={errors.desc}
                                        multiline={true}
                                        style={FormStyles.descriptionInput}
                                        numberOfLines={5}
                                    />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    }
                />
            )}
        </Formik>
    );
}
