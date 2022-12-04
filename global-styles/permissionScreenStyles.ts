import EStyleSheet from 'react-native-extended-stylesheet';

export const PermissionScreenStyles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    iconBox: {
        height: 60,
    },
    descriptionBox: {
        marginBottom: 50,
    },
    approveButtonBox: {
        marginTop: 80,
    },
    cancelButtonBox: {
        marginTop: 20,
    },
    descriptionText: {
        textAlign: 'center',
        lineHeight: 27,
        letterSpacing: 0.4,
    },
});
