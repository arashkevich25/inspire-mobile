import { ThemeVariables } from '../../../../types/ThemeVariables';

import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: {
        marginBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    logoBox: {
        height: 100,
        marginRight: 10,
    },
    divideLine: {
        borderBottomWidth: 0.5,
        borderBottomColor: ThemeVariables.BorderColor2,
        width: '100%',
    },
    descriptionBox: {
        marginTop: 0,
    },
    buttonBox: {
        alignItems: 'center',
        marginBottom: 10,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    descriptionText: {
        lineHeight: 20,
    },
});
