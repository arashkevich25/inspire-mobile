import { isIphone } from 'app-constants';

import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools/screenSizes';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: isIphone ? 0 : 30,
        width: isIphone ? winWidth / 2 + 30 : winWidth,
        height: 40,
    },
    menuContainer: {
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: 50,
    },
    logoContainer: {
        width: 100,
        marginLeft: isIphone ? 0 : 20,
    },
});
