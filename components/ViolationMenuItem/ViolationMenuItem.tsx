import React from 'react';
import { menuControl } from '../BottomMenu';

import { TouchableOpacity } from 'react-native';

import { Text } from 'components/Text';
import { Sizes } from 'types';

import { Styles } from './styles';

interface ViolationMenuItemProps {
    title: string;
    reasonId: number;
    onPress: (reasonId: number) => void;
}

export function ViolationMenuItem(props: ViolationMenuItemProps) {
    async function onPressHandle() {
        await menuControl.closeMenu();
        props.onPress(props.reasonId);
    }

    return (
        <TouchableOpacity style={Styles.contentContainer} onPress={onPressHandle}>
            <Text fontSize={Sizes.Medium}>{props.title}</Text>
        </TouchableOpacity>
    );
}
