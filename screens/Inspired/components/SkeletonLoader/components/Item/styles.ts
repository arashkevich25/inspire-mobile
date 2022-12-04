import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        backgroundColor: ThemeVariables.BackgroundColor2,
        borderBottomWidth: 5,
        borderBottomColor: ThemeVariables.BackgroundColor1,
    },
    contentBox: {
        margin: 5,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    box1: {
        width: 50,
        height: 50,
    },
    box2: {
        marginLeft: 10,
        width: '100%',
    },
    box3: {
        width: '80%',
        height: 20,
    },
    box4: {
        width: '60%',
        height: 10,
        marginTop: 5,
    },
});
