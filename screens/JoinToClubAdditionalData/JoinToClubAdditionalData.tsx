import { isIphone } from 'app-constants';
import { Formik } from 'formik';
import { StatutesList } from 'navigation';
import React from 'react';
import * as yup from 'yup';
import { ComponentId } from '../../navigation/constants/componentId';
import { Form, FormAndroid } from './form';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { useClub } from 'hooks';
import I18n from 'tools/translate';
import { NavProps } from 'types';

import { Styles } from './styles';

export const validationScheme = yup.object().shape({
    fullName: yup
        .string()
        .trim()
        .required(I18n.t('clubDetails.errors.fullNameIsRequired')),
    sex: yup.number().required(I18n.t('clubDetails.errors.sexIsRequired')),
    town: yup.number().required(I18n.t('clubDetails.errors.townIsRequired')),
});

interface JoinToClubAdditionalDataProps extends NavProps {
    uniqueName: string;
}

export function JoinToClubAdditionalData(props: JoinToClubAdditionalDataProps) {
    const { joinToClubHandle, updateAdditionalData, clubDetails } = useClub(props.uniqueName);
    async function submitHandle(values: any) {
        delete values.townName;
        updateAdditionalData(values);
        await Navigation.push(props.componentId, {
            component: StatutesList(joinPressHandle, I18n.t('buttons.join'), props.uniqueName, 0),
        });
    }

    async function joinPressHandle() {
        joinToClubHandle();
        await Navigation.popTo(ComponentId.ScreenClub);
    }

    return (
        <View style={Styles.contentContainer}>
            <Formik
                initialValues={{ fullName: '', sex: undefined, town: undefined, townName: '', clubId: clubDetails!.id }}
                validationSchema={validationScheme}
                onSubmit={values => submitHandle(values)}>
                {formProps => (isIphone ? <Form {...formProps} /> : <FormAndroid {...formProps} />)}
            </Formik>
        </View>
    );
}
