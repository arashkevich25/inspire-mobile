import React from 'react';
import { FormStyles } from '../../../../../../../../formStyles';
import { SelectedBackground } from '../../../../../../../../types/QuestionDetailsValues';
import { backgrounds } from './constants/backgrounds';
import { Styles } from './Styles';

import { ScrollView, View } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';
import { Background } from './components';

interface TemplatesProps {
    title: string;
    selectedBackground: SelectedBackground;
    selectBackground: (background: SelectedBackground) => void;
}

export function Backgrounds(props: TemplatesProps) {
    return (
        <View style={FormStyles.detailContainer}>
            <Text fontSize={Sizes.Medium} translateKey="addPost.text.chooseBackground" />
            <ScrollView horizontal={true} style={Styles.scrollView} showsHorizontalScrollIndicator={false}>
                {backgrounds.map((background, index) => (
                    <Background
                        key={index}
                        selectBackground={props.selectBackground}
                        title={props.title}
                        selectedBackground={props.selectedBackground}
                        background={background}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
