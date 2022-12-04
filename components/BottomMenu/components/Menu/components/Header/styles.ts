import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ThemeVariables.BackgroundColor4,
        minHeight: 30,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    draggableItem: {
        backgroundColor: ThemeVariables.HighlightColor1,
        width: 50,
        height: 5,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 0,
        marginRight: 0,
    },
});
