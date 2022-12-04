import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: {
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        height: '95%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    buttonBox: { alignItems: 'center', paddingTop: 10 },
    text: { fontStyle: 'italic' },
});
