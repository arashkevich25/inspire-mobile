import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        marginBottom: 20,
    },
    fieldContainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    nameField: {
        fontSize: 20,
        color: ThemeVariables.TextColor1,
        fontWeight: 'bold',
    },
    nameFieldError: {
        color: 'red',
    },
    urlField: {
        marginTop: 10,
        fontSize: 16,
        color: ThemeVariables.TextColor1,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: ThemeVariables.BackgroundColor4,
    },
    descriptionField: {
        textAlignVertical: 'top',
        marginTop: 20,
        paddingTop: 10,
        height: 100,
        fontSize: 16,
        color: ThemeVariables.TextColor1,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: ThemeVariables.BackgroundColor4,
    },
});
