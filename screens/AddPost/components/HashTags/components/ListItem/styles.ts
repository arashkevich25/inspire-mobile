import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        padding: 7,
    },
    text: {
        color: ThemeVariables.TextColorBlue,
    },
});
