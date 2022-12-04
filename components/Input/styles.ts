import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    input: {
        color: ThemeVariables.TextColor1,
        borderBottomWidth: 0.5,
        borderColor: 'transparent',
        borderStyle: 'solid',
        paddingTop: 0,
        paddingLeft: 2,
        paddingBottom: 5,
        paddingRight: 0,
    },
    hasHighlight: {
        borderBottomColor: ThemeVariables.TextColor1,
    },
    large: {
        width: 300,
        height: 30,
        fontSize: ThemeVariables.SizeLarge,
    },
    small: {
        width: 100,
        height: 30,
        fontSize: ThemeVariables.SizeSmall,
    },
    medium: {
        width: 200,
        height: 30,
        fontSize: ThemeVariables.SizeMedium,
    },
    wide: {
        width: '100%',
        height: 30,
        fontSize: ThemeVariables.SizeLarge,
    },
});
