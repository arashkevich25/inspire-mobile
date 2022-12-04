import { Body, Left } from 'native-base';
import { ChoosePersonToGroup, ComponentId } from 'navigation';
import React from 'react';

import { Navigation } from 'react-native-navigation';

import { Avatar, SplayListItem, Text } from 'components';
import I18n from 'tools/translate';
import { Sizes } from 'types';
import { groups } from '../../../../../../../e2e/selectors/groups';

import { Styles } from './styles';

interface AddUserButtonProps {
    groupId: number;
}

export function AddUserButton(props: AddUserButtonProps) {
    function openSubscribeFollowingModal() {
        Navigation.push(ComponentId.ScreenAddEditGroup, {
            component: ChoosePersonToGroup(I18n.t('profile.groups.addEditGroup'), props.groupId),
        });
    }

    return (
        <>
            <SplayListItem testId={groups.buttons.addMembers} pressHandle={openSubscribeFollowingModal}>
                <Left>
                    <Avatar fallback="+" size="medium" />
                </Left>
                <Body style={Styles.contentContainer}>
                    <Text
                        color="blue"
                        fontSize={Sizes.Medium}
                        style={Styles.text}
                        translateKey="profile.groups.buttons.addUser"
                    />
                </Body>
            </SplayListItem>
        </>
    );
}
