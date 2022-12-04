import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    postDetailField: {
        textAlignVertical: 'top',
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: ThemeVariables.BorderColor1,
        backgroundColor: ThemeVariables.BlackAndWhite,
        color: ThemeVariables.TextColor1,
    },
    errorState: {
        borderColor: ThemeVariables.Red,
    },
});
