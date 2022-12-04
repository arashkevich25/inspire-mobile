import { Formik, FormikProps } from 'formik';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { validationScheme } from '../../../../../../constants/validationScheme';

import { Description, Title } from './components';

export interface PostDetailsValues {
    name: string;
    desc: string;
}

interface PostDetailsFormProps {
    submitHandle: (values: PostDetailsValues) => void;
    initialValues: PostDetailsValues;
}

function Component(props: PostDetailsFormProps, ref: any) {
    let formikRefProps: FormikProps<PostDetailsValues>;
    const descRef = useRef();
    const nameRef = useRef();

    useImperativeHandle(ref, () => ({
        ...formikRefProps,
        descRef,
        nameRef,
    }));

    return (
        <Formik
            initialValues={props.initialValues}
            onSubmit={(values: PostDetailsValues): void => props.submitHandle(values)}
            enableReinitialize={true}
            validationSchema={validationScheme}>
            {(formikProps: FormikProps<PostDetailsValues>): JSX.Element => {
                formikRefProps = formikProps;
                return (
                    <>
                        <Title
                            ref={nameRef}
                            onChangeHandle={formikProps.handleChange('name')}
                            formikProps={formikProps}
                        />
                        <Description
                            ref={descRef}
                            onChangeHandle={formikProps.handleChange('desc')}
                            formikProps={formikProps}
                        />
                    </>
                );
            }}
        </Formik>
    );
}

export const PostDetailsForm = forwardRef(Component);
