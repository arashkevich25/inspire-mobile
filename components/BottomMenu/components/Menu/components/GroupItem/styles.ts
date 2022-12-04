import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        borderTopWidth: 1,
        borderTopColor: ThemeVariables.BorderColor1,
        paddingTop: 20,
        paddingLeft: 15,
        paddingBottom: 20,
        paddingRight: 15,
    },
    contentBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    labelBox: {
        flexDirection: 'row',
    },
    labelIcon: {
        width: 20,
        marginRight: 10,
    },
});
