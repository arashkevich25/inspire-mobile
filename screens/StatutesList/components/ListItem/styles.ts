import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: {
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentBox: { flexDirection: 'row', width: '80%', alignItems: 'flex-start' },
    imageBox: { width: 25, paddingBottom: 20 },
    textBox: { flexDirection: 'column' },
});
