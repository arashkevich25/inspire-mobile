import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {},
    mediumPostItemContainer: {
        width: 160,
        height: 215,
        marginLeft: 10,
        borderRadius: 8,
        backgroundColor: ThemeVariables.BackgroundColor2,
        position: 'relative',
        marginBottom: 10,
    },
    mediumPostItemImage: {
        width: 160,
        height: 160,
    },
    mediumPostItemTitle: {
        width: '100%',
        height: 40,
        position: 'absolute',
        bottom: 0,
        paddingTop: 10,
        paddingBottom: 0,
        paddingRight: 8,
        paddingLeft: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    mediumPostItemTitleText: {
        fontWeight: '500',
        fontSize: 16,
    },
    mediumPostItemAuthorDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        marginLeft: 8,
        marginRight: 8,
    },
    mediumPostItemAuthorDetailsTextBox: {
        marginLeft: 10,
        paddingRight: 30,
    },
});
