import React from 'react';

import { View } from 'react-native';

import { Image, Text } from 'components';
import { client } from 'configs/graphql';
import { Sizes } from 'types';

import { Styles } from './styles';

interface ThankyouProps {
    closeHandle: () => void;
}

export function Thankyou(props: ThankyouProps) {
    setTimeout(() => {
        props.closeHandle();
        client.resetStore();
    }, 3000);

    return (
        <View style={Styles.contentContainer}>
            <View style={Styles.logoBox}>
                <Image width={77} uri={require('./../../../../assets/simplelogo.png')} />
            </View>
            <View style={Styles.illustrationBox}>
                <Image uri={require('./../../assets/3.png')} />
            </View>
            <View style={Styles.informationBox}>
                <Text
                    style={Styles.text1}
                    fontSize={Sizes.Large}
                    isBold={true}
                    translateKey="userIntroSetup.headers.thankyou"
                />
                <Text fontSize={Sizes.Large} isBold={true} translateKey="userIntroSetup.descriptions.thankyou" />
            </View>
        </View>
    );
}
