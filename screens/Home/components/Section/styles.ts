import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    lastSectionMargin: {
        height: 40,
    },
    contentContainer: {
        marginLeft: 10,
    },
    topSectionContainer: {
        marginTop: 15,
    },
    sectionContainer: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '60%',
    },
    titleActionsBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
    },
    title: {
        marginBottom: 15,
    },
    postItemContainer: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 8,
    },
    postItemImage: {
        height: 100,
        borderRadius: 8,
        position: 'relative',
        borderColor: 'gray',
        borderWidth: 0.3,
        marginBottom: 8,
        backgroundColor: ThemeVariables.BackgroundColor2,
    },
    groupListItem: {
        backgroundColor: ThemeVariables.BackgroundColor2,
    },
    userListItemContainer: {
        width: 110,
        backgroundColor: ThemeVariables.BackgroundColor2,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 8,
        marginBottom: 5,
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
    },
    helpText: {
        color: 'gray',
        textAlign: 'center',
        fontStyle: 'italic',
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
    },
    separateLine: {
        borderWidth: 0.3,
        borderColor: ThemeVariables.BorderColor1,
        width: '98%',
        height: 1,
    },
    groupTitle: {
        fontStyle: 'italic',
        width: 100,
        textAlign: 'center',
        marginTop: 5,
    },
    contentBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    textBox: {
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        marginBottom: 10,
        textAlign: 'justify',
        marginRight: 10,
        lineHeight: 18,
    },
    buttonContainer: { alignItems: 'center' },
    userDetailsContainer: { flex: 1, alignItems: 'center' },
    userDetailsBlock: {
        marginTop: 10,
        marginBottom: 5,
    },
    userFollowButtonBox: {
        height: 25,
        width: '100%',
    },
    userStatisticsContainer: {
        flexDirection: 'row',
    },
    userStatisticBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        flex: 1,
    },
    userStatisticIcon: {
        width: 20,
        height: 20,
        marginRight: 0,
    },
    userDetailsText: {
        textAlign: 'center',
    },
    followFeedback: { alignItems: 'center', marginTop: 5 },
});
