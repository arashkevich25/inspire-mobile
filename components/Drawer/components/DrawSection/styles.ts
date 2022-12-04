import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: ThemeVariables.BorderColor1,
    },
    text: {
        textAlign: 'center',
    },
});
