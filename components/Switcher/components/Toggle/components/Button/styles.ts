import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        borderBottomWidth: 2,
    },
    active: {
        borderBottomColor: ThemeVariables.HighlightColor1,
    },
    noneActive: {
        borderBottomColor: ThemeVariables.BorderColor1,
    },
    text: { textAlign: 'center' },
});
