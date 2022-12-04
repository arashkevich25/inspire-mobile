import { GroupsWithUsers } from '@inspire/types';
import { isIphone } from 'app-constants';
import { ComponentId, ComponentName } from 'navigation/constants';

import { LayoutComponent } from 'react-native-navigation';
import { Options } from 'react-native-navigation/lib/src/interfaces/Options';

const base = (backTitle: string): { options: Options } => ({
    options: {
        topBar: {
            drawBehind: false,
            visible: true,
            elevation: 0,
            noBorder: true,
            title: {
                component: {
                    name: ComponentName.ComponentTitleLogo,
                },
            },
            backButton: {
                title: backTitle,
                visible: isIphone,
            },
        },
        bottomTabs: {
            visible: false,
            animate: false,
        },
    },
});

export const AddGroup = (backTitle: string): LayoutComponent => ({
    id: ComponentId.ScreenAddEditGroup,
    name: ComponentName.ScreenAddEditGroup,
    ...base(backTitle),
});

export const EditGroup = (group: GroupsWithUsers, backTitle: string): LayoutComponent => ({
    id: ComponentId.ScreenAddEditGroup,
    name: ComponentName.ScreenAddEditGroup,
    passProps: {
        group,
    },
    ...base(backTitle),
});

export const EditGroupById = (groupId: number, backTitle: string): LayoutComponent => ({
    id: ComponentId.ScreenAddEditGroupById,
    name: ComponentName.ScreenAddEditGroupById,
    passProps: {
        groupId,
    },
    ...base(backTitle),
});
