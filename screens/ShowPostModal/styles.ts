import { isIphone } from 'app-constants';

import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';
import { isIphoneX } from 'tools/isIphoneX';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        marginTop: isIphone ? (isIphoneX() ? -50 : -20) : 0,
    },
    dataLine: {
        width: winWidth,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 5,
    },
    groupContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    groupButtonBox: { marginBottom: 15 },
    groupVerticalLine: {
        width: 1,
        height: 10,
        borderWidth: 0.5,
        position: 'absolute',
        top: -13,
        left: 15,
        right: 0,
    },
    pill: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        marginRight: 10,
        borderWidth: 0.3,
        borderRadius: 4,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: ThemeVariables.BorderColor1,
    },
    inspirationComponentContainer: {},
    creationTimeBox: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    privatePostIconBox: {
        marginLeft: 20,
    },
    listHeader: {},
    viewsCountBox: { flexDirection: 'row' },
    viewsCountText: { fontStyle: 'italic' },
    urlText: { width: winWidth / 1.2 },
    groupName: { marginLeft: 10 },
    backButtonContainer: {
        position: 'absolute',
        top: isIphone ? (isIphoneX() ? 50 : 20) : 0,
        width: '100%',
        zIndex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    backButtonBox: {
        marginTop: -10,
    },
});
