import { isIphone } from 'app-constants';

import { AnimationOptions } from 'react-native-navigation';

const waitForRender = true;

export const animations: AnimationOptions = {
    setStackRoot: {
        enabled: isIphone,
        waitForRender,
    },
    setRoot: {
        enabled: isIphone,
        waitForRender,
    },
    showModal: {
        enabled: isIphone,
        waitForRender,
    },
    dismissModal: {
        enabled: isIphone,
        waitForRender,
    },
    push: {
        enabled: isIphone,
        waitForRender,
    },
    pop: {
        enabled: isIphone,
        waitForRender,
    },
};
