import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types/ThemeVariables';

export const Styles = EStyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        minHeight: 50,
        width: '50%',
    },
    sharedDetailsContainer: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    avatarBox: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: ThemeVariables.White,
        borderWidth: 1,
        borderColor: ThemeVariables.Color1,
    },
    image: { height: 40, width: 40, borderRadius: 40 },
    avatarText: { lineHeight: 35, textAlign: 'center', fontSize: 14 },
});
