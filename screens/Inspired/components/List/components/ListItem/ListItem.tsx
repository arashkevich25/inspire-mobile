import { SimplifiedPost } from '@inspire/types';
import { Body, Left } from 'native-base';
import { ComponentId, NoConnectionStatus, ShowPostModalFromPostById } from 'navigation';
import React from 'react';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Image, SplayListItem, Text } from 'components';
import I18n from 'tools/translate';
import { Sizes } from 'types';
import { inspired } from '../../../../../../../e2e/selectors';

import { Styles } from './styles';

interface ListItemProps {
    listItem: SimplifiedPost;
    componentId: ComponentId.AppInspired;
    isInternetReachableState: boolean;
}

export function ListItem(props: ListItemProps) {
    async function openDetails() {
        if (!props.isInternetReachableState) {
            // TODO empty props, waiting for https://github.com/wix/react-native-navigation/issues/6763
            await Navigation.push(props.componentId, { component: NoConnectionStatus('') });
            return;
        }
        await Navigation.push(props.componentId, {
            component: ShowPostModalFromPostById(props.listItem.id, props.componentId, I18n.t('inspired.title')),
        });
    }

    return (
        <SplayListItem testId={inspired.posts.byName(props.listItem.name)} pressHandle={openDetails}>
            <Left>
                <View style={Styles.imageContainer}>
                    <Image height={50} width={50} uri={{ uri: props.listItem.photo }} />
                </View>
            </Left>
            <Body style={Styles.bodyContainer}>
                <Text fontSize={Sizes.Medium} numberOfLines={1}>
                    {props.listItem.name}
                </Text>
                <Text color="gray" fontSize={Sizes.XSmall} numberOfLines={1}>
                    {props.listItem.desc}
                </Text>
            </Body>
        </SplayListItem>
    );
}
