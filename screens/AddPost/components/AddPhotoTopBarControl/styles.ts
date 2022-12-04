import { isIphone } from 'app-constants';

import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: {
        marginRight: isIphone ? 0 : 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 70,
        height: '100%',
    },
});
