import { ImagePostSize } from 'app-constants/ImagePostSize';

import EStyleSheet from 'react-native-extended-stylesheet';

import { calcPhotoHeight, winWidth } from 'tools';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        position: 'relative',
        width: '100%',
        height: calcPhotoHeight(ImagePostSize.Height, ImagePostSize.Width, winWidth),
        marginBottom: 5,
    },
    nameCategoryContainer: {
        height: 45,
        position: 'absolute',
        padding: 10,
        bottom: 0,
        width: '100%',
    },
    image: {
        width: '100%',
    },
});
