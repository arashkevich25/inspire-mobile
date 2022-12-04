import React from 'react';

import { View } from 'react-native';

import { InspireButton, RecommendButton, SendButton } from './components';

import { Styles } from './styles';

interface ActionPanelProps {
    inspirePressHandle: () => void;
    recommendPressHandle: () => void;
    sendPostHandle: () => void;
    recommendIsActive: boolean;
    inspiredIsActive: boolean;
    createdAt: string;
    recommendCounter: number;
    inspiredCounter: number;
}

export function ActionPanel(props: ActionPanelProps) {
    return (
        <View style={Styles.contentContainer}>
            <RecommendButton
                recommendCounter={props.recommendCounter}
                isActive={props.recommendIsActive}
                pressHandle={props.recommendPressHandle}
            />
            <InspireButton
                inspiredCounter={props.inspiredCounter}
                isActive={props.inspiredIsActive}
                pressHandle={props.inspirePressHandle}
            />
            <SendButton pressHandle={props.sendPostHandle} />
        </View>
    );
}
