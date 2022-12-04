import React from 'react';

import { TouchableOpacity } from 'react-native';

import { Text } from 'components/Text';
import { winWidth } from 'tools';
import { Sizes, SwitchItem } from 'types';

import { Styles } from './styles';

interface ButtonProps {
    isActive: boolean;
    tabItem: SwitchItem;
    pressHandle: (item: SwitchItem) => void;
    countTabs: number;
    testId: string;
}

export function Button(props: ButtonProps) {
    function onPressHandle() {
        props.pressHandle(props.tabItem);
    }

    return (
        <TouchableOpacity
            testID={props.testId}
            style={[
                props.isActive ? Styles.active : Styles.noneActive,
                { width: winWidth / props.countTabs },
                Styles.contentContainer,
            ]}
            onPress={onPressHandle}>
            <Text fontSize={Sizes.Small} isBold={true} style={Styles.text} translateKey={props.tabItem.title} />
        </TouchableOpacity>
    );
}
