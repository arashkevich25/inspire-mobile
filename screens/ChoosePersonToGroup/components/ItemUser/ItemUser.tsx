import { User } from '@inspire/types';
import { Body, Left, Right } from 'native-base';
import React from 'react';

import { Avatar, Button, ButtonTypes, SplayListItem, Text } from 'components';
import { choosePersonToGroup } from '../../../../../e2e/selectors/choosePersonToGroup';

import { Styles } from './styles';

interface ItemUserProps {
    btnTKey: string;
    user: User;
    onPressHandle: (user: User) => void;
}

export function ItemUser(props: ItemUserProps) {
    function onPressHandle() {
        props.onPressHandle(props.user);
    }

    return (
        <SplayListItem>
            <Left>
                <Avatar uri={props.user.avatar} fallback={props.user.name} size="medium" />
            </Left>
            <Body>
                <Text style={Styles.text}>{props.user.name}</Text>
            </Body>
            <Right>
                <Button
                    testID={choosePersonToGroup.buttons.addMember(props.user.id)}
                    size="wide"
                    color="blue"
                    onPress={onPressHandle}
                    translateKey={props.btnTKey}
                    type={ButtonTypes.Link}
                />
            </Right>
        </SplayListItem>
    );
}
