import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: ThemeVariables.BorderColor1,
    },
});
