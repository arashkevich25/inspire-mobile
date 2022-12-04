import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Image } from 'components/Image/Image';
import { Text } from 'components/Text';
import { TextColor } from 'components/Text/types';
import { StylesValue } from 'tools';
import { BottomMenuItem, Sizes, ThemeVariables } from 'types';
import { globalTestsSelectors } from '../../../../../../../e2e/selectors';

import { Styles } from './styles';

interface ItemProps {
    child: React.ReactElement<BottomMenuItem>;
    pressHandle?: (child: React.ReactElement<BottomMenuItem>) => void;
    color?: TextColor;
}

export function Item(props: ItemProps) {
    function onPressHandle() {
        if (props.child.props.action) {
            props.child.props.action();
        }
    }

    return (
        <TouchableOpacity
            onPress={onPressHandle}
            testID={globalTestsSelectors.buttons.bottomSheetMenuItem(props.child.props.title)}
            style={Styles.contentContainer}>
            <View style={Styles.contentBox}>
                <View style={Styles.itemContent}>
                    {props.child.props.icon ? (
                        <View style={Styles.itemIcon}>
                            <Image
                                height={20}
                                width={20}
                                tintColor={StylesValue(ThemeVariables.Color1)}
                                uri={props.child.props.icon}
                            />
                        </View>
                    ) : null}
                    <Text color={props.child.props.color} numberOfLines={1} fontSize={Sizes.Medium}>
                        {props.child.props.title}
                    </Text>
                </View>
                <View>{props.child.props.children}</View>
            </View>
        </TouchableOpacity>
    );
}
