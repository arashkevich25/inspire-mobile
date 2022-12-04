import React from 'react';

import { Text } from 'components';
import { Sizes } from 'types';

interface NameProps {
    name: string;
}

export function Name(props: NameProps) {
    return (
        <Text fontSize={Sizes.Large} color="white" numberOfLines={1} isBold={true}>
            {props.name}
        </Text>
    );
}
