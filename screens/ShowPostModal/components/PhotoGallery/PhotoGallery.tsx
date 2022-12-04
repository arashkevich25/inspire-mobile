/* eslint-disable import/default */
/* eslint-disable import/no-named-as-default */
import { PostMedia } from '@inspire/types';
/* eslint-disable import/no-named-as-default-member */
import React from 'react';

// @ts-ignore
import ImageSlider from 'react-native-image-slider';

import { Image } from 'components';
import { winWidth } from 'tools';

interface PhotoGalleryProps {
    photos: PostMedia[];
}

export function PhotoGallery(props: PhotoGalleryProps) {
    return (
        <ImageSlider
            images={props.photos}
            customSlide={({ item, index }: any) => <Image key={index} width={winWidth} uri={{ uri: item.uri }} />}
        />
    );
}
