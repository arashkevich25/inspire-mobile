import { isIphone } from 'app-constants';
import React from 'react';

import { View } from 'react-native';

import { Image } from 'components';

import { Styles } from './styles';

interface UserAvatarProps {
    uri: string;
}

export function UserAvatar(props: UserAvatarProps) {
    return (
        <View style={[Styles.contentContainer, isIphone ? Styles.iosShadow : Styles.androidShadow]}>
            <Image style={Styles.image} uri={{ uri: props.uri }} />
        </View>
    );
}
