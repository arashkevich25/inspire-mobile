import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hintTextBox: {
        marginTop: 20,
    },
    icon: {
        width: 100,
        height: 100,
        tintColor: ThemeVariables.BorderColor1,
    },
});
