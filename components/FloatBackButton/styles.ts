import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const styles = EStyleSheet.create({
    contentContainer: {
        height: 37,
        width: 37,
        paddingRight: 8,
        paddingLeft: 10,
        borderRadius: 37,
        position: 'absolute',
        zIndex: 2,
        top: 10,
        left: 10,
    },
    hasBackground: {
        backgroundColor: ThemeVariables.BackgroundColor1,
    },
});
