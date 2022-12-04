import React, { useEffect, useRef } from 'react';

import { Animated, PanResponder, ScrollView } from 'react-native';

import { winWidth } from 'tools';
import { ImageViewerImagesData } from 'types';
import { SizerImage } from './components/SizerImage';

import { Styles } from './styles';

interface ImageViewerProps {
    images: ImageViewerImagesData[];
    onCloseHandle: () => void;
    index?: number;
}

export function ImageViewer(props: ImageViewerProps) {
    const translateY = new Animated.Value(0);
    const listRef = useRef<ScrollView>();

    useEffect(() => {
        if (listRef.current && props.index) {
            listRef.current.scrollTo({ x: winWidth * props.index });
        }
    }, [listRef]);

    const panResponder = PanResponder.create({
        onPanResponderMove: (event, gestureState) => {
            if (gestureState.dy > 0) {
                translateY.setValue(gestureState.dy);
            }

            if (gestureState.dy > 100) {
                props.onCloseHandle();
                return;
            }
        },
        onPanResponderRelease: () => {
            Animated.spring(translateY, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        },
    });

    return (
        <Animated.View style={[Styles.flexContainer, { transform: [{ translateY }] }]}>
            <ScrollView
                // @ts-ignore
                ref={listRef}
                {...panResponder.panHandlers}
                style={Styles.flexContainer}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}>
                {props.images.map((image, index) => (
                    <SizerImage image={image} key={index} />
                ))}
            </ScrollView>
        </Animated.View>
    );
}
