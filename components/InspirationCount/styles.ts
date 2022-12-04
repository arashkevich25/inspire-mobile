import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        zIndex: 1,
    },
    avatarsContainer: {
        flexDirection: 'row',
        position: 'relative',
    },
    0: {
        top: 2,
    },
    1: {
        position: 'absolute',
        left: 10,
        top: 10,
    },
    2: {
        position: 'absolute',
        left: 25,
        top: -2,
    },
    textsContainer: {
        marginRight: 10,
        // width: 150,
    },
    textsBox: {
        top: 5,
    },
    textBox: {
        textAlign: 'right',
    },
});
