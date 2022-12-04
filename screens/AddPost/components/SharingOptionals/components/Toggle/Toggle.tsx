import React from 'react';

import { View } from 'react-native';

import { NspSwitch } from 'components';

import { Styles } from './styles';

interface ToggleProps {
    isSelected: boolean;
    changeHandle: () => void;
    children: JSX.Element;
    isDisabled: boolean;
    testId: string;
}

export function Toggle(props: ToggleProps) {
    return (
        <View style={Styles.contentContainer}>
            <View>{props.children}</View>
            <NspSwitch
                testId={props.testId}
                isSelected={props.isSelected}
                changeHandle={props.changeHandle}
                isDisabled={props.isDisabled}
            />
        </View>
    );
}
