import { User } from '@inspire/types';
import { Body, Left, Right } from 'native-base';
import React from 'react';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Avatar, FollowUnfollowSmallButton, SplayListItem, Text } from 'components';
import { NoConnectionStatus, Profile } from 'navigation/components';
import { NavProps, Sizes } from 'types';

import { Styles } from './styles';

interface ListItemProps extends NavProps {
    user: User;
    rootDetails: User;
    followUnfollowButtonIsVisible?: boolean;
    isInternetReachableState: boolean;
}

export function ListItem(props: ListItemProps) {
    async function openDetails() {
        if (!props.isInternetReachableState) {
            // TODO empty props, waiting for https://github.com/wix/react-native-navigation/issues/6763
            Navigation.push(props.componentId, { component: NoConnectionStatus('') });
            return;
        }
        await Navigation.push(props.componentId, { component: Profile(props.user.id) });
    }

    return (
        <SplayListItem pressHandle={openDetails}>
            <Left>
                <Avatar size="medium" uri={props.user.avatar} fallback={props.user.name} />
            </Left>
            <Body style={Styles.detailsBox}>
                <Text fontSize={Sizes.Medium} numberOfLines={1}>
                    {props.user.name}
                </Text>
                {props.user.desc ? (
                    <Text color="gray" numberOfLines={1}>
                        {props.user.desc}
                    </Text>
                ) : null}
            </Body>
            <Right>
                <View style={Styles.followButton}>
                    {props.followUnfollowButtonIsVisible && props.user.id !== props.rootDetails.id ? (
                        <FollowUnfollowSmallButton rootDetails={props.rootDetails} user={props.user} />
                    ) : null}
                </View>
            </Right>
        </SplayListItem>
    );
}
