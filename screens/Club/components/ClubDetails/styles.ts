import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        backgroundColor: ThemeVariables.BackgroundColor2,
    },
    paddingTopBox: {
        marginTop: 20,
    },
    joinButtonContainer: { height: 40, width: '70%' },
    contactPanelBox: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    descriptionBox: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    nameText: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    descriptionText: {
        lineHeight: 25,
        letterSpacing: 0.2,
    },
    postsDivider: {
        width: '100%',
        borderWidth: 1,
        borderColor: ThemeVariables.HighlightColor1,
    },
    buttonContainer: {
        width: '50%',
        height: 30,
    },
    headerImageBox: { marginTop: 40, height: 200 },
    headerTextBox: { paddingLeft: 20, paddingRight: 20 },
    textMore: { lineHeight: 26 },
});
