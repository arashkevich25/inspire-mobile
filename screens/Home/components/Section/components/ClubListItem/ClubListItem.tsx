import { UserClub } from '@inspire/types';
import { isIphone } from 'app-constants';
import { Club as NavClub, ComponentId } from 'navigation';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Image, Text } from 'components';
import { GlobalStyles } from 'global-styles';
import { Sizes } from 'types';

import { Styles } from '../../styles';

interface ClubListItemProps {
    club: UserClub;
}

export function ClubListItem(props: ClubListItemProps) {
    async function openClub() {
        await Navigation.push(ComponentId.AppHome, { component: NavClub(props.club.uniqueName) });
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={openClub} style={[Styles.postItemContainer]}>
            <View style={[Styles.postItemImage, { borderWidth: isIphone ? 0.3 : 0 }, GlobalStyles.shadowBasic]}>
                <Image width={100} uri={{ uri: props.club.logo }} />
            </View>
            <Text numberOfLines={1} fontSize={Sizes.Small}>
                {props.club.name}
            </Text>
        </TouchableOpacity>
    );
}
