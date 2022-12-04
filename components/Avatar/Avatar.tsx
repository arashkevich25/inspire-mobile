import React from 'react';

import { ComponentSizes } from 'types';
import { FallbackAvatar, ImageAvatar } from './components';

interface AvatarProps {
    uri?: string | null;
    fallback?: string;
    size?: ComponentSizes;
}

export function Avatar(props: AvatarProps) {
    if (!props.uri && props.fallback) {
        return <FallbackAvatar size={props.size} fallback={props.fallback} />;
    }

    return <ImageAvatar image={{ uri: props.uri }} size={props.size} {...props} />;
}
