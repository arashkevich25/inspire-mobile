import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        borderRadius: 8,
        backgroundColor: ThemeVariables.White,
        width: 253,
    },
    mainPadding: {
        padding: 10,
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titlePadding: { paddingTop: 15 },
    logoGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 50,
        zIndex: 1,
        borderRadius: 8,
    },
    titleGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
    },
    descriptionBox: {
        paddingTop: 0,
    },
    photo: {
        width: 253,
        height: 253,
        borderRadius: 8,
    },
    statisticsContainer: {
        borderTopWidth: 0.5,
        borderTopColor: ThemeVariables.LightSilver,
    },
    logoImage: {
        width: 54,
        height: 16,
    },
    authorDetails: {
        marginLeft: 10,
        width: 100,
    },
    itemBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statisticsBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statisticIconWithMargin: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    statisticIcon: {
        width: 20,
        height: 20,
    },
});
