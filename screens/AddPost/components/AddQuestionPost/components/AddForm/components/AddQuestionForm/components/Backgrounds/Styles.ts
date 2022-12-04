import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    scrollView: {
        marginTop: 10,
    },
    backgroundImage: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        position: 'relative',
    },
    backgroundImageSelected: {
        borderWidth: 2,
        borderColor: ThemeVariables.HighlightColor1,
    },
    overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: ThemeVariables.BackgroundColor1,
        opacity: 0.4,
    },
    contentContainer: {
        marginRight: 10,
        borderWidth: 2,
        borderColor: ThemeVariables.BorderColor1,
    },
    text: { textAlign: 'center', paddingLeft: 20, paddingRight: 20 },
});
