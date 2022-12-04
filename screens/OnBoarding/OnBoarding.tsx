import { StorageKeys } from 'app-constants/storageKeys';
import React from 'react';
import { Sizes } from '../../types/Sizes';

import { View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Navigation } from 'react-native-navigation';

import { Text } from 'components';
import { StylesValue } from 'tools';
import { setItemToStorage } from 'tools/storage';
import I18n from 'tools/translate';
import { NavProps, ThemeVariables } from 'types';
import { Base } from './components';

interface SlideData {
    key: string;
    title: string;
    description: string;
    image: any;
}

const slides: SlideData[] = [
    {
        key: '1',
        title: I18n.t('onBoarding.title.firstSlide'),
        description: I18n.t('onBoarding.description.firstSlide'),
        image: require('./assets/1.png'),
    },
    {
        key: '2',
        title: I18n.t('onBoarding.title.secondSlide'),
        description: I18n.t('onBoarding.description.secondSlide'),
        image: require('./assets/2.png'),
    },
];

export function OnBoarding(props: NavProps) {
    async function closeOnBoarding() {
        await setItemToStorage(StorageKeys.OnBoardingIsDone, 'true');
        await Navigation.dismissOverlay(props.componentId);
    }

    function renderItem({ item }: { item: SlideData }) {
        return <Base key={item.key} image={item.image} title={item.title} description={item.description} />;
    }

    function renderNextButton() {
        return (
            <View style={{ bottom: -13 }}>
                <Text
                    fontSize={Sizes.Medium}
                    isBold={true}
                    color="blueAndWhite"
                    translateKey="onBoarding.buttons.next"
                />
            </View>
        );
    }

    function renderSkipButton() {
        return (
            <View style={{ bottom: -15 }}>
                <Text fontSize={Sizes.Medium} color="blueAndWhite" translateKey="onBoarding.buttons.skip" />
            </View>
        );
    }

    return (
        <AppIntroSlider
            dotStyle={{
                backgroundColor: StylesValue(ThemeVariables.BorderColor1),
            }}
            activeDotStyle={{
                backgroundColor: StylesValue(ThemeVariables.HighlightColor1),
            }}
            renderItem={renderItem}
            data={slides}
            renderNextButton={renderNextButton}
            renderSkipButton={renderSkipButton}
            renderDoneButton={renderNextButton}
            showSkipButton={true}
            onDone={closeOnBoarding}
            onSkip={closeOnBoarding}
        />
    );
}
