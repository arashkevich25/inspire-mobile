import React from 'react';

import { Text } from 'components';
import { Sizes } from 'types';

import { Styles } from './styles';

interface GroupsProps {
    postGroups: string;
}

export function Groups(props: GroupsProps) {
    return (
        <Text fontSize={Sizes.XSmall} color="gray" numberOfLines={1} style={Styles.contentContainer}>
            {props.postGroups}
        </Text>
    );
}
