import EStyleSheet from 'react-native-extended-stylesheet';

import { winHeight } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        position: 'relative',
        height: winHeight,
        backgroundColor: ThemeVariables.BackgroundColor1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
