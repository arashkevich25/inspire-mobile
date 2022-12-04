import EStyleSheet from 'react-native-extended-stylesheet';

import { winHeight } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        backgroundColor: ThemeVariables.BackgroundColor4,
        height: winHeight,
        width: '100%',
        zIndex: 99,
    },
});
