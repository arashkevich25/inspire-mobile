import { User } from '@inspire/types';
import React from 'react';
import { UsersList } from '../../../UsersList';

import { View } from 'react-native';

import { ButtonFilled } from 'components';
import { NavProps } from 'types';
import { AddUserButton } from './components/AddUserButton';

import { Styles } from './styles';

interface MembersProps extends NavProps {
    usersForGroup: User[];
    navigateToProfile: () => void;
    groupId: number;
    updateLoading: boolean;
}

export function Members(props: MembersProps) {
    return (
        <View style={Styles.contentContainer}>
            <AddUserButton groupId={props.groupId} />
            <UsersList
                emptyPlugIsVisible={false}
                componentId={props.componentId}
                users={props.usersForGroup}
                followUnfollowButtonIsVisible={false}
            />
            <View style={Styles.buttonSaveContainer}>
                <ButtonFilled
                    isDisabled={props.updateLoading}
                    isLoading={props.updateLoading}
                    onPressHandle={props.navigateToProfile}
                    translateKey="profile.groups.buttons.save"
                />
            </View>
        </View>
    );
}
