import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Text } from 'components';
import { useActivity } from 'hooks';
import { Sizes } from 'types';

import { Styles } from './styles';

interface SectionHeadingProps {
    title: string;
}

export function SectionHeading(props: SectionHeadingProps) {
    const { isSectionHasMarkAllButton, markAllAsRead } = useActivity();

    function onMarkAllHandle() {
        markAllAsRead(props.title);
    }

    return (
        <View style={Styles.contentContainer}>
            <Text fontSize={Sizes.Large} isBold={true}>
                {props.title}
            </Text>
            {isSectionHasMarkAllButton(props.title) ? (
                <TouchableOpacity onPress={onMarkAllHandle}>
                    <Text
                        translateKey="activities.topRightButtons.markAllAsRead"
                        fontSize={Sizes.XSmall}
                        color="blue"
                        style={Styles.text}
                    />
                </TouchableOpacity>
            ) : null}
        </View>
    );
}
