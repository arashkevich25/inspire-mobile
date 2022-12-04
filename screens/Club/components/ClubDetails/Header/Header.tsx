import { ClubDetails } from '@inspire/types';
import { ClubMemberState } from '@inspire/types/build/main/lib/enums/club-member-state.enum';
import { JoinToClubAdditionalData } from 'navigation';
import { ComponentId } from 'navigation/constants/componentId';
import React from 'react';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { ButtonBorderedLink, ButtonFilled, FloatBackButton, Image, Text } from 'components';
import { ContactPanel } from 'containers';
import I18n from 'tools/translate';
import { Sizes } from 'types';

import { Styles } from '../styles';

interface HeaderProps {
    clubDetails: ClubDetails;
    openDrawer: () => void;
    isAuthenticated: boolean;
}

export function Header(props: HeaderProps) {
    const { logo, name, description, contacts, clubMemberState } = props.clubDetails;

    function openMoreDetails() {
        props.openDrawer();
    }
    async function backHandle() {
        await Navigation.pop(ComponentId.ScreenClub);
    }

    async function joinClubPressHandle() {
        Navigation.push(ComponentId.ScreenClub, {
            component: JoinToClubAdditionalData(I18n.t('clubDetails.text.requiredData'), props.clubDetails.uniqueName),
        });
    }

    return (
        <View style={Styles.contentContainer}>
            <FloatBackButton backHandle={backHandle} />
            <View style={Styles.headerImageBox}>
                <Image width={200} height={200} uri={{ uri: logo.uri }}></Image>
            </View>
            <View style={Styles.headerTextBox}>
                <Text
                    isBold={true}
                    fontSize={Sizes.Large}
                    numberOfLines={1}
                    style={[Styles.paddingTopBox, Styles.nameBox]}>
                    {name}
                </Text>
            </View>
            {Object.values(contacts).filter(item => item).length > 1 ? (
                <View style={[Styles.paddingTopBox, Styles.nameText]}>
                    <ContactPanel contactData={contacts} />
                </View>
            ) : null}
            {clubMemberState === ClubMemberState.WaitingForApprove ? (
                <View>
                    <Text color="gray" isItalic={true} translateKey="clubDetails.text.waitingForApprove" />
                </View>
            ) : null}
            <View style={[Styles.paddingTopBox, Styles.descriptionBox]}>
                <Text
                    ellipsizeMode="tail"
                    numberOfLines={3}
                    selectable={false}
                    isItalic={true}
                    fontSize={Sizes.Small}
                    style={Styles.descriptionText}>
                    {description}
                </Text>
            </View>
            {clubMemberState === ClubMemberState.NoneMember && props.isAuthenticated ? (
                <View style={[Styles.paddingTopBox, Styles.joinButtonContainer]}>
                    <ButtonFilled onPressHandle={joinClubPressHandle} translateKey="clubDetails.buttons.join" />
                </View>
            ) : null}
            <View style={[Styles.buttonContainer, Styles.paddingTopBox]}>
                <ButtonBorderedLink onPressHandle={openMoreDetails} translateKey="buttons.more" />
            </View>
            <View style={[Styles.paddingTopBox]}>
                <Text
                    isBold={true}
                    fontSize={Sizes.Small}
                    style={Styles.descriptionText}
                    translateKey="clubDetails.text.membersPosts"
                />
            </View>
            <View style={Styles.postsDivider} />
        </View>
    );
}
