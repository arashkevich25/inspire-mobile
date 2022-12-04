import { ImagePostSize } from 'app-constants/ImagePostSize';

import EStyleSheet from 'react-native-extended-stylesheet';

import { calcPhotoHeight, winWidth } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        width: '100%',
        backgroundColor: ThemeVariables.BackgroundColor2,
        height: calcPhotoHeight(ImagePostSize.Height, ImagePostSize.Width, winWidth) + 180,
        borderBottomWidth: 5,
        borderBottomColor: ThemeVariables.BackgroundColor1,
    },
    box1: { margin: 10, flexDirection: 'row', justifyContent: 'space-between' },
    box2: { flexDirection: 'row', alignItems: 'center' },
    box3: { width: 40, height: 40 },
    box4: { width: 100, height: 20, marginLeft: 10 },
    box5: { width: 60, height: 40 },
    box6: { margin: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    box7: { width: 100, height: 10 },
    box8: { width: 150, height: 20 },
    box9: { marginLeft: 5, marginTop: 10 },
    box10: { width: '80%', height: 15 },
    box11: { marginLeft: 5, marginTop: 20 },
    box12: { width: 100, height: 15 },
    fullWidth: { width: '100%' },
});
