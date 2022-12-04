import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        height: 50,
        backgroundColor: ThemeVariables.HighlightColor1,
        zIndex: 9,
    },
    button: {
        width: '100%',
        height: '100%',
    },
    text: {
        lineHeight: 50,
        textAlign: 'center',
        color: ThemeVariables.White,
    },
});
