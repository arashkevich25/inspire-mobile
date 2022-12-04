import { UserContactData } from '@inspire/types';
import { FormikProps } from 'formik';
import React, { forwardRef, useImperativeHandle } from 'react';

import { View } from 'react-native';

import { InputBordered } from 'components';
import I18n from 'tools/translate';

import { styles } from './styles';

interface FormClubMemberContactProps extends FormikProps<UserContactData> {
    updateIsPending: boolean;
    userDetails: UserContactData;
}

function Component(formikProps: FormClubMemberContactProps, ref: any) {
    useImperativeHandle(ref, () => formikProps, [formikProps.values]);
    return (
        <View style={styles.contactDataBox}>
            <View style={styles.fieldContainer}>
                <InputBordered
                    value={formikProps.values.web || ''}
                    topTitle={I18n.t('profile.userDetails.fields.site')}
                    onChangeText={formikProps.handleChange('web')}
                    onBlur={formikProps.handleBlur('web')}
                    translateKey="profile.userDetails.fields.site"
                    hasBackground={true}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.fieldContainer}>
                <InputBordered
                    value={formikProps.values.facebook || ''}
                    topTitle={I18n.t('profile.userDetails.fields.fbUrl')}
                    onChangeText={formikProps.handleChange('facebook')}
                    onBlur={formikProps.handleBlur('facebook')}
                    hasBackground={true}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.fieldContainer}>
                <InputBordered
                    value={formikProps.values.instagram || ''}
                    topTitle={I18n.t('profile.userDetails.fields.instagramUrl')}
                    onChangeText={formikProps.handleChange('instagram')}
                    onBlur={formikProps.handleBlur('instagram')}
                    hasBackground={true}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.fieldContainer}>
                <InputBordered
                    value={formikProps.values.linkedin || ''}
                    topTitle={I18n.t('profile.userDetails.fields.linkedin')}
                    onChangeText={formikProps.handleChange('linkedin')}
                    onBlur={formikProps.handleBlur('linkedin')}
                    hasBackground={true}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.fieldContainer}>
                <InputBordered
                    value={formikProps.values.phone || ''}
                    topTitle={I18n.t('profile.userDetails.fields.phone')}
                    onChangeText={formikProps.handleChange('phone')}
                    onBlur={formikProps.handleBlur('phone')}
                    hasBackground={true}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.fieldContainer}>
                <InputBordered
                    value={formikProps.values.email || ''}
                    topTitle={I18n.t('profile.userDetails.fields.contactEmail')}
                    onChangeText={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                    hasBackground={true}
                    autoCapitalize="none"
                />
            </View>
        </View>
    );
}

export const FormClubMemberContact = forwardRef(Component);
