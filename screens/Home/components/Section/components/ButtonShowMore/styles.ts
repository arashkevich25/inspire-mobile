import { ThemeVariables } from '../../../../../../types/ThemeVariables';

import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: {
        height: 50,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    text: {
        color: ThemeVariables.BlueAndWhite,
    },
});
