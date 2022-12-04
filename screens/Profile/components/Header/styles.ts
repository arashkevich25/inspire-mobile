import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools/screenSizes';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        backgroundColor: ThemeVariables.BlackAndWhite,
    },
    menuAndButtonContainer: {
        position: 'relative',
    },
    detailsBox: { position: 'relative' },
    detailsNameAnimatedBox: { left: 20 },
    detailsNameText: { maxWidth: winWidth / 2 },
    rootUserMenuBox: {
        position: 'absolute',
        bottom: 5,
    },
    backButtonBox: {
        position: 'absolute',
        bottom: 40,
    },
    userMenuBox: {
        position: 'absolute',
        top: 10,
        right: 0,
        zIndex: 1,
    },
    followUnfollowBox: {
        marginRight: 20,
    },
});
