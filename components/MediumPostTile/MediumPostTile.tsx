import React from 'react';
import { Avatar } from '../Avatar';
import { Image } from '../Image/Image';
import { Text } from '../Text';

import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { GlobalStyles } from 'global-styles';
import { Sizes } from 'types';

import { Styles } from './styles';

interface MediumPostTileProps {
    photo: string;
    name: string;
    userName: string;
    userAvatar: string;
    additionalText: string;
}

export function MediumPostTile(props: MediumPostTileProps) {
    return (
        <View style={[Styles.mediumPostItemContainer, GlobalStyles.shadowBasic]}>
            <View style={Styles.mediumPostItemImage}>
                <Image width={160} borderRadius={8} uri={{ uri: props.photo }} />
                <LinearGradient colors={['#00000000', '#0C0C0C']} style={Styles.mediumPostItemTitle}>
                    <Text
                        color="white"
                        numberOfLines={1}
                        fontSize={Sizes.Medium}
                        style={Styles.mediumPostItemTitleText}>
                        {props.name}
                    </Text>
                </LinearGradient>
            </View>
            <View style={Styles.mediumPostItemAuthorDetails}>
                <View>
                    <Avatar size="small" uri={props.userAvatar} fallback={props.userName} />
                </View>
                <View style={Styles.mediumPostItemAuthorDetailsTextBox}>
                    <Text numberOfLines={1} isBold={true} fontSize={Sizes.Small}>
                        {props.userName}
                    </Text>
                    <Text color="gray" numberOfLines={1} isItalic={true} fontSize={Sizes.XSmall}>
                        {props.additionalText}
                    </Text>
                </View>
            </View>
        </View>
    );
}
