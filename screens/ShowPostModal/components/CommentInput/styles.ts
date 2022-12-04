import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 4,
        backgroundColor: ThemeVariables.BlackAndWhite,
        borderTopWidth: 1,
        borderTopColor: ThemeVariables.BorderColor1,
    },
    inputBox: {
        fontSize: 14,
        textAlignVertical: 'top',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        color: ThemeVariables.TextColor1,
    },
    touchable: {
        width: 25,
        alignText: 'center',
    },
    inputContainer: {
        backgroundColor: ThemeVariables.FlashLightAndBlack,
        minHeight: 48,
        borderRadius: 40,
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
