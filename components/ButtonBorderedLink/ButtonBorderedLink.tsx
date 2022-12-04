import React from 'react';
import { Text } from '../Text';

import { TouchableOpacity } from 'react-native';

import { Sizes } from 'types';

import { Styles } from './styles';

interface ButtonBorderedLinkProps {
    text?: string;
    translateKey?: string;
    size?: Sizes;
    onPressHandle: () => void;
}

export function ButtonBorderedLink(props: ButtonBorderedLinkProps) {
    return (
        <TouchableOpacity onPress={props.onPressHandle} style={Styles.contentContainer}>
            {props.translateKey ? (
                <Text style={Styles.text} color="blue" fontSize={props.size} translateKey={props.translateKey} />
            ) : props.text ? (
                <Text style={Styles.text} color="blue" fontSize={props.size}>
                    {props.text}
                </Text>
            ) : null}
        </TouchableOpacity>
    );
}

ButtonBorderedLink.defaultProps = {
    size: Sizes.Small,
};
