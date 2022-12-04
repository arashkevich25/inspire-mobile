import { ShortUserData } from '@inspire/types';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Text } from 'components';
import { getAvatarWords } from 'tools';
import { Groups, User } from './components';

import { Styles } from './styles';

interface UserProps {
    user: ShortUserData;
    postGroups: string;
    location: string;
    openProfile: () => void;
}

export function SharedDetails(props: UserProps) {
    return (
        <TouchableOpacity style={Styles.contentContainer} onPress={props.openProfile}>
            {props.user.avatar ? (
                <FastImage
                    style={Styles.image}
                    source={{ uri: props.user.avatar, priority: FastImage.priority.high }}
                />
            ) : (
                <View style={Styles.avatarBox}>
                    <Text color="black" style={Styles.avatarText}>
                        {getAvatarWords(props.user.name)}
                    </Text>
                </View>
            )}
            <View style={Styles.sharedDetailsContainer}>
                <User userName={props.user.name} />
                {props.postGroups ? <Groups postGroups={props.postGroups} /> : null}
            </View>
        </TouchableOpacity>
    );
}
