import React from 'react';

import { RefreshControl, RefreshControlProps } from 'react-native';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

interface CustomRefreshControlProps extends RefreshControlProps {}

export function CustomRefreshControl(props: CustomRefreshControlProps) {
    return (
        <RefreshControl
            tintColor={StylesValue(ThemeVariables.TextColor1)}
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
            {...props}
        />
    );
}
