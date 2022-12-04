import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    avatarButtonBox: {
        marginBottom: 120,
        marginTop: 40,
        alignItems: 'center',
    },
    illustration: {
        width: 180,
        height: 280,
        position: 'absolute',
        right: -30,
        top: -60,
    },
    avatarButton: {
        width: 130,
        height: 130,
        borderRadius: 130,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    overlay: {
        position: 'absolute',
        height: 65,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: ThemeVariables.LightBlueAndBlack,
        opacity: 0.9,
        zIndex: 2,
        alignItems: 'center',
        paddingTop: 10,
    },
    addButton: { textAlign: 'center' },
});
