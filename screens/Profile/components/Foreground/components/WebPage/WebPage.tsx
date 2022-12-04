import React from 'react';

import { Linking, TouchableOpacity } from 'react-native';

import { Text } from 'components';

import { Styles } from './styles';

interface WebPageProps {
    link: string;
}

export function WebPage(props: WebPageProps) {
    function openUrl() {
        if (!props.link.includes('https') || !props.link.includes('http')) {
            Linking.openURL(`https://${props.link}`);
            return;
        }

        Linking.openURL(props.link);
    }

    return (
        <TouchableOpacity style={Styles.contentContainer} onPress={openUrl}>
            <Text numberOfLines={1} color="blue">
                {props.link}
            </Text>
        </TouchableOpacity>
    );
}
