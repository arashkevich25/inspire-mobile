import { Body, Left } from 'native-base';
import React from 'react';

import { Image, View } from 'react-native';

import { SplayListItem, Text } from 'components';
import { useEditPosts } from 'hooks';
import { createdAtCalc } from 'tools';
import { Draft, Sizes } from 'types';
import { drafts } from '../../../../../../../e2e/selectors/drafts';

import { Styles } from './styles';

interface ListItemProps {
    item: Draft;
}

export function ListItem(props: ListItemProps) {
    const [createdAt] = createdAtCalc(new Date(props.item.createdDate));
    const { editDraft } = useEditPosts();

    function openAddPost() {
        editDraft(props.item);
    }

    return (
        <SplayListItem testId={drafts.posts.byName(props.item.post.name)} pressHandle={openAddPost}>
            <Left>
                <View style={Styles.image}>
                    {props.item.post.photos.length ? (
                        <Image style={Styles.image} source={{ uri: props.item.post.photos[0] }} />
                    ) : (
                        <Image style={Styles.image} source={require('../../../../../../assets/tiles/10.jpg')} />
                    )}
                </View>
            </Left>
            <Body style={Styles.bodyBox}>
                <Text fontSize={Sizes.Medium} numberOfLines={1}>
                    {props.item.post.name}
                </Text>
                <Text color="gray" fontSize={Sizes.XSmall} numberOfLines={1}>
                    {createdAt}
                </Text>
            </Body>
        </SplayListItem>
    );
}
