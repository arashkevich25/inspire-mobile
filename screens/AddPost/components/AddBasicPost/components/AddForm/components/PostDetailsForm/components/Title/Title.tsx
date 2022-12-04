import { FormikProps } from 'formik';
import React, { forwardRef } from 'react';
import { PostDetailsValues } from '../../PostDetailsForm';

import { Input } from 'components';
import { addPost } from 'e2e/selectors';
import I18n from 'tools/translate';

import { Styles } from '../../styles';

interface TitleProps {
    onChangeHandle: (event: any) => void;
    formikProps: FormikProps<PostDetailsValues>;
}

function Component(props: TitleProps, ref: any) {
    return (
        <Input
            innerRef={ref}
            testID={addPost.fields.postTitle}
            value={props.formikProps.values.name}
            onChangeText={props.onChangeHandle}
            hasHighlight={false}
            placeholderColor="gray"
            style={[
                { fontSize: 18, height: 50 },
                Styles.postDetailField,
                !Boolean(props.formikProps.errors.name) ? null : Styles.errorState,
            ]}
            placeholder={I18n.t('addPost.fields.postTitle')}
            size="medium"
        />
    );
}

export const Title = forwardRef(Component);
