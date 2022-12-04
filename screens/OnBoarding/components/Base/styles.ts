import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: { flex: 1, alignItems: 'center', justifyContent: 'space-around', padding: 20 },
    logoBox: { width: 77, height: 24 },
    illustrationContainer: { maxWidth: 350, maxHeight: 259, position: 'relative' },
    mainIllustration: { width: 350, height: 259, zIndex: 1 },
    illustrationBackgroundBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    illustrationBackground: {
        width: 350,
        height: 120,
    },
    titleText: {
        textAlign: 'center',
        marginBottom: 20,
    },
    descriptionText: { textAlign: 'center', lineHeight: 22, letterSpacing: -0.3 },
});
