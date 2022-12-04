import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        borderTopWidth: 1,
        borderTopColor: ThemeVariables.BorderColor1,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 15,
        paddingLeft: 15,
    },
    contentBox: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemContent: {
        flexDirection: 'row',
    },
    itemIcon: {
        width: 20,
        marginRight: 10,
    },
});
