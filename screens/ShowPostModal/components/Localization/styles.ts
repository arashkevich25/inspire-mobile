import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    touchable: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 4,
        backgroundColor: ThemeVariables.FlashLightAndBlack,
    },
    imageBox: { width: 20, marginRight: 5 },
});
