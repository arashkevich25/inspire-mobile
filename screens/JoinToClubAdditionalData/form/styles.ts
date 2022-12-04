import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types/ThemeVariables';

export const Styles = EStyleSheet.create({
    contentContainer: { flex: 1, flexDirection: 'column', justifyContent: 'space-between' },
    inputBox: { height: 70, marginBottom: 10 },
    sexSwitchBox: { marginBottom: 15 },
    divider: { borderBottomWidth: 0.5, borderBottomColor: ThemeVariables.Color1 },
    text: { height: 22 },
    androidFontSize: {
        fontSize: 22,
        color: ThemeVariables.TextColor1,
    },
});
