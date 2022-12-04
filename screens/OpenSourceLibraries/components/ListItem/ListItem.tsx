import React from 'react';
import { FinalLicense } from '../../OpenSourceLibraries';

import { TouchableOpacity } from 'react-native';

import { Text } from 'components';

import { Styles } from './styles';

interface ListItemProps {
    onPress: (url: string) => void;
    item: FinalLicense;
}

export function ListItem(props: ListItemProps) {
    function onPressHandle() {
        props.onPress(props.item.licenseSpecs.licenseUrl);
    }

    return (
        <TouchableOpacity style={Styles.contentContainer} onPress={onPressHandle}>
            <Text>{props.item.name}</Text>
            <Text>{props.item.version}</Text>
        </TouchableOpacity>
    );
}
