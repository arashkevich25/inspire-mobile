import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: ThemeVariables.BackgroundColor4,
        opacity: 0.4,
    },
    contentBox: {
        backgroundColor: ThemeVariables.BackgroundColor1,
        width: '95%',
        padding: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: ThemeVariables.Color2,
    },
    titleText: {
        fontWeight: 'bold',
        marginBottom: 30,
    },
    descriptionText: {
        marginBottom: 20,
        textAlign: 'center',
    },
    primaryButtonContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    secondButtonContainer: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
        tintColor: ThemeVariables.TextColor1,
    },
});
