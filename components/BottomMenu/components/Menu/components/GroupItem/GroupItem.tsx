import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Image } from 'components/Image/Image';
import { Text } from 'components/Text';
import { StylesValue } from 'tools';
import { BottomMenuItem, Sizes, ThemeVariables } from 'types';

import { Styles } from './styles';

interface GroupItemProps {
    openGroupHandle?: (child: React.ReactElement<BottomMenuItem>) => void;
    child: React.ReactElement<BottomMenuItem>;
}

export function GroupItem(props: GroupItemProps) {
    function openGroupDetails() {
        if (props.openGroupHandle) {
            props.openGroupHandle(props.child);
        }
    }

    return (
        <TouchableOpacity style={Styles.contentContainer} onPress={openGroupDetails}>
            <View style={Styles.contentBox}>
                <View style={Styles.labelBox}>
                    {props.child.props.icon ? (
                        <View style={Styles.labelIcon}>
                            <Image
                                height={20}
                                width={20}
                                tintColor={StylesValue(ThemeVariables.Color1)}
                                uri={props.child.props.icon}
                            />
                        </View>
                    ) : null}
                    <Text numberOfLines={1} fontSize={Sizes.Medium}>
                        {props.child.props.title}
                    </Text>
                </View>
                <View>
                    <Icon name="chevron-right" size={14} color={StylesValue(ThemeVariables.Color1)} />
                </View>
            </View>
        </TouchableOpacity>
    );
}
