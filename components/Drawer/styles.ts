import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    drawerContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: ThemeVariables.BackgroundColor2,
        padding: 10,
        borderTopWidth: 0.5,
        borderTopColor: ThemeVariables.BorderColor1,
    },
    childrenContainer: {
        flex: 1,
        borderRightWidth: 0.5,
        borderRightColor: ThemeVariables.BorderColor1,
        backgroundColor: ThemeVariables.BackgroundColor1,
    },
});
