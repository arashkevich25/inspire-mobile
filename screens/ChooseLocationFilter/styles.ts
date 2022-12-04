import EStyleSheet from 'react-native-extended-stylesheet';

import { winHeight, winWidth } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: ThemeVariables.BackgroundColor1,
        width: winWidth,
        height: winHeight,
    },
});
