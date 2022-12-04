import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        backgroundColor: ThemeVariables.BlackAndWhite,
    },
    contentBox: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    avatarBox: {
        width: 50,
    },
    bodyBox: {
        width: winWidth - 90,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 1,
    },
});
