import { GroupsWithUsers } from '@inspire/types';
import { AddGroup, EditGroup, NoConnectionStatus } from 'navigation';
import React from 'react';

import { FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { useInitUserData } from 'hooks';
import { useNetworkState } from 'hooks/useNetworkState';
import { NavProps } from 'types';
import { AddButton, ListItem } from './components';

interface GroupsProps extends NavProps {
    userId: number;
}

export function Groups(props: GroupsProps) {
    const { groups } = useInitUserData(props.userId);
    const { isInternetReachableState } = useNetworkState();

    async function openAddGroup() {
        if (!isInternetReachableState) {
            // TODO empty props, waiting for https://github.com/wix/react-native-navigation/issues/6763
            await Navigation.push(props.componentId, { component: NoConnectionStatus('') });
            return;
        }
        await Navigation.push(props.componentId, { component: AddGroup('') });
    }

    const preparedArr = groups.map((group: GroupsWithUsers, index: number) => ({
        key: index.toString(),
        group,
    }));

    async function clickHandle(group: GroupsWithUsers) {
        if (!isInternetReachableState) {
            // TODO empty props, waiting for https://github.com/wix/react-native-navigation/issues/6763
            await Navigation.push(props.componentId, { component: NoConnectionStatus('') });
            return;
        }
        await Navigation.push(props.componentId, { component: EditGroup(group, '') });
    }

    return (
        <FlatList
            ListHeaderComponent={<AddButton hasSeparator={Boolean(preparedArr.length)} addHandle={openAddGroup} />}
            data={preparedArr}
            scrollEnabled={false}
            renderItem={({ item }) => <ListItem group={item.group} pressHandle={clickHandle} />}
            keyExtractor={item => item.key}
        />
    );
}
