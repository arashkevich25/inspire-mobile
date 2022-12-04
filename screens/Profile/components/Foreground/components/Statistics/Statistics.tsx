import { User } from '@inspire/types';
import React from 'react';
import { FollowersCount, InspiredCount, PostCount, SubscribersCount } from '../';

import { View } from 'react-native';

import { NavProps } from 'types';

import { styles } from './styles';

interface StatisticsProps extends NavProps {
    subscribers: User[];
    followers: User[];
    inspiredCount: number;
    postCount: number;
}

export function Statistics(props: StatisticsProps) {
    return (
        <View style={styles.contentContainer}>
            <PostCount count={props.postCount} />
            <SubscribersCount componentId={props.componentId} subscribers={props.subscribers} />
            <FollowersCount componentId={props.componentId} followers={props.followers} />
            <InspiredCount count={props.inspiredCount} />
        </View>
    );
}
