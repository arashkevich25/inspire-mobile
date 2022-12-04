import React from 'react';
import { Styles } from './style';

import { View } from 'react-native';
import * as RNProgress from 'react-native-progress';

import { Text } from 'components';
import I18n from 'tools/translate';
import { Sizes } from 'types';

interface ProgressProps {
    userRecommendValue: number;
    requiredValue: number;
}

export function Progress(props: ProgressProps) {
    const countLackRecommends = props.requiredValue - props.userRecommendValue;
    return (
        <View style={Styles.contentContainer}>
            <RNProgress.Bar animated={true} progress={props.userRecommendValue / props.requiredValue} width={null} />
            {countLackRecommends > 0 ? (
                <>
                    <View style={Styles.contentBox}>
                        <Text isItalic={true} translateKey="competitionDetails.text.progress1" />
                    </View>
                    <View style={Styles.contentBox}>
                        <Text isBold={true} isItalic={true}>
                            {I18n.t('competitionDetails.text.progress2', { count: countLackRecommends })}
                        </Text>
                        <Text isItalic={true} translateKey="competitionDetails.text.progress3" />
                    </View>
                </>
            ) : (
                <View style={Styles.contentBox}>
                    <Text
                        fontSize={Sizes.Large}
                        color="green"
                        isBold={true}
                        translateKey="competitionDetails.text.progress4"
                    />
                    <Text isBold={true} isItalic={true} translateKey="competitionDetails.text.progress5" />
                    <Text isItalic={true} translateKey="competitionDetails.text.progress6" />
                </View>
            )}
        </View>
    );
}
