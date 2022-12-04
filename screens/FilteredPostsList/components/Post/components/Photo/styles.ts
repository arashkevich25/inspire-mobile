import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        height: '100%',
        borderRadius: 8,
        backgroundColor: ThemeVariables.BackgroundColor2,
    },
});
