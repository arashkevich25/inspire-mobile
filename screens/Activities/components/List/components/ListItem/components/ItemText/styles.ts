import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    base: {
        color: ThemeVariables.TextColorGray,
        fontWeight: 'normal',
    },
    read: {
        color: ThemeVariables.TextColor1,
    },
    bolded: {
        fontWeight: 'bold',
    },
});
