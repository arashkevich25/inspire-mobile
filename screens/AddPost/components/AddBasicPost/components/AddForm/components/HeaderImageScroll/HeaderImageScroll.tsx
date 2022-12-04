import { ImagePostSize } from 'app-constants/ImagePostSize';
import React, { forwardRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PhotoChooseButtons } from '../../../../../PhotoChooseButtons';

import { Keyboard, KeyboardEvent, View } from 'react-native';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';

import { selectImagesFromCamera, selectImagesFromPicker } from 'actions';
import { StylesValue, winHeight } from 'tools';
import { ThemeVariables } from 'types';
import { addPost } from '../../../../../../../../../e2e/selectors';
import { ImageSlider } from './components';

import { Styles } from './styles';

interface HeaderImageScrollProps {
    selectedPhotos: string[];
    children: JSX.Element;
    unselectPhoto: (uri: string) => void;
}

function Component(props: HeaderImageScrollProps, ref: any) {
    const { children, selectedPhotos } = props;
    const dispatch = useDispatch();
    const [yOffSet, seYOffset] = useState(0);
    const height = ImagePostSize.Height < winHeight ? ImagePostSize.Height / 2 : winHeight / 6 + 100;

    function takePhoto() {
        dispatch(selectImagesFromCamera());
    }

    async function openPickerHandle() {
        dispatch(selectImagesFromPicker());
    }

    function setDeviceKeyboardIsShowNewHeight(keyBoard: KeyboardEvent) {
        seYOffset(keyBoard.endCoordinates.height);
    }

    function setDeviceKeyboardIsHideNewHeight(keyBoard: KeyboardEvent) {
        seYOffset(keyBoard.endCoordinates.height);
    }

    const keyboardWillShow = Keyboard.addListener('keyboardWillShow', setDeviceKeyboardIsShowNewHeight);
    const keyboardWillHide = Keyboard.addListener('keyboardWillHide', setDeviceKeyboardIsHideNewHeight);

    useEffect(() => {
        return function cleanup() {
            keyboardWillShow.remove();
            keyboardWillHide.remove();
        };
    });
    return (
        <HeaderImageScrollView
            scrollViewBackgroundColor={StylesValue(ThemeVariables.BackgroundColor2)}
            maxHeight={height}
            minHeight={0}
            ref={ref}
            testID={addPost.scrollView.addPost}
            bounces={false}
            contentOffset={{ y: yOffSet, x: 0 }}
            renderForeground={() => (
                <View>
                    <View
                        style={[
                            Styles.foregroundContainer,
                            {
                                height: selectedPhotos[0] ? height - 100 : height,
                            },
                        ]}>
                        {selectedPhotos[0] ? null : (
                            <PhotoChooseButtons openPickerHandle={openPickerHandle} takePhoto={takePhoto} />
                        )}
                    </View>
                    <ImageSlider unselectPhoto={props.unselectPhoto} selectedPhotos={selectedPhotos} />
                </View>
            )}
            headerImage={selectedPhotos[0] ? { uri: selectedPhotos[0] } : require('../../assets/addPost.jpg')}>
            {children}
        </HeaderImageScrollView>
    );
}

export const HeaderImageScroll = forwardRef(Component);
