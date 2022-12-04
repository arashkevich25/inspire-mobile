import { User, UserContactData, UserKinds } from '@inspire/types';
import { Formik, FormikProps } from 'formik';
import React, { useRef } from 'react';
import * as yup from 'yup';
import { Form } from './Form/Form';
import { FormBasicMemberContact } from './Form/FormBasicMemberContact';
import { FormClubMemberContact } from './Form/FormClubMemberContact';

import { ScrollView } from 'react-native';

import { useKeyboardState } from 'hooks';
import { emptyFn } from 'tools/emptyFn';
import I18n from 'tools/translate';
import { request } from '../../../../tools/request';

import { styles } from './styles';

interface BasicDataProps {
    selectedAvatar: string | null;
    userDetails: Partial<User>;
    contactData: UserContactData;
    submitHandle: (details: Partial<User>) => void;
    submitUpdateContactData: (details: UserContactData) => void;
    updateIsPending: boolean;
}

const validationScheme = yup.object().shape({
    userUniqName: yup
        .string()
        .min(3, I18n.t('profile.texts.uniqueNameMin'))
        .required(I18n.t('profile.texts.uniqueNameIsRequired'))
        .trim()
        .matches(/^[a-z0-9_]+$/, I18n.t('profile.texts.uniqueNameAllowCharacters'))
        .test('checkUserNameUnique', I18n.t('profile.texts.uniqueNameExist'), (value: string) =>
            request('GET', `/v2/manage/user/${value}/validate`),
        ),
});

export function BasicData(props: BasicDataProps) {
    useKeyboardState(emptyFn, submitForm);
    const userData = useRef<FormikProps<Partial<User>>>();
    const contactData = useRef<FormikProps<UserContactData>>();
    const clubMemberContactData = useRef<FormikProps<UserContactData>>();

    function submitForm() {
        const userDataWasChanged = JSON.stringify(userData.current?.values) !== JSON.stringify(props.userDetails);
        const contactDataWasChanged = JSON.stringify(contactData.current?.values) !== JSON.stringify(props.contactData);
        const memberContactDataWasChanged =
            JSON.stringify(clubMemberContactData.current?.values) !== JSON.stringify(props.contactData);

        if (
            userDataWasChanged &&
            props.userDetails.userUniqName === userData.current?.values.userUniqName &&
            !userData.current?.isValid
        ) {
            props.submitHandle(userData.current!.values);
            return;
        }
        if (userDataWasChanged && userData.current?.isValid) {
            userData.current?.submitForm();
        }
        if (contactDataWasChanged) {
            contactData.current?.submitForm();
        }
        if (memberContactDataWasChanged) {
            clubMemberContactData.current?.submitForm();
        }
    }

    if (props.selectedAvatar) {
        userData.current?.submitForm();
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Formik
                validationSchema={validationScheme}
                enableReinitialize={true}
                initialValues={props.userDetails}
                onSubmit={values => props.submitHandle(values)}>
                {formProps => (
                    <Form
                        {...formProps}
                        ref={userData}
                        userDetails={props.userDetails}
                        updateIsPending={props.updateIsPending}
                    />
                )}
            </Formik>
            {props.userDetails.kind === UserKinds.Basic ? (
                <Formik initialValues={props.contactData} onSubmit={values => props.submitUpdateContactData(values)}>
                    {formProps => (
                        <FormBasicMemberContact
                            {...formProps}
                            ref={contactData}
                            userDetails={props.contactData}
                            updateIsPending={props.updateIsPending}
                        />
                    )}
                </Formik>
            ) : (
                <Formik initialValues={props.contactData} onSubmit={values => props.submitUpdateContactData(values)}>
                    {formProps => (
                        <FormClubMemberContact
                            {...formProps}
                            ref={clubMemberContactData}
                            userDetails={props.contactData}
                            updateIsPending={props.updateIsPending}
                        />
                    )}
                </Formik>
            )}
        </ScrollView>
    );
}
