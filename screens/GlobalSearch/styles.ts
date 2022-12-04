import { ThemeVariables } from '../../types/ThemeVariables';

import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    list: {
        backgroundColor: ThemeVariables.BlackAndWhite,
    },
});
