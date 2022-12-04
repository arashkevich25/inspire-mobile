import React, { useRef } from 'react';
import { SelectedBackground } from '../../../../../../../../../../types/QuestionDetailsValues';
import { Styles } from '../../Styles';

import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { Text } from 'components';
import { BackgroundConfig, Sizes } from 'types';

interface BackgroundProps {
    background: BackgroundConfig;
    selectBackground: (background: SelectedBackground) => void;
    title: string;
    selectedBackground: SelectedBackground;
}

export function Background(props: BackgroundProps) {
    const ref = useRef(null);
    function onSelectHandle() {
        props.selectBackground({
            id: props.background.id,
            background: ref,
        });
    }

    if (!props.selectedBackground && ref.current && props.background.id === 1) {
        onSelectHandle();
    }

    const isSelected = props.selectedBackground && props.selectedBackground.id === props.background.id;

    return (
        <TouchableOpacity
            onPress={onSelectHandle}
            style={[Styles.contentContainer, isSelected ? Styles.backgroundImageSelected : null]}>
            <View collapsable={false} ref={ref}>
                <ImageBackground style={[Styles.backgroundImage]} source={props.background.import}>
                    <View style={Styles.overlay} />
                    <Text fontSize={Sizes.Large} isBold={true} style={Styles.text} color={props.background.color}>
                        {props.title}
                    </Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}
