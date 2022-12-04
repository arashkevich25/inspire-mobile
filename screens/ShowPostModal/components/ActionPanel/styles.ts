import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    buttonContentContainer: {
        marginRight: 10,
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 0.7,
        borderColor: ThemeVariables.Color2,
        backgroundColor: ThemeVariables.BackgroundColor4,
    },
    inspiredIsActive: {
        borderColor: ThemeVariables.HighlightColor1,
        backgroundColor: ThemeVariables.HighlightColor2,
    },
    recommendIsActive: {
        borderColor: ThemeVariables.Gold,
        backgroundColor: ThemeVariables.LightGold,
    },
    buttonContentContentPaddingRight: {},
    buttonContentContentBorderWidth: {},
    inspireButtonImageBox: { right: 10 },
    inspireButtonText: { top: 1, right: 5 },
    recommendButtonText: { top: 1 },
    recommendButtonBox: {},
    sendButtonImageBox: {},
    sendButtonText: { top: 1 },
});
