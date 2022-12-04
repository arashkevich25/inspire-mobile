import React from 'react';
import { ListPlugBase } from '../ListPlugBase/ListPlugBase';

import { Image } from 'components/Image/Image';

interface EmptyFlatListPlugProps {
    tkey: string;
}

export function EmptyFlatListPlug(props: EmptyFlatListPlugProps) {
    return (
        <ListPlugBase
            image={<Image width={40} height={40} tintColor="gray" uri={require('../../assets/archive.png')} />}
            tkey={props.tkey}
        />
    );
}
