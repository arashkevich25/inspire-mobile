import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent, OptionsModalPresentationStyle } from 'react-native-navigation';

export const UserIntroSetup: LayoutComponent = {
    id: ComponentId.AppUserIntroSetup,
    name: ComponentName.AppUserIntroSetup,
    options: {
        modalPresentationStyle: OptionsModalPresentationStyle.fullScreen,
        overlay: {
            interceptTouchOutside: true,
        },
    },
};
