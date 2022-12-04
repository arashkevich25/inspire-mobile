import { ViolationReason } from '@inspire/types';
import React from 'react';

import { ViolationMenuItem } from 'components';
import { Menu, menuControl, MenuGroup } from 'components/BottomMenu';
import { MenuItem } from 'components/BottomMenu/components/Menu/components/MenuItem';
import { copyPostPublicUrl } from 'tools';
import I18n from 'tools/translate';

export function menuChildren(
    isRoot: boolean,
    isFollower: boolean,
    followUser: () => void,
    unFollowUser: () => void,
    reasons: ViolationReason[],
    reportHandle: (reasonId: number) => void,
    removeHandle: (is: string) => void,
    postId = '',
) {
    async function deletePost() {
        await menuControl.closeMenu();
        removeHandle(postId);
    }

    async function followUserHandle() {
        await menuControl.closeMenu();
        followUser();
    }

    async function unfollowUserHandle() {
        await menuControl.closeMenu();
        unFollowUser();
    }

    async function copyPublicUrl() {
        await menuControl.closeMenu();
        copyPostPublicUrl(postId);
    }

    if (isRoot) {
        return (
            <Menu>
                <MenuItem title={I18n.t('showPostModal.menu.copyUrl')} action={copyPublicUrl} />
                <MenuItem color="red" title={I18n.t('showPostModal.menu.delete')} action={deletePost} />
            </Menu>
        );
    }

    return (
        <Menu>
            <MenuItem title={I18n.t('showPostModal.menu.copyUrl')} action={copyPublicUrl} />
            {isFollower ? (
                <MenuItem title={I18n.t('showPostModal.menu.unfollowUser')} action={unfollowUserHandle} />
            ) : (
                <MenuItem title={I18n.t('showPostModal.menu.followUser')} action={followUserHandle} />
            )}
            <MenuGroup title={I18n.t('showPostModal.menu.reportViolation')}>
                {reasons.map((reason: ViolationReason) => (
                    <ViolationMenuItem
                        key={reason.id}
                        onPress={reportHandle}
                        reasonId={reason.id}
                        title={I18n.t(reason.tkey)}
                    />
                ))}
            </MenuGroup>
        </Menu>
    );
}
