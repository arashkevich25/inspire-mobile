import EStyleSheet from 'react-native-extended-stylesheet';

import { winHeight, winWidth } from 'tools';

export const Styles = EStyleSheet.create({
    contentContainer: {
        height: winHeight - 200,
        width: winWidth,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    iconContainer: {
        height: 50,
    },
    labelContainer: {
        width: winWidth / 2,
        alignItems: 'center',
    },
    label: {
        fontStyle: 'italic',
        textAlign: 'center',
        lineHeight: 25,
    },
});
