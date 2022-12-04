/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/default */
import { DetailsPost } from '@inspire/types';
import { isIphone } from 'app-constants';
import React, { useEffect, useRef, useState } from 'react';

import { Animated, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import ViewShot from 'react-native-view-shot';

import { Image } from 'components';
import { StylesValue, winWidth } from 'tools';
import { base64FromFile } from 'tools/base64FromFile';
import { ThemeVariables } from 'types';
import { CopyLink, Facebook, Instagram, Other, PostTile, Telegram, Whatsapp } from './components';

import { Styles } from './styles';

interface ShareOptionsProps {
    isVisible: boolean;
    closeHandle: () => void;
    post: DetailsPost;
    commentsCount: number;
}

export function ShareOptions(props: ShareOptionsProps) {
    const translateY = useRef(new Animated.Value(winWidth * 2)).current;
    const refViewShot = useRef<ViewShot>();
    const [base64, setBase64] = useState('');
    const postUrl = `https://web.app-inspire.net/post/${props.post.id}`;

    useEffect(() => {
        if (props.isVisible) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }).start();

            setTimeout(() => {
                (refViewShot.current as any).capture().then(async (uri: string) => {
                    const imageBase64 = await base64FromFile(uri);
                    setBase64(imageBase64);
                });
            }, 600);
        } else {
            Animated.timing(translateY, {
                toValue: winWidth * 2,
                duration: 500,
                useNativeDriver: false,
            }).start();
        }
    }, [props.isVisible]);

    return (
        <Animated.View style={[Styles.contentContainer, { transform: [{ translateY }] }]}>
            <LinearGradient
                colors={[
                    StylesValue(ThemeVariables.BlackAndWhite),
                    StylesValue(ThemeVariables.LightBlueAndBlack),
                    StylesValue(ThemeVariables.LightBlueAndBlack),
                ]}
                style={Styles.linearGradientBox}>
                <ScrollView contentContainerStyle={Styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={Styles.closeContainer}>
                        <TouchableOpacity style={Styles.closeBox} onPress={props.closeHandle}>
                            <Image
                                width={16}
                                tintColor={StylesValue(ThemeVariables.WhiteAndBlack)}
                                uri={require('./../../assets/close.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <ViewShot ref={refViewShot} style={Styles.shotBox}>
                        <PostTile
                            avatar={props.post.user.avatar}
                            photo={props.post.photos[0].uri}
                            title={props.post.name}
                            userName={props.post.user.name}
                            uniqueName={props.post.user.userUniqName || ''}
                            description={props.post.desc}
                            recommendsCount={props.post.recommends}
                            inspireCount={props.post.inspirationCount}
                            commentsCount={props.commentsCount}
                        />
                    </ViewShot>
                    <View style={Styles.iconButtonsBox}>
                        <CopyLink postId={props.post.id} closeModalHandle={props.closeHandle} />
                        <Instagram url={postUrl} imageBase64={base64} closeModalHandle={props.closeHandle} />
                        <Facebook url={postUrl} imageBase64={base64} closeModalHandle={props.closeHandle} />
                        {isIphone ? (
                            <Telegram
                                url={postUrl}
                                title={props.post.name}
                                message={props.post.desc}
                                closeModalHandle={props.closeHandle}
                            />
                        ) : null}
                        {isIphone ? (
                            <Whatsapp
                                url={postUrl}
                                title={props.post.name}
                                message={props.post.desc}
                                closeModalHandle={props.closeHandle}
                            />
                        ) : null}
                        <Other title={props.post.name} message={props.post.desc} postId={props.post.id} />
                    </View>
                </ScrollView>
            </LinearGradient>
        </Animated.View>
    );
}
