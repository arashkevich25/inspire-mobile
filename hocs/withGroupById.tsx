import React from 'react';
import { useSelector } from 'react-redux';

import { View } from 'react-native';

import { useRootUserData } from 'hooks';
import { AppState } from 'reducers';
import { getGroups } from 'selectors';

export function withGroupById(WrappedComponent: any) {
    return (props: any) => {
        const [rootUserId] = useRootUserData();
        const groups = useSelector((state: AppState) => getGroups(state, rootUserId));

        if (!groups.length) {
            return <View />;
        }
        const group = groups.filter(group => group.id === props.groupId);

        return <WrappedComponent {...props} group={group[0]} />;
    };
}
