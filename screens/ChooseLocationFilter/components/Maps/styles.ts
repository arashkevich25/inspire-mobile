import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools/';

export const Styles = EStyleSheet.create({
    widthBox: {
        width: winWidth,
    },
    searchBox: {
        zIndex: 99,
    },
});
