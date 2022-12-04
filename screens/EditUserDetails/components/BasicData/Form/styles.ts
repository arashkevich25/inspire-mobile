import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';
import { ThemeVariables } from 'types';

export const styles = EStyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    contactDataBox: {
        alignItems: 'center',
    },
    descriptionField: {
        height: 100,
    },
    fieldContainer: {
        width: winWidth,
        height: 70,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 5,
        marginBottom: 5,
    },
    fieldContainerWithError: {
        height: 90,
        marginBottom: -10,
    },
    fieldContainerWithAvatar: {
        width: winWidth,
        paddingLeft: 20,
        backgroundColor: ThemeVariables.BackgroundColor4,
        borderWidth: 1,
        borderColor: ThemeVariables.BackgroundColor1,
    },
    avatarContainer: {
        marginRight: 20,
    },
    nameFieldContainer: {
        width: winWidth - 200,
        marginTop: 20,
    },
    buttonContainer: {
        marginTop: 5,
    },
});
