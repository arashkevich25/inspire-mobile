import { User } from '@inspire/types';
import { isIphone } from 'app-constants';
import { addCommentKeyboardSpacing } from 'app-constants/keyboardSpacing';
import React, { forwardRef, useState } from 'react';

import {
    Keyboard,
    NativeSyntheticEvent,
    TextInputContentSizeChangeEventData,
    TouchableOpacity,
    View,
} from 'react-native';

import { Avatar, Image, Input } from 'components';
import { useKeyboardHeight } from 'hooks';
import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';
import { post } from '../../../../../e2e/selectors';

import { Styles } from './styles';

interface CommentInputProps {
    addCommentHandle: (comment: string) => void;
    addingIsPending: boolean;
    user: User;
}

export function component(props: CommentInputProps, ref: any) {
    const defaultInputHeight = 30;
    const [comment, setComment] = useState('');
    const [inputHeight, setInputHeight] = useState(defaultInputHeight);

    function changeComment(value: string) {
        setComment(value);
    }

    function addComment() {
        if (!comment) {
            return;
        }
        props.addCommentHandle(comment);
        setComment('');
        Keyboard.dismiss();
    }

    function setCommentInputHeight(event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) {
        const gap = isIphone ? 23 : 0;
        const currentTextHeight = Math.floor(event.nativeEvent.contentSize.height + gap);
        const platformCond = isIphone
            ? currentTextHeight < defaultInputHeight * 3
            : currentTextHeight < defaultInputHeight * 4;
        if (currentTextHeight > defaultInputHeight && platformCond) {
            setInputHeight(currentTextHeight);
        }
    }
    const keyboardHeight = useKeyboardHeight();

    return (
        <View
            style={[
                Styles.contentContainer,
                {
                    paddingBottom: isIphone ? keyboardHeight + addCommentKeyboardSpacing : addCommentKeyboardSpacing,
                },
            ]}>
            <View style={Styles.inputContainer}>
                <Avatar size="small" uri={props.user.avatar} fallback={props.user.name} />
                <Input
                    innerRef={ref}
                    testID={post.fields.addComment}
                    onChangeText={changeComment}
                    multiline={true}
                    numberOfLines={2}
                    onContentSizeChange={setCommentInputHeight}
                    value={comment}
                    allowFontScaling={true}
                    style={[Styles.inputBox, { height: inputHeight }]}
                    translateKey="postFullView.inputs.addComment"
                />
                <TouchableOpacity style={Styles.touchable} onPress={addComment}>
                    <Image
                        width={25}
                        tintColor={
                            comment.trim().length
                                ? StylesValue(ThemeVariables.HighlightColor1)
                                : StylesValue(ThemeVariables.Color1)
                        }
                        uri={require('../../assets/send.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const CommentInput = forwardRef(component);
