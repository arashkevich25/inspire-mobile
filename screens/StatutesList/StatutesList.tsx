import { StatuteWithApproveStatus } from '@inspire/types';
import { StatuteDetails } from 'navigation';
import React from 'react';
import { STATUTE_DETAILS_MODAL } from '../../navigation/constants/modalsIds';

import { FlatList, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Button } from 'components';
import { ButtonTypes } from 'components/Button/types/ButtonTypes';
import { useClub } from 'hooks/useClub';
import { NavProps } from 'types';
import { useCompetition } from '../../hooks/useCompetition';
import { ListFooter, ListItem } from './components';

import { Styles } from './styles';

interface StatutesListProps extends NavProps {
    clubClubUniqueName: string;
    competitionId: number;
    buttonText: string;
    cbk: () => void;
}

export function StatutesList(props: StatutesListProps) {
    const { clubDetails } = useClub(props.clubClubUniqueName);
    const { competitionsDetails } = useCompetition(props.competitionId);

    let statues: StatuteWithApproveStatus[] = [];

    if (props.clubClubUniqueName) {
        statues = (clubDetails?.statutes as any) || [];
    }

    if (props.competitionId) {
        statues = (competitionsDetails?.statutes as any) || [];
    }

    async function openStatuteDetails(statuteId: number) {
        const statute = statues.filter((statute: StatuteWithApproveStatus) => statute.id === statuteId);
        await Navigation.showModal({
            stack: {
                id: STATUTE_DETAILS_MODAL,
                children: [
                    {
                        component: StatuteDetails(statuteId, statute[0].title),
                    },
                ],
            },
        });
    }
    const preparedArr = statues.map((statute: StatuteWithApproveStatus, index: number) => ({
        key: index.toString(),
        statute,
    }));
    function renderItem({ item }: any) {
        return <ListItem key={item.id} statute={item.statute} openDetails={openStatuteDetails} />;
    }

    const buttonIsBlocked = !statues.every(statute => statute.approvedByMe);

    return (
        <View style={Styles.contentContainer}>
            <FlatList
                data={preparedArr}
                style={Styles.listBox}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                keyboardDismissMode={'none'}
                keyboardShouldPersistTaps={'always'}
                ListFooterComponent={<ListFooter />}
            />
            <View style={Styles.buttonBox}>
                <Button
                    isBlocked={buttonIsBlocked}
                    isLoading={false}
                    size="large"
                    type={ButtonTypes.Filled}
                    onPress={props.cbk}>
                    {props.buttonText}
                </Button>
            </View>
        </View>
    );
}
