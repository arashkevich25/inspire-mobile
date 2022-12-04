import React from 'react';

import { TextInput } from 'react-native';

import { StylesValue } from 'tools';
import I18n from 'tools/translate';
import { ThemeVariables } from 'types';

import { Styles } from '../../styles';

interface NameFieldProps {
    onChangeHandle: (event: any) => void;
    value: string;
    isValid: boolean;
}

export function NameField(props: NameFieldProps) {
    return (
        <TextInput
            placeholderTextColor={
                props.isValid ? StylesValue(ThemeVariables.TextColorRed) : StylesValue(ThemeVariables.TextColorGray)
            }
            style={Styles.nameField}
            value={props.value}
            onChangeText={props.onChangeHandle}
            placeholder={I18n.t('addPost.fields.postQuestionTitle')}
        />
    );
}
