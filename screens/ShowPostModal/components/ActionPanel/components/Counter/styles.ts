import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        padding: 5,
        minWidth: 25,
        minHeight: 25,
        borderRadius: 25,
        backgroundColor: ThemeVariables.FlashLightAndBlack,
        marginLeft: 5,
    },
    text: {
        textAlign: 'center',
    },
});
