import EStyleSheet from 'react-native-extended-stylesheet';

import { winHeight } from 'tools';
import { winWidth } from 'tools/';
import { ThemeVariables } from 'types';

export const styles = EStyleSheet.create({
    tabContainer: {
        backgroundColor: ThemeVariables.BlackAndWhite,
        minHeight: winHeight - 90,
    },
    clubMemberContentContainer: {
        padding: 20,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    clubMemberActionBar: {
        marginBottom: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonBox: {
        marginRight: 5,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        borderColor: ThemeVariables.Color2,
        borderRadius: 8,
        borderWidth: 1,
    },
    activeButtonBox: {
        borderColor: ThemeVariables.HighlightColor1,
        backgroundColor: ThemeVariables.LightBlueAndBlack,
    },
    basicProfileActivePanel: {
        height: 30,
        minWidth: '50%',
    },
    tabTextStyle: {
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 8,
        color: ThemeVariables.TextColor1,
        fontWeight: 'bold',
    },
    tabTextContainerActiveStyle: {
        borderBottomWidth: 3,
        borderBottomColor: ThemeVariables.HighlightColor1,
        width: winWidth / 2,
    },
    clubMemberMarginBottom: { marginBottom: 20 },
    clubMemberActionPanelBox: { flexDirection: 'column', width: '100%' },
    fullWidth: { width: '100%' },
    clubMemberTabTextStyle: {
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 8,
        color: ThemeVariables.TextColor1,
        fontWeight: 'bold',
    },
    clubMemberTabTextContainerActiveStyle: {
        borderBottomWidth: 3,
        borderBottomColor: ThemeVariables.HighlightColor1,
        width: winWidth / 2,
    },
    clubMemberTitle: { textAlign: 'center', fontSize: 22 },
    clubMemberDesc: { textAlign: 'justify' },
});
