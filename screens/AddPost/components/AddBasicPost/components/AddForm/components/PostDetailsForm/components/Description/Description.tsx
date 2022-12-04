import { FormikProps } from 'formik';
import React, { forwardRef } from 'react';
import { PostDetailsValues } from '../../PostDetailsForm';

import { Input } from 'components';
import { TextParser } from 'containers/TextParser';
import { addPost } from 'e2e/selectors';
import { useDescriptionHashtagSearchTextInput } from 'hooks';
import I18n from 'tools/translate';

import { Styles } from '../../styles';

interface DescriptionProps {
    onChangeHandle: (description: string) => void;
    formikProps: FormikProps<PostDetailsValues>;
}

function Component(props: DescriptionProps, ref: any) {
    const hashTagRender = useDescriptionHashtagSearchTextInput(props.formikProps.values.desc, ref);
    return (
        <Input
            innerRef={ref}
            testID={addPost.fields.postDescription}
            multiline={true}
            numberOfLines={4}
            placeholderColor="gray"
            keyboardType="twitter"
            hasHighlight={false}
            placeholder={I18n.t('addPost.fields.postDescription')}
            size="medium"
            style={[
                { height: 150 },
                Styles.postDetailField,
                !Boolean(props.formikProps.errors.desc) ? null : Styles.errorState,
            ]}
            onChangeText={props.onChangeHandle}>
            <TextParser renderHash={hashTagRender}>{props.formikProps.values.desc}</TextParser>
        </Input>
    );
}

export const Description = forwardRef(Component);
