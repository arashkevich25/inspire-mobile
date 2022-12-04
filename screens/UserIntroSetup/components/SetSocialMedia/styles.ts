import { isIphone } from 'app-constants';

import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    fieldBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: ThemeVariables.LightGrayAndWhite,
        padding: 12,
        borderWidth: 1,
        borderColor: ThemeVariables.BlackAndWhite,
        borderRadius: 8,
        marginBottom: 20,
    },
    fieldBoxError: {
        borderColor: ThemeVariables.Red,
    },
    iconBox: { width: 32, height: 32, marginRight: 10 },
    aroundIconBox: {
        width: 32,
        height: 32,
        marginRight: 10,
        borderRadius: 32,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: ThemeVariables.BorderColor1,
    },
    input: {
        fontSize: 16,
        width: '85%',
        height: isIphone ? 30 : 40,
        color: ThemeVariables.Color1,
    },
});
