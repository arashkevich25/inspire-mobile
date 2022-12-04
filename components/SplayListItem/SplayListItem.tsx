import { ListItem as Item } from 'native-base';
import React from 'react';

import { Styles } from './styles';

interface SplayListItemProps {
    pressHandle?: () => void;
    children: JSX.Element[] | JSX.Element;
    testId?: string;
}

export function SplayListItem(props: SplayListItemProps) {
    return (
        <Item
            testID={props.testId}
            last={true}
            noIndent
            thumbnail
            noBorder
            onPress={props.pressHandle}
            style={Styles.contentContainer}>
            {props.children}
        </Item>
    );
}
