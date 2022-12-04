import { Group } from '@inspire/types';
import { Body, Left, Right } from 'native-base';
import React from 'react';

import { Avatar, NspSwitch, SplayListItem, Text } from 'components';
import { chooseGroup } from 'e2e/selectors/chooseGroup';

import { Styles } from './styles';

interface GroupToggleProps {
    pressHandle: (groupId: number) => void;
    group: Group;
    isSelected: boolean;
}

export function GroupToggle(props: GroupToggleProps) {
    function onChangeHandle() {
        props.pressHandle(props.group.id);
    }

    return (
        <SplayListItem>
            <Left>
                <Avatar size="small" fallback={props.group.name} uri={props.group.avatar} />
            </Left>
            <Body>
                <Text numberOfLines={1} style={Styles.text}>
                    {props.group.name}
                </Text>
            </Body>
            <Right>
                <NspSwitch
                    testId={chooseGroup.switches.groupByName(props.group.name)}
                    isSelected={props.isSelected}
                    changeHandle={onChangeHandle}
                    isDisabled={false}
                />
            </Right>
        </SplayListItem>
    );
}
