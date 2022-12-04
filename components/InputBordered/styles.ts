import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    inputBox: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: ThemeVariables.BorderColor1,
        fontWeight: 'bold',
        color: ThemeVariables.Color1,
        flex: 1,
    },
    alignTop: {
        textAlignVertical: 'top',
    },
    contentContainer: {
        width: '100%',
        height: '100%',
    },
    background: {
        backgroundColor: ThemeVariables.LightGrayAndWhite,
    },
    topTitleText: {
        marginLeft: 10,
        marginBottom: 2,
    },
    errorText: {
        marginLeft: 10,
        opacity: 0,
        color: ThemeVariables.Red,
        height: 20,
    },
    errorTextVisible: {
        opacity: 1,
    },
    error: {
        borderColor: ThemeVariables.Red,
    },
});
