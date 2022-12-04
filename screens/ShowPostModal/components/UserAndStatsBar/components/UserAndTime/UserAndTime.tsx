import { User as IUSer } from '@inspire/types';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Avatar, CreateTime, Text } from 'components';
import { Sizes } from 'types';
import I18n from '../../../../../../tools/translate';

import { Styles } from './styles';

interface UserProps {
    user: IUSer;
    openProfileHandle: () => void;
    time: string;
}

export function UserAndTime({ user, openProfileHandle, time }: UserProps) {
    return (
        <TouchableOpacity onPress={openProfileHandle} style={Styles.contentContainer}>
            <View style={Styles.avatarBox}>
                <Avatar uri={user.avatar} fallback={`${user.name[0]}${user.name[1]}`} size="small" />
            </View>
            <View style={Styles.nameAndTimeBox}>
                <Text numberOfLines={1} fontSize={Sizes.Small}>
                    {I18n.t('showPostModal.addedBy')}
                    <Text isBold={true} numberOfLines={1} fontSize={Sizes.Small}>
                        {user.name}
                    </Text>
                </Text>
                <CreateTime createdAt={Number(time)} />
            </View>
        </TouchableOpacity>
    );
}
