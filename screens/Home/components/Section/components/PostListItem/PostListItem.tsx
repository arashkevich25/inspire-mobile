import { SimplifiedPost } from '@inspire/types';
import React from 'react';
import { ComponentId } from '../../../../../../navigation/constants/componentId';

import { TouchableOpacity, View } from 'react-native';

import { Image, Text } from 'components';
import { GlobalStyles } from 'global-styles';
import { redirectToFullPostView } from 'tools';
import { Sizes } from 'types';

import { Styles } from '../../styles';

interface PostListItemProps {
    post: SimplifiedPost;
    isInternetReachableState: boolean;
}

export function PostListItem(props: PostListItemProps) {
    function openPost() {
        redirectToFullPostView(props.post.id, props.isInternetReachableState, ComponentId.AppHome, '');
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={openPost} style={[Styles.postItemContainer]}>
            <View style={[Styles.postItemImage, GlobalStyles.shadowBasic]}>
                <Image width={100} borderRadius={8} uri={{ uri: props.post.photo }} />
            </View>
            <Text numberOfLines={1} fontSize={Sizes.Small}>
                {props.post.name}
            </Text>
        </TouchableOpacity>
    );
}
