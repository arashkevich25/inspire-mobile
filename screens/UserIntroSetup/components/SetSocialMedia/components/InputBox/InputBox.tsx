import React from 'react';

import { View } from 'react-native';

import { Styles } from '../../styles';

interface InputBoxProps {
    children: any;
    hasError: boolean;
}

export function InputBox(props: InputBoxProps) {
    return <View style={[Styles.fieldBox, props.hasError ? Styles.fieldBoxError : null]}>{props.children}</View>;
}
