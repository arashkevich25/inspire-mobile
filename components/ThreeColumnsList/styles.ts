import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        backgroundColor: ThemeVariables.BlackAndWhite,
        minHeight: '100%',
        width: winWidth,
    },
});
