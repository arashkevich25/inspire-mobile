import EStyleSheet from 'react-native-extended-stylesheet';

import { winHeight } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: ThemeVariables.BlackAndWhite,
        width: '100%',
        height: '100%',
    },
    listContainer: { height: winHeight },
});
