import EStyleSheet from 'react-native-extended-stylesheet';

import { winHeight } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        position: 'absolute',
        paddingBottom: 50,
        left: 0,
        right: 0,
        maxHeight: winHeight - 50,
        backgroundColor: ThemeVariables.BackgroundColor4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});
