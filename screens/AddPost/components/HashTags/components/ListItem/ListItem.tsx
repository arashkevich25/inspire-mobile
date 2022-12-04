import { Tag } from '@inspire/types';
import React from 'react';

import { TouchableOpacity } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';

import { Styles } from './styles';

interface ListItemProps {
    item: Tag;
    clickTag: (tag: Tag) => void;
}

export function ListItem(props: ListItemProps) {
    function clickHandle() {
        props.clickTag(props.item);
    }

    return (
        <TouchableOpacity style={Styles.contentContainer} onPress={clickHandle}>
            <Text style={Styles.text} fontSize={Sizes.Large}>
                #{props.item.tag}
            </Text>
        </TouchableOpacity>
    );
}
