import React from 'react';

import { Image, View } from 'react-native';

import { Text } from 'components/Text';
import { Sizes } from 'types';

import { Styles } from './styles';

export function InaccessibleUser() {
    return (
        <View style={Styles.contentContainer}>
            <Image style={Styles.icon} source={require('./assets/block_user.png')} />
            <View style={Styles.hintTextBox}>
                <Text isBold={true} color="gray" fontSize={Sizes.Large} translateKey="profile.buttons.userIsBlocked" />
            </View>
        </View>
    );
}
