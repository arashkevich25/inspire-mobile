import { AvatarActionTypes } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { openCamera as openCameraHandle, openPicker as openPickerHandle } from 'react-native-image-crop-picker';

import { AvatarSizes } from 'types';

export function openPicker() {
    return (dispatch: Dispatch) => {
        openPickerHandle({
            width: AvatarSizes.Width,
            height: AvatarSizes.Height,
            cropping: true,
        }).then((image: any) => dispatch({ type: AvatarActionTypes.SelectNewAvatar, uri: image.path }));
    };
}

export function openCamera() {
    return (dispatch: Dispatch) => {
        openCameraHandle({
            width: AvatarSizes.Width,
            height: AvatarSizes.Height,
            cropping: true,
        }).then((image: any) => dispatch({ type: AvatarActionTypes.SelectNewAvatar, uri: image.path }));
    };
}

export function clearAvatarStore() {
    return {
        type: AvatarActionTypes.RemoveNewAvatar,
    };
}
