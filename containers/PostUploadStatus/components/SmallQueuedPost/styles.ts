import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        width: winWidth,
        marginBottom: 2,
        backgroundColor: ThemeVariables.BackgroundColor4,
    },
    contentBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: ThemeVariables.BackgroundColor2,
        paddingBottom: 5,
        paddingTop: 5,
    },
    buttonBox: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: ThemeVariables.BackgroundColor2,
        marginRight: 10,
    },
    thumbnailBox: { width: 40, height: 40, marginRight: 10, marginLeft: 10 },
    thumbnail: { width: 40, height: 40 },
    flexBox: { flex: 1 },
    actionBox: { flexDirection: 'row' },
});
