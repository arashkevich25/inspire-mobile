import React from 'react';
import { Image } from '../Image/Image';
import { ListPlugBase } from '../ListPlugBase/ListPlugBase';

interface HintPlugProps {
    tkey: string;
}

export function HintPlug(props: HintPlugProps) {
    return (
        <ListPlugBase
            image={<Image width={40} height={40} tintColor="gray" uri={require('../../assets/hint.png')} />}
            tkey={props.tkey}
        />
    );
}
