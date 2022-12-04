import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';

export const WorldWall: LayoutComponent = {
    id: ComponentId.AppWorldWall,
    name: ComponentName.AppWorldWall,
    passProps: {
        showLoginStep: false,
    },
    options: {
        topBar: {
            visible: false,
            animate: false,
        },
        bottomTab: {
            icon: require(`../assets/nonactive/home.png`),
            testID: "bottomTab['worldWall']",
        },
    },
};

export const WorldWallNoAuth: LayoutComponent = {
    id: ComponentId.AppNotSignUpUserWorldWall,
    name: ComponentName.AppNotSignUpUserWorldWall,
    passProps: {
        showLoginStep: true,
    },
    options: {
        topBar: {
            visible: false,
        },
        bottomTabs: {
            visible: false,
        },
    },
};
