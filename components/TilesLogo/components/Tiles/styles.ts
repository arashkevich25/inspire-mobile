import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools/screenSizes';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 250,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageBox: {
        position: 'relative',
        marginRight: 10,
    },
    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: ThemeVariables.HighlightColor1,
        opacity: 0.5,
        zIndex: 1,
    },
    flexBox: {
        flex: 1,
    },
    flexBox2: {
        flex: 2,
    },
    boxWidth: {
        width: winWidth / 4,
    },
    heightS: {
        height: 20,
    },
    heightM: {
        height: 30,
    },
    heightL: {
        height: 200,
    },
});
