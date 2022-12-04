import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';
import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        width: winWidth - 80,
    },
    messageBody: {
        padding: 5,
        backgroundColor: ThemeVariables.BackgroundColor2,
    },
    messageContainer: {
        marginLeft: 10,
    },
    userNameBox: {
        marginBottom: 1,
    },
    hoursBox: {
        marginTop: 1,
        textAlign: 'right',
    },
});
