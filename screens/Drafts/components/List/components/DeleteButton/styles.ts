import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flexDirection: 'row-reverse',
        marginTop: 2,
        height: '100%',
    },
    deleteButton: {
        height: '100%',
        width: 75,
        backgroundColor: ThemeVariables.Red,
    },
    buttonBox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '99%',
    },
});
