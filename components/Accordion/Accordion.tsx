import React, { useState } from 'react';

import { TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text } from 'components/Text';
import { StylesValue } from 'tools';
import { Sizes, ThemeVariables } from 'types';

import { Styles } from './styles';

interface AccordionProps {
    containerStyles: any;
    labelStyles: any;
    children: JSX.Element | JSX.Element[];
    label: string;
}

export function Accordion(props: AccordionProps) {
    const [isCollapsed, setCollapsed] = useState(true);

    function openCloseAccordion() {
        if (isCollapsed) {
            setCollapsed(false);
            return;
        }
        setCollapsed(true);
    }

    return (
        <>
            <TouchableOpacity activeOpacity={1} onPress={openCloseAccordion} style={props.containerStyles}>
                <View style={[Styles.labelContainer, props.labelStyles]}>
                    <View>
                        <Text fontSize={Sizes.Medium}>{props.label}</Text>
                    </View>
                    <View>
                        {isCollapsed ? (
                            <Icon name="angle-up" size={22} color={StylesValue(ThemeVariables.Color1)} />
                        ) : (
                            <Icon name="angle-down" size={22} color={StylesValue(ThemeVariables.Color1)} />
                        )}
                    </View>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>{props.children}</Collapsible>
        </>
    );
}
