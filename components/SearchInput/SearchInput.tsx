import React, { useMemo, useRef } from 'react';

import { Animated, Easing, Keyboard, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text } from 'components/Text';
import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface SearchInputProps {
    value: string;
    changeValue: (value: string) => void;
    placeholder: string;
    cancelHandle?: () => void;
    clearHandle: () => void;
}

export function SearchInput(props: SearchInputProps) {
    const inputRef = useRef<TextInput>(null);
    const animatedValue = useMemo(() => new Animated.Value(0), []);

    function clearHandle() {
        inputRef.current?.focus();
        props.clearHandle();
    }

    function cancelHandle() {
        inputRef.current?.blur();
        Keyboard.dismiss();
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 500,
            easing: Easing.elastic(1),
            useNativeDriver: false,
        }).start();
    }

    function onFocusHandle() {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 500,
            easing: Easing.elastic(1),
            useNativeDriver: false,
        }).start();
    }

    const transformX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [60, 0],
    });

    const animatedWidth = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['100%', '82%'],
    });

    return (
        <View style={Styles.contentContainer}>
            <Animated.View style={[Styles.inputContainer, { width: animatedWidth }]}>
                <TextInput
                    onFocus={onFocusHandle}
                    onBlur={cancelHandle}
                    ref={inputRef}
                    placeholder={props.placeholder}
                    style={Styles.input}
                    placeholderTextColor="gray"
                    onChangeText={props.changeValue}
                    defaultValue={props.value}
                />
                <View style={Styles.searchIcon}>
                    <Icon name="search" size={16} color={StylesValue(ThemeVariables.Color1)} />
                </View>
                {props.value ? (
                    <TouchableOpacity onPress={clearHandle} style={Styles.clearButton}>
                        <Icon name="times-circle" size={20} color={StylesValue(ThemeVariables.Color1)} />
                    </TouchableOpacity>
                ) : null}
            </Animated.View>
            <Animated.View style={[Styles.cancelButton, { transform: [{ translateX: transformX }] }]}>
                <TouchableOpacity activeOpacity={1} onPress={cancelHandle}>
                    <Text translateKey="buttons.cancel" color="color1" />
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}
