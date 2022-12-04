import EStyleSheet from 'react-native-extended-stylesheet';

import { winHeight } from 'tools';
import { isIphoneX } from 'tools/isIphoneX';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        padding: 30,
        height: isIphoneX() ? winHeight - 70 : winHeight,
    },
    itemBox: {
        marginBottom: 20,
    },
    descriptionBox: {
        marginBottom: 20,
        lineHeight: 20,
    },
    headerBox: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    contentBox: {
        flex: 5,
    },
    buttonsContainer: {
        width: '100%',
        position: 'relative',
        height: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    buttonsBox: { width: 100, height: 40 },
    buttonIcon: {
        marginLeft: 10,
        width: 25,
        height: 10,
    },
    bottomBarFloat: {
        backgroundColor: ThemeVariables.BlackAndWhite,
        marginTop: 10,
    },
    floatOverlay: {
        position: 'absolute',
        top: -10,
        left: -30,
        right: -30,
        bottom: -100,
        backgroundColor: ThemeVariables.BlackAndWhite,
    },
    prevButton: {
        justifyContent: 'center',
    },
});
