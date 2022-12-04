import { ClubMemberState, ClubStatistics, User } from '@inspire/types';
import { ClubCompetitions, TextPage } from 'navigation';
import React from 'react';

import { Alert, ScrollView, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Button, ButtonTypes, DrawSection, Text } from 'components';
import { SubscribersFollowersList } from 'navigation/components/subscribersFollowersList';
import I18n from 'tools/translate';
import { NavProps, Sizes } from 'types';

import { Styles } from './styles';

interface DrawerStatisticsProps extends NavProps {
    statistics: Partial<ClubStatistics>;
    uniqueName: string;
    members: User[];
    description: string;
    clubName: string;
    clubMemberState: ClubMemberState;
    leaveClubHandle: () => void;
}

export function DrawerStatistics(props: DrawerStatisticsProps) {
    async function openCompetitions() {
        await Navigation.push(props.componentId, { component: ClubCompetitions(props.uniqueName) });
    }

    async function openMembersList() {
        await Navigation.push(props.componentId, {
            component: SubscribersFollowersList(props.members, '', I18n.t('clubDetails.text.members')),
        });
    }

    async function leaveClub() {
        Alert.alert(I18n.t('clubDetails.dialogue.leaveTitle'), I18n.t('clubDetails.dialogue.leaveDescription'), [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            { text: 'OK', onPress: props.leaveClubHandle },
        ]);
    }

    async function showMoreHandle() {
        await Navigation.showModal({
            stack: {
                children: [
                    {
                        component: TextPage(props.clubName, props.description, false),
                    },
                ],
            },
        });
    }

    return (
        <>
            <ScrollView>
                <View style={Styles.contentContainer}>
                    <Text style={Styles.boldText} fontSize={Sizes.DoubleLarge}>
                        {props.statistics.usersCount}
                    </Text>
                    <Text
                        fontSize={Sizes.Small}
                        style={Styles.boldText}
                        color="gray"
                        translateKey="clubDetails.text.clubMembers1"
                    />
                    <Button
                        size="small"
                        // TODO to fill
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        onPress={openMembersList}
                        type={ButtonTypes.Link}
                        color="blue"
                        translateKey="clubDetails.buttons.showAll"
                    />
                </View>
                <DrawSection
                    pressHandle={openCompetitions}
                    title={I18n.t('clubDetails.drawer.countCompetitions')}
                    value={props.statistics.competitionCount as number}
                />
                <DrawSection
                    title={I18n.t('clubDetails.drawer.viewsCount')}
                    value={props.statistics.viewsCount as number}
                />
                <DrawSection
                    title={I18n.t('clubDetails.drawer.aboutUsTitle')}
                    value={I18n.t('clubDetails.drawer.aboutUs')}
                    pressHandle={showMoreHandle}
                />
            </ScrollView>
            {props.clubMemberState === ClubMemberState.ClubMember ? (
                <View>
                    <Button
                        size="small"
                        // TODO to fill
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        onPress={leaveClub}
                        type={ButtonTypes.Link}
                        color="red"
                        translateKey="clubDetails.buttons.leave"
                    />
                </View>
            ) : null}
        </>
    );
}
