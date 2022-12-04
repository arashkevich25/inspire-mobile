import React from 'react';

import { TextInput } from 'react-native';

import { TextParser } from 'containers/TextParser';
import { useDescriptionHashtagSearchTextInput } from 'hooks';
import I18n from 'tools/translate';

import { Styles } from '../../styles';

interface DescriptionFieldProps {
    onChangeHandle: (event: any) => void;
    value: string;
}

function Component(props: DescriptionFieldProps, ref: any) {
    const hashTagRender = useDescriptionHashtagSearchTextInput(props.value, ref);

    return (
        <TextInput
            ref={ref}
            placeholderTextColor="gray"
            style={Styles.descriptionField}
            multiline={true}
            keyboardType="twitter"
            numberOfLines={4}
            onChangeText={props.onChangeHandle}
            placeholder={I18n.t('addPost.fields.postQuestionDescription')}>
            <TextParser renderHash={hashTagRender}>{props.value}</TextParser>
        </TextInput>
    );
}

export const DescriptionField = React.forwardRef(Component);
