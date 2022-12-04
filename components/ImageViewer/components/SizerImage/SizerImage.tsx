import { ImageViewerImagesData } from '@inspire/types';
import React from 'react';

import { Animated } from 'react-native';
import { PinchGestureHandler, PinchGestureHandlerStateChangeEvent, State } from 'react-native-gesture-handler';

import { Image } from 'components/Image/Image';

import { Styles } from './styles';

interface SizerImageProps {
    image: ImageViewerImagesData;
}
const AnimatedImage = Animated.createAnimatedComponent(Image);
export function SizerImage(props: SizerImageProps) {
    const scale = new Animated.Value(1);

    const onZoomEvent = Animated.event(
        [
            {
                nativeEvent: { scale },
            },
        ],
        {
            useNativeDriver: true,
        },
    );

    function onZoomStateChange(event: PinchGestureHandlerStateChangeEvent) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            Animated.spring(scale, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        }
    }

    return (
        <PinchGestureHandler onGestureEvent={onZoomEvent} onHandlerStateChange={onZoomStateChange}>
            <Animated.View>
                <AnimatedImage
                    style={[Styles.image, { transform: [{ scale: scale }] }]}
                    source={props.image}
                    resizeMode="contain"
                />
            </Animated.View>
        </PinchGestureHandler>
    );
}
