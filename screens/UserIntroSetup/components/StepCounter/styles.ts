import { ThemeVariables } from '../../../../types/ThemeVariables';

import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: { flexDirection: 'row' },
    stepPill: {
        width: 24,
        height: 8,
        borderRadius: 4,
        backgroundColor: ThemeVariables.BorderColor1,
        marginRight: 10,
    },
    activePill: {
        backgroundColor: ThemeVariables.HighlightColor2,
    },
    finishedPill: {
        backgroundColor: ThemeVariables.HighlightColor1,
    },
});
