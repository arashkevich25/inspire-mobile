import { GroupsWithUsers } from '@inspire/types';
import { Body, Icon, Left, Right } from 'native-base';
import React from 'react';

import { View } from 'react-native';

import { Avatar, SplayListItem, Text } from 'components';
import I18n from 'tools/translate';
import { Sizes } from 'types';
import { profile } from '../../../../../../../e2e/selectors/index';

import { Styles } from './styles';

interface ListItemProps {
    group: GroupsWithUsers;
    pressHandle: (group: GroupsWithUsers) => void;
}

export function ListItem(props: ListItemProps) {
    function pressHandle() {
        props.pressHandle(props.group);
    }

    return (
        <SplayListItem pressHandle={pressHandle}>
            <Left>
                <Avatar size="medium" fallback={props.group.group.name} uri={props.group.group.avatar} />
            </Left>
            <Body style={Styles.bodyBox}>
                <View>
                    <Text
                        numberOfLines={1}
                        fontSize={Sizes.Medium}
                        testID={profile.text.groupName}
                        color="color1"
                        isBold={true}>
                        {props.group.group.name}
                    </Text>
                </View>
                <View>
                    <Text numberOfLines={1} color="gray" fontSize={Sizes.XSmall}>
                        {I18n.t('profile.groups.membersCount')} {props.group.users.length}
                    </Text>
                </View>
            </Body>
            <Right>
                <Icon name="arrow-forward" />
            </Right>
        </SplayListItem>
    );
}
