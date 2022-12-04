import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    resetPasswordTitle: {
        marginBottom: 5,
    },
    resetPasswordDoneTitle: {},
    resetPasswordDoneDescription: {
        marginBottom: 20,
        marginTop: 20,
    },
    restPasswordDescription: {},
    restPasswordDescriptionText: {
        textAlign: 'center',
        lineHeight: 24,
        letterSpacing: 0.3,
    },
    restPasswordDescriptionTextLineSmallHeight: {
        lineHeight: 16,
    },
    resetPasswordDescriptionPressedArea: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    backButtonBox: {
        marginTop: 20,
        height: 50,
        backgroundColor: ThemeVariables.BlackAndWhite,
    },
    roundImageBox: {
        position: 'absolute',
        top: -170,
        width: 148,
        height: 148,
        borderRadius: 148,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: ThemeVariables.BlackAndWhite,
    },
    resetPasswordImage: {
        width: 110,
        height: 110,
        position: 'absolute',
        top: 30,
        left: 40,
    },
    resetPasswordDoneImage: {
        width: 80,
        height: 80,
    },
    changePasswordImage: {
        width: 148,
        height: 148,
    },
    zeroTopMargin: {
        marginTop: 0,
    },
    switchBox: {
        height: 40,
    },
    contentContainer: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        backgroundColor: ThemeVariables.Gold,
    },
    loginContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: ThemeVariables.LightGrayAndWhite,
    },
    illustrationBox: {
        position: 'absolute',
        top: -125,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 220,
    },
    illustrationSignUpBox: {
        top: -220,
        zIndex: 2,
    },
    illustrationLoginWoman: {
        marginBottom: 13,
    },
    conversationIllustration: {
        position: 'absolute',
        height: 90,
        top: -60,
        left: 0,
        right: 0,
        borderColor: 'black',
        alignItems: 'center',
    },
    conversationSignUpIllustration: {
        top: -10,
    },
    conversationLogoIllustration: {
        position: 'absolute',
        top: 10,
        width: 30,
        height: 52,
    },
    formContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: 32,
    },
    inputBoxWithError: {
        width: '100%',
        height: 90,
        marginTop: 10,
    },
    inputBox: {
        width: '100%',
        height: 70,
        marginTop: 10,
    },
    buttonBox: {
        width: '100%',
        height: 50,
        marginTop: 30,
    },
    signUpLoginScreenBox: {
        marginTop: 10,
    },
    alternativeLogin: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dividerLine: {
        borderWidth: 0.5,
        height: 0.5,
        width: '20%',
        borderColor: ThemeVariables.BorderColor2,
    },
    alternativeLoginText: {
        marginRight: 10,
        marginLeft: 10,
    },
    alternativeLoginButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        // To invistigate negative margin
        marginBottom: -15,
    },
    dontRememberPasswordBox: {
        width: '100%',
        alignItems: 'flex-end',
    },
    resetPasswordBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resetPasswordSuccessIcon: {
        marginRight: 10,
    },
});
