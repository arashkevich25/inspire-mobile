import { STATUTE_DETAILS_MODAL } from 'navigation/constants/modalsIds';
import React, { useEffect } from 'react';

import { ScrollView, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Avatar, CustomRefreshControl, FloatBackButton, Image, Loader, Text } from 'components';
import { useCompetition, useRootUserData } from 'hooks';
import { NavProps, Sizes } from 'types';
import { JoinButton, Progress } from './components';

import { Styles } from './styles';

interface CompetitionDetailsProps extends NavProps {
    competitionId: number;
}

export function CompetitionDetails(props: CompetitionDetailsProps) {
    const {
        competitionsDetailsIsFetching,
        competitionsDetailsHasFetched,
        competitionsDetails,
        fetchCompetitionDetails,
        attendCompetitionHandle,
    } = useCompetition(props.competitionId);

    const [, , , , rootUserDetails] = useRootUserData();

    async function backHandle() {
        await Navigation.pop(props.componentId);
    }

    useEffect(() => {
        fetchCompetitionDetails();
        const event = Navigation.events().registerModalDismissedListener(async ({ componentId }) => {
            if (componentId === STATUTE_DETAILS_MODAL) {
                fetchCompetitionDetails();
            }
        });
        return () => {
            event.remove();
        };
    }, []);

    if (!competitionsDetailsHasFetched || !competitionsDetails) {
        return <Loader />;
    }

    const { media, name, requiredValue, description, isActiveByMe, isCompletedByMe, isActive } = competitionsDetails;

    return (
        <ScrollView
            refreshControl={
                <CustomRefreshControl refreshing={competitionsDetailsIsFetching} onRefresh={fetchCompetitionDetails} />
            }
            contentContainerStyle={Styles.contentContainer}>
            <FloatBackButton backHandle={backHandle} />
            {media.length ? (
                <View style={Styles.mediaBox}>
                    <Image width={150} height={150} uri={{ uri: media[0].uri }}></Image>
                </View>
            ) : (
                <View style={Styles.avatarBox}>
                    <Avatar size="large" fallback={`${name[0]}${name[1]}`} />
                </View>
            )}
            <View>
                <Text style={Styles.nameText}>{name}</Text>
            </View>
            <View style={Styles.infoBox}>
                {isActive ? (
                    <Text color="gray" fontSize={Sizes.Medium} translateKey="competitionDetails.text.requiredCount" />
                ) : null}
                {isActive ? (
                    <Text fontSize={Sizes.Medium} isBold={true}>
                        {requiredValue}
                    </Text>
                ) : null}
            </View>
            {isCompletedByMe ? null : (
                <View style={Styles.buttonBox}>
                    {isActiveByMe ? (
                        <Progress
                            userRecommendValue={rootUserDetails.recommendCount}
                            requiredValue={competitionsDetails.requiredValue}
                        />
                    ) : isActive ? (
                        <JoinButton
                            joinHandle={attendCompetitionHandle}
                            componentId={props.competitionId as any}
                            competitionId={competitionsDetails.id}
                        />
                    ) : (
                        <Text isItalic={true} color="gray" translateKey="competitionDetails.text.isInActive" />
                    )}
                </View>
            )}
            <View style={Styles.divider} />
            <View style={Styles.descriptionBox}>
                <Text fontSize={Sizes.Medium} style={Styles.descriptionText}>
                    {description}
                </Text>
            </View>
        </ScrollView>
    );
}
