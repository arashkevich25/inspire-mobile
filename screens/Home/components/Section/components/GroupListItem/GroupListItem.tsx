import { GroupsWithUsers } from '@inspire/types';
import { FilteredPostsListByGroup } from 'navigation';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Image, Text } from 'components';
import { GlobalStyles } from 'global-styles';
import { useRootUserData, useUserGroups } from 'hooks';
import { Sizes } from 'types';

import { Styles } from '../../styles';

interface GroupListItemProps {
    group: GroupsWithUsers;
}

export function GroupListItem(props: GroupListItemProps) {
    const [rootId] = useRootUserData();
    const { fetchPosts } = useUserGroups(rootId);

    function openHandle() {
        const { id, name } = props.group.group;
        fetchPosts(id);
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: FilteredPostsListByGroup(id, name),
                    },
                ],
            },
        });
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={openHandle} style={[Styles.groupListItem]}>
            <View style={GlobalStyles.shadowBasic}>
                <Image width={100} height={100} uri={{ uri: props.group.group.avatar }} />
            </View>
            <Text fontSize={Sizes.Small} style={Styles.groupTitle} numberOfLines={1}>
                {props.group.group.name}
            </Text>
        </TouchableOpacity>
    );
}
