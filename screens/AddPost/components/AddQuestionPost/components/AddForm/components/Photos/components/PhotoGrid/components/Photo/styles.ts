import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';

export const Styles = EStyleSheet.create({
    contentContainer: {
        height: (winWidth - 50) / 3,
        marginRight: 3,
        marginBottom: 3,
        position: 'relative',
    },
});
