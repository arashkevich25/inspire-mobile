import React from 'react';

import { View } from 'react-native';

import { Styles } from './styles';

interface SeparatorProps {
    height?: number;
}

export function ListItemSeparator(props: SeparatorProps) {
    return <View style={[Styles.contentContainer, { height: props.height || 8 }]} />;
}
