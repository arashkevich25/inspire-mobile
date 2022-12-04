import { User } from '@inspire/types';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Text } from 'components';
import { SubscribersFollowersList } from 'navigation/components/subscribersFollowersList';
import I18n from 'tools/translate';
import { NavProps, Sizes } from 'types';

import { styles } from '../../styles';

interface SubscribersCountProps extends NavProps {
    subscribers: User[];
}

export function SubscribersCount(props: SubscribersCountProps) {
    async function openSubscribersList() {
        await Navigation.push(props.componentId, {
            component: SubscribersFollowersList(props.subscribers, '', I18n.t('profile.statistics.subscribers')),
        });
    }

    return (
        <View style={styles.statisticsBox}>
            <TouchableOpacity onPress={openSubscribersList} style={styles.touchableBox}>
                <Text color="blue" fontSize={Sizes.Large}>
                    {props.subscribers.length}
                </Text>
                <Text color="gray" fontSize={Sizes.XSmall} translateKey="profile.statistics.subscribers" />
            </TouchableOpacity>
        </View>
    );
}
