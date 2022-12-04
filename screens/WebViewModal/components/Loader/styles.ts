import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: ThemeVariables.BackgroundColor2,
    },
});
