import { isIphone } from 'app-constants';

import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools/screenSizes';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        width: isIphone ? winWidth : '100%',
        backgroundColor: ThemeVariables.BlackAndWhite,
        paddingLeft: 10,
        borderBottomColor: ThemeVariables.BorderColor1,
        paddingBottom: 10,
        zIndex: 99,
    },
    betaText: { textAlign: 'center', lineHeight: 40 },
    betaContainer: { backgroundColor: 'red', height: 40, width: '100%' },
});
