import React from 'react';

import { TouchableOpacity } from 'react-native';

import { Text } from 'components/Text';

import { Styles } from './styles';

interface PillProps<T> {
    categoryTKey?: string;
    isSelected: boolean;
    argsHandle: T;
    children?: React.ReactNode;
    selectHandle: (arg: T) => void;
}

export function Pill<T = any>(props: PillProps<T>) {
    function onPressHandle() {
        props.selectHandle(props.argsHandle);
    }

    if (props.categoryTKey) {
        return (
            <TouchableOpacity
                style={[Styles.contentContainer, props.isSelected ? Styles.selected : Styles.unselected]}
                onPress={onPressHandle}
                testID={`pill['${props.categoryTKey}']`}>
                <Text color={props.isSelected ? 'blue' : 'color1'} translateKey={props.categoryTKey} />
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            onPress={onPressHandle}
            style={[Styles.contentContainer, props.isSelected ? Styles.selected : Styles.unselected]}>
            <Text color={props.isSelected ? 'blue' : 'color1'}>{props.children}</Text>
        </TouchableOpacity>
    );
}
