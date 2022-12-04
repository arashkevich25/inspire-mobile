import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: winWidth,
        backgroundColor: ThemeVariables.BlackAndWhite,
        height: 30,
        zIndex: 1,
        marginTop: 10,
    },
});
