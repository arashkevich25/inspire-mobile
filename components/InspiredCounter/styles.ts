import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        position: 'relative',
        flexDirection: 'row-reverse',
    },
    counterBox: {
        height: 25,
        width: 30,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderLeftColor: 'transparent',
    },
    active: {
        borderColor: ThemeVariables.HighlightColor1,
    },
    icon: {
        width: 7,
        height: 26,
    },
    borderWhite: {
        borderColor: ThemeVariables.White,
    },
    borderDark: {
        borderColor: ThemeVariables.Color1,
    },
    text: { lineHeight: 21, textAlign: 'center' },
});
