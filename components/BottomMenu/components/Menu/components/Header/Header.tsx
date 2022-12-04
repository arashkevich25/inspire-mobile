import { BottomMenuItem } from '@inspire/types';
import React from 'react';

import { View } from 'react-native';

import { BackBox } from './components/BackBox';

import { Styles } from './styles';

interface HeaderProps {
    child: React.ReactElement<BottomMenuItem> | null;
    backHandle?: () => void;
}

export function Header(props: HeaderProps) {
    return (
        <View style={Styles.contentContainer}>
            <View style={Styles.draggableItem} />
            {props.backHandle && props.child ? <BackBox backHandle={props.backHandle} child={props.child} /> : null}
        </View>
    );
}
