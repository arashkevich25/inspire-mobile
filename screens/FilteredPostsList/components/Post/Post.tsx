import { SimplifiedPost } from '@inspire/types';
import React from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { winWidth } from 'tools';
import { calcSize } from '../../tools/calcPostSize';
import { Photo, PostTitle } from './components';

import { Styles } from './styles';

interface PostProps {
    post: SimplifiedPost;
    index: number;
    pressHandle: (postId: string) => void;
}

export function Post(props: PostProps) {
    function pressHandle() {
        props.pressHandle(props.post.id);
    }
    return (
        <TouchableOpacity
            style={[Styles.ContentContainer, { height: calcSize(props.index), width: winWidth / 2.08 }]}
            onPress={pressHandle}
            activeOpacity={1}
            testID={`post['worldWall-${props.post.name}']`}>
            <Photo index={props.index} photoUri={props.post.photo} />
            <PostTitle index={props.index} title={props.post.name} />
        </TouchableOpacity>
    );
}
