import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    input: {
        height: 40,
        margin: 10,
        backgroundColor: ThemeVariables.BackgroundColor4,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: ThemeVariables.BorderColor1,
        paddingTop: 5,
        paddingRight: 40,
        paddingLeft: 40,
        paddingBottom: 5,
        color: ThemeVariables.TextColor1,
    },
    inputContainer: {
        position: 'relative',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: ThemeVariables.BackgroundColor2,
    },
    clearButton: {
        position: 'absolute',
        justifyContent: 'center',
        top: 10,
        bottom: 10,
        right: 10,
        width: 30,
    },
    searchIcon: {
        position: 'absolute',
        top: 20,
        bottom: 0,
        left: 20,
    },
    cancelButton: {
        marginRight: 10,
    },
});
