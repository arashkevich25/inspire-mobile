import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        width: winWidth,
        height: 100,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        opacity: 0.6,
        backgroundColor: ThemeVariables.BackgroundColor1,
    },
    lackBox: { flex: 1, width: winWidth, height: 100, justifyContent: 'center', alignItems: 'center' },
});
