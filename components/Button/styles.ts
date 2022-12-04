import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        position: 'relative',
    },
    text: {
        textAlign: 'center',
    },
    smallLineHeight: {
        lineHeight: 20,
        fontSize: 14,
    },
    normalLineHeight: {
        lineHeight: 40,
        fontSize: 18,
    },
    black: {
        color: ThemeVariables.TextColorBlack,
    },
    white: {
        color: ThemeVariables.TextColorWhite,
    },
    blue: {
        color: ThemeVariables.TextColorBlue,
    },
    gray: {
        color: ThemeVariables.TextColorGray,
    },
    red: {
        color: ThemeVariables.TextColorRed,
    },
    color1: {
        color: ThemeVariables.TextColor1,
    },
    blocked: {
        opacity: 0.5,
    },
    link: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 10,
    },
    borderedLink: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: ThemeVariables.HighlightColor1,
        borderRadius: 8,
    },
    filled: {
        backgroundColor: ThemeVariables.HighlightColor1,
        borderRadius: 8,
    },
    normal: {
        color: ThemeVariables.TextColor1,
        backgroundColor: ThemeVariables.TextColorWhite,
        borderRadius: 8,
    },
    small: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10,
        paddingRight: 10,
        height: 20,
    },
    medium: {
        width: 200,
        height: 40,
    },
    large: {
        width: 300,
        height: 40,
    },
    wide: {
        width: '100%',
        height: 40,
        fontSize: 14,
    },
    poor: {
        width: 'auto',
        height: 40,
    },
    loaderContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 5,
        width: 20,
        flex: 1,
        justifyContent: 'center',
    },
});
