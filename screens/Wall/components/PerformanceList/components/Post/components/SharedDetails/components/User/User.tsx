import React from 'react';

import { Text } from 'components';
import { Sizes } from 'types';

interface UserProps {
    userName: string;
}

export function User(props: UserProps) {
    return (
        <Text numberOfLines={1} fontSize={Sizes.Medium} color="color1" isBold={true}>
            {props.userName}
        </Text>
    );
}
