import React from 'react';

import { Image } from 'components';

interface ThumbnailProps {
    imageUri: string;
}

export function Thumbnail(props: ThumbnailProps) {
    return <Image uri={{ uri: props.imageUri }} width={60} />;
}
