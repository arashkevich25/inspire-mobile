import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    box: { width: winWidth / 3.1, height: winWidth / 3.1, marginTop: 2 },
});
