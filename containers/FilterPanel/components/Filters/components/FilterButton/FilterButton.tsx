import React from 'react';

import { TouchableOpacity } from 'react-native';

import { Text } from 'components';

import { Styles } from './styles';

interface FilterButtonProps {
    title: string;
    id: number;
    isActive: boolean;
    pressHandle: (id: number) => void;
}

export const FilterButton = React.forwardRef((props: FilterButtonProps, ref) => {
    const onPressHandle = () => props.pressHandle(props.id);

    return (
        <TouchableOpacity
            ref={ref}
            onPress={onPressHandle}
            style={[Styles.contentContainer, props.isActive ? Styles.isActive : null]}>
            <Text style={Styles.text} color={props.isActive ? 'blue' : 'color1'} translateKey={props.title} />
        </TouchableOpacity>
    );
});
