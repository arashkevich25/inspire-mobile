import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    smallContainer: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },
    mediumContainer: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    lMediumContainer: {
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    largeContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
    },
    doubleLargeContainer: {
        width: 180,
        height: 180,
        borderRadius: 180,
    },
    fallbackBackground: {
        backgroundColor: ThemeVariables.White,
        borderWidth: 1,
        borderColor: ThemeVariables.BorderColor1,
    },
    avatarBackground: {
        backgroundColor: ThemeVariables.BackgroundColor1,
    },
    textAlign: {
        textAlign: 'center',
    },
});
