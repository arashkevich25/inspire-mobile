import Toast from 'react-native-toast-message';

import I18n from 'tools/translate';

export function errorsHandler(error: string) {
    switch (error) {
        case 'UNAUTHENTICATED': {
            Toast.show({
                text2: I18n.t(`signIn.text.signInIsRequired`),
                type: 'error',
            });
            break;
        }
    }
}
