import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const styles = EStyleSheet.create({
    avatarBox: {
        marginRight: 20,
    },
    buttonBox: {
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginRight: 20,
        marginLeft: 20,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: ThemeVariables.BlackAndWhite,
    },
    statisticsBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    userDetails: {
        flex: 1,
        width: '100%',
    },
    userDetailsContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    socialIconBox: {
        marginLeft: 10,
    },
    touchableBox: { alignItems: 'center' },
});
