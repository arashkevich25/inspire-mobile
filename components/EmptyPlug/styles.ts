import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        height: '100%',
        width: winWidth,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        fontStyle: 'italic',
    },
});
