import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Image } from 'components';
import { StylesValue } from 'tools';
import { ThemeVariables, WallPostHandles, WallPostHandlesTypes } from 'types';

import { Styles } from './styles';

interface ActionPanelProps {
    pressHandle: (type: WallPostHandles) => void;
    isInspiredByUser: boolean;
    hasRecommendByUser: boolean;
}

export function ActionPanel(props: ActionPanelProps) {
    function openDetails() {
        props.pressHandle(WallPostHandlesTypes.OpenPostDetails);
    }

    function recommendPost() {
        props.pressHandle(WallPostHandlesTypes.Recommend);
    }

    function inspirePost() {
        props.pressHandle(WallPostHandlesTypes.Inspire);
    }

    return (
        <View style={Styles.contentContainer}>
            <TouchableOpacity
                onPress={inspirePost}
                style={[Styles.buttonContainer, props.isInspiredByUser ? Styles.inspireActive : null]}>
                <Image
                    tintColor={
                        props.isInspiredByUser
                            ? StylesValue(ThemeVariables.HighlightColor1)
                            : StylesValue(ThemeVariables.Color1)
                    }
                    style={{ width: 20, height: 20, paddingBottom: 21 }}
                    uri={require('../../../../../../../ShowPostModal/assets/inspire.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={recommendPost}
                style={[Styles.buttonContainer, props.hasRecommendByUser ? Styles.recommendActive : null]}>
                <Image
                    tintColor={
                        props.hasRecommendByUser ? StylesValue(ThemeVariables.Gold) : StylesValue(ThemeVariables.Color1)
                    }
                    width={20}
                    height={20}
                    uri={require('../../../../../../../ShowPostModal/assets/check.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={openDetails} style={Styles.buttonContainer}>
                <Image
                    tintColor={StylesValue(ThemeVariables.Color1)}
                    width={20}
                    height={20}
                    uri={require('../../../../../../../../assets/comment-handle.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
