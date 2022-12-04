import React from 'react';

import { Text } from 'components';
import { Sizes } from 'types';

import { Styles } from './styles';

interface HeaderProps {
    tkey: string;
}

export function Header(props: HeaderProps) {
    return <Text fontSize={Sizes.Large} isBold={true} style={Styles.text} translateKey={props.tkey} />;
}
