import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        width: '90%',
        height: 70,
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 8,
    },
    inspiredContainer: {
        backgroundColor: ThemeVariables.HighlightColor1,
    },
    recommendContainer: {
        backgroundColor: ThemeVariables.Gold,
    },
});
