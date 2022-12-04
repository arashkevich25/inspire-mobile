import React from 'react';
import { Text } from '../../';

import { View } from 'react-native';
import { ToastShowParams } from 'react-native-toast-message';

import { GlobalStyles } from 'global-styles/globalStyles';
import { Sizes } from 'types';

import { Styles } from '../styles';

export function InspiredToast(props: ToastShowParams) {
    return (
        <View style={[Styles.contentContainer, Styles.inspiredContainer, GlobalStyles.shadowBasic]}>
            <Text isBold={true} color="white" fontSize={Sizes.Medium}>
                {props.text1}
            </Text>
            <Text isBold={true} color="white" fontSize={Sizes.Small}>
                {props.text2}
            </Text>
        </View>
    );
}
