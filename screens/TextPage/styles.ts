import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        padding: 10,
        flex: 1,
    },
    titleContainer: {
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    regularText: {
        lineHeight: 25,
        letterSpacing: 0.2,
    },
    webViewContainer: {
        flex: 1,
        backgroundColor: ThemeVariables.BackgroundColor1,
    },
    webView: {
        backgroundColor: ThemeVariables.BackgroundColor1,
    },
});
