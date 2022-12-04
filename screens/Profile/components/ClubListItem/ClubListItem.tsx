import { UserClub } from '@inspire/types';
import { Club as NavClub } from 'navigation';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Image, Text } from 'components';
import { GlobalStyles } from 'global-styles';
import { NavProps, Sizes } from 'types';

import { Styles } from './styles';

interface ClubListItemProps extends NavProps {
    club: UserClub;
}

export function ClubListItem(props: ClubListItemProps) {
    async function openClub() {
        await Navigation.push(props.componentId, { component: NavClub(props.club.uniqueName) });
    }

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={openClub}
            style={[Styles.contentContainer, GlobalStyles.shadowBasic]}>
            <View>
                <Image width={100} uri={{ uri: props.club.logo }} />
                <View style={Styles.textBox}>
                    <View style={Styles.customTitleOverlayLayer} />
                    <Text numberOfLines={1} style={Styles.postTitle} fontSize={Sizes.Small}>
                        {props.club.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
