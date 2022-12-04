import { MarketingResponse } from '@inspire/types';
import { ComponentId } from 'navigation/constants/componentId';
import React from 'react';

import { Image, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { setActionOnMarketingMessage } from 'actions/marketing';
import { Button, ButtonTypes, Text } from 'components';
import { deviceLocation } from 'tools/deviceLocation';
import { Sizes } from 'types';

import { Styles } from './styles';

interface EncouragingProps {
    marketing: MarketingResponse;
}

export function Encouraging(props: EncouragingProps) {
    function closeOverlay() {
        setActionOnMarketingMessage(false, true, props.marketing.id);
        Navigation.dismissOverlay(ComponentId.ScreenEncouraging);
    }

    async function openAddPost() {
        setActionOnMarketingMessage(true, false, props.marketing.id);
        await Navigation.dismissOverlay(ComponentId.ScreenEncouraging);
        Navigation.mergeOptions(ComponentId.AppHome, {
            bottomTabs: {
                currentTabIndex: 2,
            },
        });
    }

    return (
        <View style={Styles.contentContainer}>
            <View style={Styles.overlay} />
            <View style={Styles.contentBox}>
                <Text fontSize={Sizes.Large} style={Styles.titleText}>
                    {props.marketing.message[deviceLocation].title}
                </Text>
                <Image source={{ uri: props.marketing.message.media }} style={Styles.image} />
                <Text fontSize={Sizes.Medium} style={Styles.descriptionText}>
                    {props.marketing.message[deviceLocation].description}
                </Text>
                <View style={Styles.primaryButtonContainer}>
                    <Button color="white" type={ButtonTypes.Filled} onPress={openAddPost}>
                        {props.marketing.message[deviceLocation].primaryButtonTitle}
                    </Button>
                </View>
                <View style={Styles.secondButtonContainer}>
                    <Button size="small" color="color1" type={ButtonTypes.Link} onPress={closeOverlay}>
                        {props.marketing.message[deviceLocation].secondaryButtonTitle}
                    </Button>
                </View>
            </View>
        </View>
    );
}
