import React from 'react';
import { TileConfig } from './constants/tileConfig';

import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Image } from 'components/Image/Image';
import { profile } from '../../../../../e2e/selectors';

import { Styles } from './styles';

interface ListItemProps {
    post: any;
    openDetails: (postId: string) => void;
}

export function ListItem(props: ListItemProps) {
    function openDetails() {
        props.openDetails(props.post.id);
    }

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={Styles.contentContainer}
            onPress={openDetails}
            testID={profile.posts.byName(props.post.name)}>
            {props.post.photo ? (
                <Image
                    height={TileConfig.Height}
                    width={TileConfig.Width}
                    uri={{ uri: props.post.photo }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            ) : (
                <View style={Styles.item} />
            )}
        </TouchableOpacity>
    );
}
