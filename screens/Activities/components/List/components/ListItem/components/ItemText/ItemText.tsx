import React from 'react';

import { Text } from 'components';

import { Styles } from './styles';

interface ItemTextProps {
    isRead: boolean;
    isBold: boolean;
    children?: any;
    translateKey?: any;
}

export function ItemText(props: ItemTextProps) {
    return (
        <Text style={[Styles.base, props.isBold ? Styles.bolded : null, props.isRead ? Styles.read : null]} {...props}>
            {props.children}
        </Text>
    );
}
