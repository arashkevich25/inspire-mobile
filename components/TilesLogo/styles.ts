import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';

export const Styles = EStyleSheet.create({
    tilesContainer: {
        height: 250,
        width: winWidth,
        zIndex: 1,
    },
    logoContainer: {
        width: winWidth,
        marginTop: 30,
        alignItems: 'center',
        marginBottom: 10,
        zIndex: 1,
    },
});
