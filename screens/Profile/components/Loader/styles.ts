import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools/';

export const Styles = EStyleSheet.create({
    contentContainer: { width: '100%', height: '100%', flexDirection: 'column', alignItems: 'center' },
    userDetailsBox: { width: '100%', flexDirection: 'row', padding: 20, paddingTop: 40 },
    userAvatar: { width: 90, height: 90 },
    nameBox: {
        marginLeft: 10,
    },
    nameBoxLine1: { width: 140, height: 30 },
    nameBoxLine2: { width: 80, height: 20, marginTop: 10 },
    nameBoxLine3: { width: 120, height: 15, marginTop: 15 },
    postsBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    postTile: {
        width: winWidth / 3.1,
        height: winWidth / 3.1,
        marginTop: 2,
    },
    postsDivider: { width: winWidth, height: 5, marginTop: 20 },
    textTile: { width: 40, height: 40 },
    testBox: {
        width: '100%',
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 20,
        justifyContent: 'space-between',
    },
    tabsBox: { width: '100%', flexDirection: 'row', justifyContent: 'space-around' },
    tab: { width: 200, height: 40, marginTop: 25 },
});
