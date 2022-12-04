import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const FormStyles = EStyleSheet.create({
    contentContainer: {
        backgroundColor: ThemeVariables.BlackAndWhite,
        paddingBottom: 40,
        position: 'relative',
    },
    buttonBox: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 80,
        marginTop: 10,
        marginBottom: 10,
    },
    addQuestionContentContainer: {
        backgroundColor: ThemeVariables.BackgroundColor2,
        height: '100%',
    },
    detailContainer: {
        padding: 20,
        paddingBottom: 0,
    },
    accordionContainer: {
        backgroundColor: ThemeVariables.BlackAndWhite,
        paddingTop: 10,
        paddingBottom: 10,
    },
    accordionBodyContainer: {
        marginTop: 20,
    },
    accordionLabelContainer: {
        paddingRight: 20,
        paddingLeft: 20,
    },
    publicButton: {
        width: 200,
        height: 40,
        marginBottom: 20,
    },
    saveDraftButton: { width: 150, height: 30, marginBottom: 20 },
});
