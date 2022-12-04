import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        width: 13,
        height: 13,
        marginRight: 5,
        tintColor: ThemeVariables.TextColorGray,
    },
});
