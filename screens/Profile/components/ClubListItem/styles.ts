import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        height: 100,
        marginRight: 10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    customTitleOverlayLayer: {
        backgroundColor: ThemeVariables.Black,
        opacity: 0.5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 20,
    },
    postTitle: {
        color: ThemeVariables.White,
        paddingLeft: 5,
        paddingRight: 5,
        lineHeight: 20,
    },
    textBox: { position: 'absolute', bottom: 0, left: 0, right: 0 },
});
