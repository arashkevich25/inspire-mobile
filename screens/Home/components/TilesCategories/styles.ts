import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: {
        overflow: 'hidden',
    },
    categoriesBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingLeft: 20,
        paddingRight: 20,
    },
    titleBox: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
