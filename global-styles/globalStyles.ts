import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const GlobalStyles = EStyleSheet.create({
    titleOverlayLayer: {
        backgroundColor: ThemeVariables.Black,
        opacity: 0.5,
        position: 'absolute',
        bottom: -1,
        left: 0,
        right: 0,
        height: 30,
    },
    postTitle: {
        color: ThemeVariables.White,
        paddingLeft: 5,
        paddingRight: 5,
        lineHeight: 30,
    },
    shadowBasic: {
        shadowColor: ThemeVariables.WhiteAndBlack,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
