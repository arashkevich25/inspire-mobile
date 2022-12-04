import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    formContainer: {},
    titleInput: {
        fontSize: 16,
        padding: 15,
        color: ThemeVariables.TextColor1,
        borderBottomColor: ThemeVariables.Color1,
        backgroundColor: ThemeVariables.LightGrayAndWhite,
        borderRadius: 8,
    },
    descriptionInput: {
        fontSize: 16,
        textAlignVertical: 'top',
        color: ThemeVariables.TextColor1,
        marginBottom: 10,
        height: 130,
        backgroundColor: ThemeVariables.LightGrayAndWhite,
        borderRadius: 8,
        padding: 10,
        paddingTop: 10,
    },
    itemBox: {
        marginBottom: 10,
    },
    labelBox: {
        marginLeft: 10,
        marginBottom: 3,
    },
    illustrationBox: {
        width: 203,
        height: 300,
        position: 'absolute',
        right: -30,
        top: -30,
    },
});
