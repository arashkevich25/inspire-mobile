import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        width: 30,
        height: 30,
        borderRadius: 8,
        marginRight: 5,
        padding: 5,
        borderWidth: 0.3,
        borderColor: ThemeVariables.Color2,
        backgroundColor: ThemeVariables.BackgroundColor4,
    },
    inspireActive: {
        borderColor: ThemeVariables.HighlightColor1,
    },
    recommendActive: {
        borderColor: ThemeVariables.Gold,
    },
});
