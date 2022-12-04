import { User } from '@inspire/types';
import { FormikProps } from 'formik';
import React, { forwardRef, useImperativeHandle } from 'react';
import { Avatar } from '../..';

import { View } from 'react-native';

import { InputBordered } from 'components';
import I18n from 'tools/translate';

import { styles } from './styles';

interface FormProps extends FormikProps<Partial<User>> {
    updateIsPending: boolean;
    userDetails: Partial<User>;
}

function Component(formikProps: FormProps, ref: any) {
    useImperativeHandle(ref, () => formikProps, [formikProps.values]);
    return (
        <View style={styles.contentContainer}>
            <View style={styles.avatarContainer}>
                <Avatar name={formikProps.userDetails.name} avatar={formikProps.userDetails.avatar} />
            </View>
            <View style={styles.fieldContainer}>
                <InputBordered
                    value={formikProps.values.name}
                    topTitle={I18n.t('profile.userDetails.fields.name')}
                    placeholder={I18n.t('profile.userDetails.fields.name')}
                    onChangeText={formikProps.handleChange('name')}
                    onBlur={formikProps.handleBlur('name')}
                    hasBackground={true}
                />
            </View>
            <View style={[styles.fieldContainer, styles.fieldContainerWithError]}>
                <InputBordered
                    value={formikProps.values.userUniqName}
                    topTitle={I18n.t('profile.userDetails.fields.uniqueName')}
                    onChangeText={formikProps.handleChange('userUniqName')}
                    onBlur={formikProps.handleBlur('userUniqName')}
                    hasBackground={true}
                    error={
                        formikProps.initialValues.userUniqName !== formikProps.values.userUniqName &&
                        formikProps.errors.userUniqName
                    }
                    errorIsPossible={true}
                    autoCapitalize="none"
                />
            </View>
            <View style={[styles.fieldContainer, styles.descriptionField]}>
                <InputBordered
                    value={formikProps.values.desc}
                    topTitle={I18n.t('profile.userDetails.fields.desc')}
                    onChangeText={formikProps.handleChange('desc')}
                    onBlur={formikProps.handleBlur('desc')}
                    multiline={true}
                    hasBackground={true}
                />
            </View>
        </View>
    );
}

export const Form = forwardRef(Component);
