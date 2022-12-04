import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: ThemeVariables.BackgroundColor2,
    },
    box1: { margin: 10, flexDirection: 'row' },
    box2: { marginLeft: 10, flexDirection: 'row', alignItems: 'center' },
    box3: {
        margin: 10,
        marginTop: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    box6: { width: 81, height: 26, borderRadius: 8, marginLeft: 30 },
    height2: {
        height: 27,
    },
    height3: {
        height: 10,
        marginBottom: 5,
    },
    circle: {
        width: 32,
        height: 32,
        borderRadius: 32,
    },
    fullWidthFullHeight: { width: '100%', height: '100%' },
    width1: { width: 89, marginRight: 8, borderRadius: 8 },
    width2: { width: 50, borderRadius: 8, marginRight: 8 },
    width3: { width: winWidth / 2.2, borderRadius: 8 },
});
