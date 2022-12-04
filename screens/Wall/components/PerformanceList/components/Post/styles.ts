import { ITEM_HEIGHT } from '../../constants/itemHeight';

import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        width: '100%',
        backgroundColor: ThemeVariables.BlackAndWhite,
        height: ITEM_HEIGHT,
        paddingBottom: 30,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 20,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10,
    },
    topPanelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginRight: 10,
        marginBottom: 0,
        marginLeft: 10,
    },
    inspireCountBox: { top: -10 },
});
