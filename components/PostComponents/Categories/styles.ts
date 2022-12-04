import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
    },
    categoryBox: {
        flexDirection: 'row',
        width: '80%',
        overflow: 'hidden',
    },
    categoryCounter: {
        width: '20%',
        paddingRight: 10,
    },
    textAlign: { textAlign: 'right' },
    text: { marginLeft: 5, width: 50 },
});
