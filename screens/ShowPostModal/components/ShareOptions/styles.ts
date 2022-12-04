import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    scrollContainer: { alignItems: 'center' },
    contentContainer: {
        zIndex: 9,
        position: 'absolute',
        top: 50,
        bottom: 0,
        right: 0,
        left: 0,
    },
    linearGradientBox: {
        flex: 1,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    shotBox: { width: '100%', alignItems: 'center', padding: 20 },
    iconBox: {
        width: 56,
        height: 56,
    },
    itemBox: {
        marginRight: ((winWidth - 56 * 4) / 4 - 16) / 2,
        marginLeft: ((winWidth - 56 * 4) / 4 - 16) / 2,
        marginBottom: 20,
        alignItems: 'center',
    },
    borderedBox: {
        width: 56,
        height: 56,
        borderRadius: 56,
        backgroundColor: ThemeVariables.White,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textMargin: {
        marginBottom: 10,
    },
    closeBox: {
        width: 50,
        height: 50,
    },
    closeContainer: {
        width: '100%',
    },
    iconButtonsBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 50,
        marginTop: 50,
    },
});
