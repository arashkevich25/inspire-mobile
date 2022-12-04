import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools/screenSizes';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        backgroundColor: ThemeVariables.BlackAndWhite,
        width: winWidth,
        height: 65,
    },
});
