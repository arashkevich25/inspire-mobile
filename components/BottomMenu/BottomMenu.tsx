import React, { useEffect, useRef } from 'react';
import { menuControl } from './MenuControl';

import { Animated, TouchableOpacity } from 'react-native';

import { Styles } from './styles';

export interface BottomMenuProps {
    children: any;
}

export function BottomMenu(props: BottomMenuProps) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    });

    return (
        <Animated.View style={[{ opacity: fadeAnim }, Styles.contentContainer]}>
            <TouchableOpacity style={Styles.contentOverlay} onPress={menuControl.closeMenu} />
            {props.children}
        </Animated.View>
    );
}
