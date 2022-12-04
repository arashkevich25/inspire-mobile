import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        margin: 2.5,
        height: 25,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: ThemeVariables.BorderColor1,
        borderRadius: 4,
        marginTop: 5,
    },
    isActive: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: ThemeVariables.HighlightColor1,
    },
    text: { textAlign: 'center', fontSize: 12, lineHeight: 14 },
});
