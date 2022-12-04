import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: {
        width: 100,
        height: 100,
        marginRight: 5,
        position: 'relative',
    },
    removeIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 9,
    },
    image: {
        width: 100,
        height: 100,
    },
});
