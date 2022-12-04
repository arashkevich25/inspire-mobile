import { GroupsWithUsers } from '@inspire/types';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Avatar, Text } from 'components';
import { EditGroup } from 'navigation/components';
import { Sizes } from 'types';

import { Styles } from '../../../../styles';

interface GroupButtonProps {
    group: GroupsWithUsers;
    componentId: any;
    postName: string;
}

export function GroupButton({ group, componentId, postName }: GroupButtonProps) {
    async function clickHandle() {
        await Navigation.push(componentId, { component: EditGroup(group, postName) });
    }
    return (
        <TouchableOpacity style={Styles.groupButtonBox} onPress={clickHandle}>
            <View style={Styles.groupVerticalLine}></View>
            <View style={Styles.groupContainer} key={group.id}>
                <Avatar uri={group.group.avatar} fallback={group.group.name} size="small" />
                <Text fontSize={Sizes.Small} style={Styles.groupName}>
                    {group.group.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
