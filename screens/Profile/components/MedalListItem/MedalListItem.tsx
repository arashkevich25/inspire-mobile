import { Competition } from '@inspire/types';
import { CompetitionDetails } from 'navigation';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Image, Text } from 'components';
import { GlobalStyles } from 'global-styles';
import { NavProps, Sizes } from 'types';

import { Styles } from './styles';

interface MedalListItemProps extends NavProps {
    medal: Competition;
}

export function MedalListItem(props: MedalListItemProps) {
    async function showMedalDetails() {
        await Navigation.push(props.componentId, { component: CompetitionDetails(props.medal.id) });
    }

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={showMedalDetails}
            style={[Styles.contentContainer, GlobalStyles.shadowBasic]}>
            <View>
                <Image width={100} uri={{ uri: props.medal.media[0].uri }} />
                <View style={Styles.nameBox}>
                    <View style={GlobalStyles.titleOverlayLayer} />
                    <Text numberOfLines={1} style={GlobalStyles.postTitle} fontSize={Sizes.Small}>
                        {props.medal.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
