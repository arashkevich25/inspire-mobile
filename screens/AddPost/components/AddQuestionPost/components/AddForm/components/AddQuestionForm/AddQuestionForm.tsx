import { Formik, FormikProps } from 'formik';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { validationAddQuestionScheme } from '../../../../../../constants/validationAddQuestionScheme';
import { QuestionDetailsValues, SelectedBackground } from '../../../../../../types/QuestionDetailsValues';

import { View } from 'react-native';

import { DescriptionField, NameField } from './components';
import { Backgrounds } from './components/Backgrounds';

import { Styles } from './styles';

interface FormProps {
    submitHandle: (values: QuestionDetailsValues) => void;
    initialValues: QuestionDetailsValues;
}

function Component(props: FormProps, ref: any) {
    let formikRefProps: FormikProps<QuestionDetailsValues>;
    const descRef = useRef();

    useImperativeHandle(ref, () => ({
        ...formikRefProps,
        descRef,
    }));
    return (
        <Formik
            initialValues={props.initialValues}
            onSubmit={(values: QuestionDetailsValues): void => props.submitHandle(values)}
            enableReinitialize={true}
            validationSchema={validationAddQuestionScheme}>
            {(formikProps: FormikProps<QuestionDetailsValues>) => {
                formikRefProps = formikProps;
                function setBackground(background: SelectedBackground) {
                    formikProps.setValues({ ...formikProps.values, background });
                }
                return (
                    <View style={Styles.contentContainer}>
                        <View style={Styles.fieldContainer}>
                            <NameField
                                isValid={Boolean(formikProps.errors.name && formikProps.touched.name)}
                                value={formikProps.values.name}
                                onChangeHandle={formikProps.handleChange('name')}
                            />
                        </View>
                        <DescriptionField
                            ref={descRef}
                            value={formikProps.values.desc}
                            onChangeHandle={formikProps.handleChange('desc')}
                        />
                        <Backgrounds
                            selectBackground={setBackground}
                            selectedBackground={formikProps.values.background}
                            title={formikProps.values.name}
                        />
                    </View>
                );
            }}
        </Formik>
    );
}

export const AddQuestionForm = forwardRef(Component);
