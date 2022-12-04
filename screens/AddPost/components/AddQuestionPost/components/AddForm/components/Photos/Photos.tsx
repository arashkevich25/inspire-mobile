import React from 'react';
import { useDispatch } from 'react-redux';
import { PhotoChooseButtons } from '../../../../../PhotoChooseButtons';

import { View } from 'react-native';

import { selectImagesFromCamera, selectImagesFromPicker } from 'actions';
import { Text } from 'components';
import { Sizes } from 'types';
import { PhotoGrid } from './components';

import { Styles } from './styles';

interface PhotosProps {
    selectedPhotos: string[];
    unselectPhoto: (uri: string) => void;
}

export function Photos(props: PhotosProps) {
    const dispatch = useDispatch();
    function takePhoto() {
        dispatch(selectImagesFromCamera());
    }

    async function openPickerHandle() {
        dispatch(selectImagesFromPicker());
    }
    return (
        <View style={Styles.contentContainer}>
            <Text fontSize={Sizes.Medium} style={Styles.text} translateKey="addPost.titles.choosePhotosOptional" />
            {props.selectedPhotos.length ? (
                <PhotoGrid unselectPhoto={props.unselectPhoto} photos={props.selectedPhotos} />
            ) : (
                <View style={Styles.photoChooseContainer}>
                    <PhotoChooseButtons takePhoto={takePhoto} openPickerHandle={openPickerHandle} />
                </View>
            )}
        </View>
    );
}
