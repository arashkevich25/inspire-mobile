import { Body, Icon, Left, Right } from 'native-base';
import React from 'react';

import { Avatar, SplayListItem, Text } from 'components';
import { Sizes } from 'types';
import { profile } from '../../../../../../../e2e/selectors';

import { Styles } from './styles';

interface AddButtonProps {
    addHandle: () => void;
    hasSeparator: boolean;
}

export function AddButton(props: AddButtonProps) {
    return (
        <>
            <SplayListItem testId={profile.buttons.addNewGroup} pressHandle={props.addHandle}>
                <Left>
                    <Avatar fallback="+" size="medium" />
                </Left>
                <Body style={Styles.bodyBox}>
                    <Text
                        color="blue"
                        fontSize={Sizes.Medium}
                        style={Styles.bodyText}
                        translateKey="profile.groups.buttons.addGroup"
                    />
                </Body>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </SplayListItem>
        </>
    );
}
