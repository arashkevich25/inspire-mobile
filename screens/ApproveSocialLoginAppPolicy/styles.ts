import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    webContent: {
        backgroundColor: ThemeVariables.BackgroundColor2,
        height: 100,
    },
    loaderContainer: {
        height: '100%',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 10,
        height: 40,
        width: '80%',
        alignSelf: 'center',
    },
});
