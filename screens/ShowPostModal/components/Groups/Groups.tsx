import { PostGroupRelation } from '@inspire/types';
import React from 'react';

import { View } from 'react-native';

import { useInitUserData, useRootUserData } from 'hooks';
import { GroupButton } from './components';

import { Styles } from './styles';

interface GroupsProps {
    groups: PostGroupRelation;
    componentId: any;
    postName: string;
}

export function Groups(props: GroupsProps) {
    const [rootUserId] = useRootUserData();
    const { groups } = useInitUserData(rootUserId);

    return (
        <View style={Styles.contentBox}>
            {props.groups.groups.map((group, index) => (
                <GroupButton
                    postName={props.postName}
                    key={index}
                    componentId={props.componentId}
                    group={groups.filter(item => item.group.id === group.id)[0]}
                />
            ))}
        </View>
    );
}
