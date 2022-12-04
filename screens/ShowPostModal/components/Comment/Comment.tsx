import { User } from '@inspire/types';
import { CreateTimeModel } from 'app-constants/createTime';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Avatar, Text } from 'components';
import { TextParser } from 'containers/TextParser';
import { createdAtCalc } from 'tools';
import { Sizes } from 'types';
import { post } from '../../../../../e2e/selectors';

import { Styles } from './styles';

interface CommentProps {
    user: User;
    message: string;
    createdAt: string;
    openProfileHandle: (userId: number) => void;
}

export function Comment(props: CommentProps) {
    const [createdAt, , hours, , createdAtDate] = createdAtCalc(Number(props.createdAt));

    function openUserProfile() {
        props.openProfileHandle(props.user.id);
    }

    return (
        <View style={Styles.contentContainer}>
            <TouchableOpacity onPress={openUserProfile}>
                <Avatar size="small" fallback={props.user.name} uri={props.user.avatar} />
            </TouchableOpacity>
            <View style={Styles.messageContainer}>
                <View style={Styles.messageBody}>
                    <Text color="color1">
                        <Text style={Styles.userBox} isBold={true} color="gray" numberOfLines={1}>
                            {props.user.name}{' '}
                        </Text>
                        <TextParser testID={post.texts.comment(props.message)}>{props.message}</TextParser>
                    </Text>
                </View>
                <Text fontSize={Sizes.Small} style={Styles.hoursBox} color="gray">
                    {hours > CreateTimeModel.maxHours ? createdAtDate : createdAt}
                </Text>
            </View>
        </View>
    );
}
