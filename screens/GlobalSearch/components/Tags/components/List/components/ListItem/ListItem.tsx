import { Tag } from '@inspire/types';
import { Body, Left } from 'native-base';
import React from 'react';

import { View } from 'react-native';

import { Image, Text } from 'components';
import { SplayListItem } from 'components/SplayListItem';
import { StylesValue } from 'tools';
import I18n from 'tools/translate';
import { Sizes, ThemeVariables } from 'types';

import { Styles } from './styles';

interface ListItemProps {
    tag: Tag;
    openDetails: (tag: Tag) => void;
}

export function ListItem(props: ListItemProps) {
    async function openDetails() {
        props.openDetails(props.tag);
    }

    return (
        <SplayListItem testId={props.tag.tag} pressHandle={openDetails}>
            <Left>
                <View style={Styles.imageContainer}>
                    <Image
                        height={30}
                        tintColor={StylesValue(ThemeVariables.TextColor1)}
                        width={30}
                        uri={require('../../../../assets/hashtag.png')}
                    />
                </View>
            </Left>
            <Body style={Styles.bodyContainer}>
                <Text fontSize={Sizes.Large} numberOfLines={1}>
                    {props.tag.tag}
                </Text>
                <Text color="gray" fontSize={Sizes.XSmall} numberOfLines={1}>
                    {I18n.t('globalSearch.tags.postsCountText', { count: props.tag.postsCount })}
                </Text>
            </Body>
        </SplayListItem>
    );
}
