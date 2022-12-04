import React from 'react';

import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Image, Text } from 'components';
import { copyPostPublicUrl, StylesValue } from 'tools';
import { Sizes, ThemeVariables } from 'types';

import { Styles } from '../../styles';

interface CopyLinkProps {
    closeModalHandle: () => void;
    postId: string;
}

export function CopyLink(props: CopyLinkProps) {
    function copyPostUrl() {
        copyPostPublicUrl(props.postId);
        props.closeModalHandle();
    }

    return (
        <TouchableOpacity style={Styles.itemBox} onPress={copyPostUrl}>
            <View style={[Styles.borderedBox, Styles.textMargin]}>
                <Image
                    tintColor={StylesValue(ThemeVariables.Black)}
                    width={24}
                    uri={require('./../../../../assets/link.png')}
                />
            </View>
            <Text fontSize={Sizes.Small}>Copy link</Text>
        </TouchableOpacity>
    );
}
