import React from 'react';

import { ScrollView, View } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';
import { PostImage } from './components';

import { Styles } from './styles';

interface ImageSliderProps {
    selectedPhotos: string[];
    unselectPhoto: (uri: string) => void;
}

export function ImageSlider(props: ImageSliderProps) {
    return (
        <View style={Styles.contentContainer}>
            <View style={Styles.overlay} />
            {props.selectedPhotos.length ? (
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {props.selectedPhotos.map(photo => (
                        <PostImage removeHandle={props.unselectPhoto} key={photo} imgUri={photo} />
                    ))}
                </ScrollView>
            ) : (
                <View style={Styles.lackBox}>
                    <Text color="gray" fontSize={Sizes.Large} translateKey="addPost.titles.lackOfPhotoPlug" />
                </View>
            )}
        </View>
    );
}
