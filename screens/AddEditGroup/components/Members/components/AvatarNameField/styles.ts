import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: ThemeVariables.BlackAndWhite,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 0,
        paddingRight: 10,
    },
    fieldContainer: {
        marginLeft: 5,
        color: ThemeVariables.TextColor1,
        fontWeight: 'bold',
    },
    avatarBox: {
        alignItems: 'center',
    },
});
