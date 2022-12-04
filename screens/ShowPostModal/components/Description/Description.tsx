import React from 'react';

import { Navigation } from 'react-native-navigation';

import { Text } from 'components';
import { TextParser } from 'containers';
import { PostsByTag } from 'navigation/components';
import { Sizes } from 'types';

interface DescriptionProps {
    description: string;
    componentId: string;
}

export function Description(props: DescriptionProps) {
    async function onPressHash(hash: string) {
        await Navigation.push(props.componentId, {
            component: PostsByTag(hash.substring(1)),
        });
    }
    return (
        <Text color="color1" fontSize={Sizes.Small}>
            <TextParser pressHash={onPressHash}>{props.description}</TextParser>
        </Text>
    );
}
