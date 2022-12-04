import React from 'react';

import { Switch } from 'react-native';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface SwitchProps {
    changeHandle: () => void;
    isSelected: boolean;
    isDisabled: boolean;
    testId?: string;
}

export function NspSwitch(props: SwitchProps) {
    return (
        <Switch
            testID={props.testId}
            value={props.isSelected}
            onValueChange={props.changeHandle}
            disabled={props.isDisabled}
            style={Styles.contentContainer}
            trackColor={{
                false: StylesValue(ThemeVariables.Color2),
                true: StylesValue(ThemeVariables.Color2),
            }}
            thumbColor={StylesValue(ThemeVariables.HighlightColor1)}
        />
    );
}
