import { TILE_WIDTH_HEIGHT } from 'app-constants';

import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        width: TILE_WIDTH_HEIGHT,
        height: TILE_WIDTH_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ThemeVariables.WhiteAndBlue,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: ThemeVariables.WhiteAndBlack,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        paddingLeft: 5,
        paddingRight: 5,
    },
    image: { width: TILE_WIDTH_HEIGHT * 0.3, height: TILE_WIDTH_HEIGHT * 0.3, marginBottom: 5 },
    text: { textAlign: 'center' },
});
