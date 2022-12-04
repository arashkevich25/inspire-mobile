import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: {
        position: 'relative',
        width: '100%',
        marginBottom: 10,
    },
    touchableArea: {
        position: 'absolute',
        left: 10,
        top: 0,
        bottom: 0,
        zIndex: 1,
        width: 50,
        height: '100%',
    },
    label: {
        textAlign: 'center',
    },
    hintText: {
        textAlign: 'center',
        marginTop: 10,
        paddingRight: 30,
        paddingLeft: 30,
    },
});
