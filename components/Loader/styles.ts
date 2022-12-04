import EStyleSheet from 'react-native-extended-stylesheet';

import { winHeight, winWidth } from 'tools';

export const Styles = EStyleSheet.create({
    contentContainer: {
        width: winWidth,
        height: winHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
