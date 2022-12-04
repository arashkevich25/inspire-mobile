import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        backgroundColor: ThemeVariables.HighlightColor1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexDirection: 'row',
    },
    loaderBox: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        width: '100%',
        height: '100%',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: ThemeVariables.WhiteAndBlue,
    },
    disabled: {
        backgroundColor: ThemeVariables.Color2,
    },
});
