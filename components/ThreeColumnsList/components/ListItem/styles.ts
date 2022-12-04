import { TileConfig } from './constants/tileConfig';

import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        width: TileConfig.Width,
        height: TileConfig.Height,
        margin: 1,
    },
    postInspiredCountContainer: {
        position: 'absolute',
        left: 0,
        right: 5,
        top: 5,
        height: 30,
    },
    item: {
        width: TileConfig.Width,
        height: TileConfig.Height,
        backgroundColor: ThemeVariables.BackgroundColor4,
    },
});
