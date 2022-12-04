import { User } from '@inspire/types';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Text } from 'components/Text';
import { SubscribersFollowersList } from 'navigation/components/subscribersFollowersList';
import I18n from 'tools/translate';
import { NavProps, Sizes } from 'types';

import { styles } from '../../styles';

interface FollowersCountProps extends NavProps {
    followers: User[];
}

export function FollowersCount(props: FollowersCountProps) {
    async function openFollowersList() {
        await Navigation.push(props.componentId, {
            component: SubscribersFollowersList(props.followers, '', I18n.t('profile.statistics.followers')),
        });
    }

    return (
        <View style={styles.statisticsBox}>
            <TouchableOpacity onPress={openFollowersList} style={styles.touchableBox}>
                <Text color="blue" fontSize={Sizes.Large}>
                    {props.followers.length}
                </Text>
                <Text color="gray" fontSize={Sizes.XSmall} translateKey="profile.statistics.followers" />
            </TouchableOpacity>
        </View>
    );
}
