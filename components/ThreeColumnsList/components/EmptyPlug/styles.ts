import { TileConfig } from '../ListItem/constants/tileConfig';

import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        width: '101%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    placeholderBox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        paddingTop: 0,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 0,
        backgroundColor: ThemeVariables.BackgroundColor2,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: ThemeVariables.BackgroundColor1,
        color: ThemeVariables.White,
    },
    placeholderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 80,
        left: 0,
        right: 0,
    },
    image: {
        height: TileConfig.Height,
        width: winWidth / 3,
    },
});
