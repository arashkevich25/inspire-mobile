import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        color: ThemeVariables.TextColorWhite,
        marginTop: 1,
        marginBottom: 1,
        alignItems: 'center',
    },
    'x-small': {
        fontSize: ThemeVariables.SizeXSmall,
    },
    'double-large': {
        fontSize: ThemeVariables.SizeDoubleLarge,
    },
    small: {
        fontSize: ThemeVariables.SizeSmall,
    },
    medium: {
        fontSize: ThemeVariables.SizeMedium,
    },
    large: {
        fontSize: ThemeVariables.SizeLarge,
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
    green: {
        color: ThemeVariables.TextColorGreen,
    },
    red: {
        color: ThemeVariables.TextColorRed,
    },
    gold: {
        color: ThemeVariables.TextColorGold,
    },
    color1: {
        color: ThemeVariables.TextColor1,
    },
    color2: {
        color: ThemeVariables.TextColor2,
    },
    whiteAndBlue: {
        color: ThemeVariables.WhiteAndBlue,
    },
    blueAndWhite: {
        color: ThemeVariables.BlueAndWhite,
    },
    bold: {
        fontWeight: 'bold',
    },
    italic: {
        fontStyle: 'italic',
    },
});
