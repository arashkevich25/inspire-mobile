import React from 'react';

import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Avatar, Image, Text } from 'components';
import { GlobalStyles } from 'global-styles/globalStyles';
import { Sizes, ThemeVariables } from 'types';
import { StylesValue } from '../../../../../../tools/StylesValue';

import { Styles } from './styles';

interface PostTileProps {
    photo: string;
    title: string;
    avatar: string;
    userName: string;
    uniqueName: string;
    description: string;
    recommendsCount: number;
    inspireCount: number;
    commentsCount: number;
}

export function PostTile(props: PostTileProps) {
    return (
        <View style={[Styles.contentContainer, GlobalStyles.shadowBasic]}>
            <View>
                <LinearGradient colors={['#0C0C0C', '#00000000']} style={[Styles.logoGradient, Styles.mainPadding]}>
                    <Image
                        tintColor={StylesValue(ThemeVariables.White)}
                        style={Styles.logoImage}
                        uri={require('../../../../../../assets/simplelogo.png')}
                    />
                </LinearGradient>
                <Image style={Styles.photo} uri={{ uri: props.photo }} />
                <LinearGradient
                    colors={['#00000000', '#0C0C0C']}
                    style={[Styles.titleGradient, Styles.mainPadding, Styles.titlePadding]}>
                    <Text isBold={true} numberOfLines={1} fontSize={Sizes.Large} color="white">
                        {props.title}
                    </Text>
                </LinearGradient>
            </View>
            <View style={[Styles.mainPadding, Styles.detailsContainer]}>
                <Avatar uri={props.avatar} fallback={props.userName} />
                <View style={Styles.authorDetails}>
                    <View style={Styles.itemBox}>
                        <Text color="color2" translateKey="showPostModal.addedBy" />
                        <Text color="black" numberOfLines={1} isBold={true}>
                            {props.userName}
                        </Text>
                    </View>
                    <View style={Styles.itemBox}>
                        <Text color="color2">@{props.uniqueName}</Text>
                        <Text color="blue"> by !NSPiRE app</Text>
                    </View>
                </View>
            </View>
            <View style={[Styles.mainPadding, Styles.descriptionBox]}>
                <Text numberOfLines={3} color="color2">
                    {props.description}
                </Text>
            </View>
            <View style={Styles.statisticsContainer}>
                <View style={[Styles.mainPadding, Styles.statisticsBox]}>
                    <View style={Styles.itemBox}>
                        <Image style={Styles.statisticIconWithMargin} uri={require('../../../../assets/check.png')} />
                        <Text color="black">{props.recommendsCount}</Text>
                    </View>
                    <View style={Styles.itemBox}>
                        <Image style={Styles.statisticIcon} uri={require('../../../../assets/inspire.png')} />
                        <Text color="black">{props.inspireCount}</Text>
                    </View>
                    <View style={Styles.itemBox}>
                        <Image
                            style={Styles.statisticIconWithMargin}
                            uri={require('../../../../../../assets/comment-handle.png')}
                        />
                        <Text color="black">{props.commentsCount}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
