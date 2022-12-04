import { ViolationReason } from '@inspire/types';
import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Menu, menuControl, MenuGroup, MenuItem } from 'components/BottomMenu';
import { ViolationMenuItem } from 'components/ViolationMenuItem';
import { useBlockedUsers, useReportUserViolation } from 'hooks';
import { StylesValue } from 'tools';
import I18n from 'tools/translate';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface UserMenuProps {
    userId: number;
}

export function UserMenu({ userId }: UserMenuProps) {
    const { blockUserHandle, unblockUserHandle, userIsBlocked } = useBlockedUsers(userId);
    const { reasons, report } = useReportUserViolation(userId);

    async function blockUser() {
        blockUserHandle();
        await menuControl.closeMenu();
    }

    const violationChildren = (
        <MenuGroup title={I18n.t('showPostModal.menu.reportViolation')}>
            {reasons.map((reason: ViolationReason) => (
                <ViolationMenuItem key={reason.id} onPress={report} reasonId={reason.id} title={I18n.t(reason.tkey)} />
            ))}
        </MenuGroup>
    );

    async function unblockUser() {
        unblockUserHandle();
        await menuControl.closeMenu();
    }

    const menuBlockedUserChildren = (
        <Menu>
            {violationChildren}
            <MenuItem title={I18n.t('profile.menu.blockUser')} action={blockUser} />
        </Menu>
    );

    const menuUserChildren = (
        <Menu>
            {violationChildren}
            <MenuItem title={I18n.t('profile.menu.unblockUser')} action={unblockUser} />
        </Menu>
    );

    async function openBottomMenu() {
        await menuControl.openMenu({
            children: userIsBlocked() ? menuBlockedUserChildren : menuUserChildren,
        });
    }

    return (
        <TouchableOpacity onPress={openBottomMenu} style={Styles.contentContainer}>
            <Icon name="ellipsis-h" size={20} color={StylesValue(ThemeVariables.Color1)} />
        </TouchableOpacity>
    );
}
