import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Avatar, Badge } from 'components';

import { Styles } from './styles';

interface BaseProps {
    imageUrl?: string;
    fallback: string;
    onClickHandle: () => void;
    isRead: boolean;
    children: JSX.Element;
}

export function Base(props: BaseProps) {
    return (
        <TouchableOpacity style={Styles.contentContainer} onPress={props.onClickHandle}>
            <View style={Styles.contentBox}>
                <View style={Styles.avatarBox}>
                    <Avatar size="medium" uri={props.imageUrl} fallback={props.fallback} />
                </View>
                <View style={Styles.bodyBox}>{props.children}</View>
                {props.isRead ? null : (
                    <View>
                        <Badge />
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}
