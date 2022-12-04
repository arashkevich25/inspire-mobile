import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: ThemeVariables.BlackAndWhite,
    },
    formBox: {
        flex: 1,
    },
    switchBox: {
        flex: 3,
        backgroundColor: ThemeVariables.BlackAndWhite,
    },
});
