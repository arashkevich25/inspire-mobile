import { isIphone } from 'app-constants';

import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        width: isIphone ? '100%' : 100,
        flex: 1,
    },
});
