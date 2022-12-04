/* eslint-disable prettier/prettier */
import React from 'react';

import { View } from 'react-native';

import { Button, ButtonTypes, Text } from 'components';
import { Sizes } from 'types';
import { addPost } from '../../../../../e2e/selectors';
import { Toggle } from './components';

import { Styles } from './styles';

interface SharingOptionalsProps {
    isPublic: boolean;
    isPrivate: boolean;
    isGroup: boolean;
    isSubscribers: boolean;
    publicHandle: () => void;
    privateHandle: () => void;
    subscribersHandle: () => void;
    shareToGroupsHandle: () => void;
    selectGroupsHandle: () => void;
    isPublicDisabled: boolean;
    isPrivateDisabled: boolean;
    isSubscribersDisabled: boolean;
    isChooseGroupsDisabled: boolean;
    isGroupsDisabled: boolean;
    countSelectedGroup: number;
}

export function SharingOptionals(props: SharingOptionalsProps) {
    return (
        <View style={Styles.contentContainer}>
            <Toggle
                testId={addPost.switches.public}
                isSelected={props.isPublic}
                changeHandle={props.publicHandle}
                isDisabled={props.isPublicDisabled}>
                <Text fontSize={Sizes.Small} translateKey="addPost.titles.publicSharing" />
            </Toggle>
            <Toggle
                testId={addPost.switches.followers}
                isSelected={props.isSubscribers}
                changeHandle={props.subscribersHandle}
                isDisabled={props.isSubscribersDisabled}>
                <Text fontSize={Sizes.Small} translateKey="addPost.titles.followersSharing" />
            </Toggle>
            <Toggle
                testId={addPost.switches.group}
                isSelected={props.isGroup}
                changeHandle={props.shareToGroupsHandle}
                isDisabled={props.isGroupsDisabled}>
                <View style={Styles.chooseGroupsButtonContainer}>
                    <Text fontSize={Sizes.Small} translateKey="addPost.titles.shareToGroup" />
                    <View style={Styles.chooseGroupsButtonBox}>
                        <Button
                            testID={addPost.buttons.chooseGroup}
                            isBlocked={props.isChooseGroupsDisabled}
                            size="small"
                            color="blue"
                            translateKey="addPost.titles.chooseGroup"
                            type={ButtonTypes.Link}
                            onPress={props.selectGroupsHandle}
                        />
                        {props.countSelectedGroup ? (
                            <Text fontSize={Sizes.Small}>({props.countSelectedGroup})</Text>
                        ) : null}
                    </View>
                </View>
            </Toggle>
            <Toggle
                testId={addPost.switches.private}
                isSelected={props.isPrivate}
                changeHandle={props.privateHandle}
                isDisabled={props.isPrivateDisabled}>
                <Text fontSize={Sizes.Small} translateKey="addPost.titles.privateSharing" />
            </Toggle>
        </View>
    );
}
