import { PostDto } from '@inspire/types';
import React from 'react';

import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text } from 'components';
import { StylesValue } from 'tools';
import { Sizes, ThemeVariables } from 'types';

import { Styles } from './styles';

interface SmallQueuedPostProps {
    timeoutState: boolean;
    postQueued: PostDto;
    repeat: (postsQueue: PostDto) => void;
    remove: (postsQueue: PostDto) => void;
}

export function SmallQueuedPost(props: SmallQueuedPostProps) {
    function repeatHandle() {
        props.repeat(props.postQueued);
    }

    function remove() {
        props.remove(props.postQueued);
    }

    return (
        <View style={Styles.contentBox}>
            <View style={Styles.thumbnailBox}>
                <Image source={{ uri: props.postQueued.photos[0] }} style={Styles.thumbnail} />
            </View>
            <View style={Styles.flexBox}>
                <Text numberOfLines={1} fontSize={Sizes.Medium}>
                    {props.postQueued.name}
                </Text>
            </View>
            {props.timeoutState ? (
                <View style={Styles.actionBox}>
                    <TouchableOpacity style={Styles.buttonBox} onPress={repeatHandle}>
                        <Icon name="repeat" color={StylesValue(ThemeVariables.TextColorGray)} size={22} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.buttonBox} onPress={remove}>
                        <Icon name="remove" color={StylesValue(ThemeVariables.TextColorGray)} size={22} />
                    </TouchableOpacity>
                </View>
            ) : null}
        </View>
    );
}
