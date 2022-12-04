import { TILE_WIDTH_HEIGHT } from 'app-constants';

import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 20,
    },
    tileBox: {
        width: TILE_WIDTH_HEIGHT - 4,
        height: TILE_WIDTH_HEIGHT - 4,
        margin: 4,
        backgroundColor: ThemeVariables.LightGrayAndWhite,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    tileBoxActive: {
        backgroundColor: ThemeVariables.HighlightColor2,
    },
    icon: {
        width: 22,
        height: 22,
    },
    text: {
        textAlign: 'center',
        marginTop: 5,
    },
});
