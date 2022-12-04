import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        height: '100%',
        width: '100%',
        borderWidth: 1,
        borderColor: ThemeVariables.BlueAndWhite,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: ThemeVariables.BlueAndWhite,
    },
});
