import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        alignItems: 'center',
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    infoBox: {
        flexDirection: 'row',
    },
    avatarBox: {
        marginTop: 40,
        marginBottom: 20,
    },
    mediaBox: {
        height: 200,
    },
    divider: {
        borderBottomWidth: 0.5,
        borderBottomColor: ThemeVariables.BorderColor2,
        width: '80%',
        marginTop: 20,
    },
    descriptionBox: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    descriptionText: {
        fontStyle: 'italic',
        lineHeight: 22,
        marginTop: 10,
    },
    buttonBox: {
        marginTop: 10,
    },
});
