import { User } from '@inspire/types';
import React from 'react';
import { useSelector } from 'react-redux';

import { FlatList } from 'react-native';

import { EmptyFlatListPlug } from 'components/EmptyFlatListPlug';
import { useIsRoot, useNetworkState, useRootUserData } from 'hooks';
import { AppState } from 'reducers';
import { isAuthenticated } from 'selectors';
import { NavProps } from 'types';
import { ListItem } from './components';

import { Styles } from './styles';

interface SubscribersListProps extends NavProps {
    users: User[];
    emptyPlugIsVisible?: boolean;
    followUnfollowButtonIsVisible?: boolean;
}

export function UsersList(props: SubscribersListProps) {
    const authenticated = useSelector((state: AppState) => isAuthenticated(state));
    const [userId] = useRootUserData();
    const [, rootDetails] = useIsRoot(userId);
    const { isInternetReachableState } = useNetworkState();

    function renderItem({ item }: { item: User }) {
        return (
            <ListItem
                isInternetReachableState={isInternetReachableState}
                rootTag={props.rootTag}
                rootDetails={rootDetails}
                componentId={props.componentId}
                key={item.id}
                user={item}
                followUnfollowButtonIsVisible={props.followUnfollowButtonIsVisible && authenticated}
            />
        );
    }

    return (
        <FlatList
            style={Styles.contentContainer}
            ListEmptyComponent={
                props.emptyPlugIsVisible ? <EmptyFlatListPlug tkey="globalSearch.accounts.labels.emptyPlug" /> : null
            }
            data={props.users}
            keyExtractor={item => String(item.id)}
            renderItem={renderItem}
        />
    );
}

UsersList.defaultProps = {
    emptyPlugIsVisible: true,
    followUnfollowButtonIsVisible: true,
};
