import React from 'react';

import { TouchableOpacity } from 'react-native';

import { Text } from 'components';
import { useUserRecommend } from 'hooks';

import { styles } from '../../styles';

interface RecommendButtonProps {
    userId: number;
    isRecommendedByUser: boolean;
}

export function RecommendButton(props: RecommendButtonProps) {
    const { recommendUserHandle, disrecommendUserHandle } = useUserRecommend(props.userId);

    function recommendUnrecommendButtonHandle() {
        if (props.isRecommendedByUser) {
            disrecommendUserHandle();
            return;
        }
        recommendUserHandle();
    }

    return (
        <TouchableOpacity
            style={[styles.buttonBox, props.isRecommendedByUser ? styles.activeButtonBox : null]}
            onPress={recommendUnrecommendButtonHandle}>
            <Text
                color={props.isRecommendedByUser ? 'blue' : 'color1'}
                numberOfLines={1}
                translateKey={props.isRecommendedByUser ? 'profile.buttons.unrecommend' : 'profile.buttons.recommend'}
            />
        </TouchableOpacity>
    );
}
