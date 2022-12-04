import { CompetitionDetails } from 'navigation';
import React, { useEffect } from 'react';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { FloatBackButton, Loader } from 'components';
import { useClub } from 'hooks/useClub';
import { NavProps } from 'types/NavProps';
import { List } from './components';

interface ClubCompetitionsProps extends NavProps {
    uniqueName: string;
}

export function ClubCompetitions(props: ClubCompetitionsProps) {
    const { competitions, competitionsIsFetching, fetchClubCompetitions, competitionsHasFetched } = useClub(
        props.uniqueName,
    );

    async function backHandle() {
        await Navigation.pop(props.componentId);
    }
    async function openCompetitionDetailsHandle(componentId: number) {
        await Navigation.push(props.componentId, { component: CompetitionDetails(componentId) });
    }

    useEffect(() => {
        if (!competitionsHasFetched && !competitionsIsFetching && !competitions.length) {
            fetchClubCompetitions();
        }
    }, [competitions, competitionsIsFetching, competitionsHasFetched]);

    if (!competitionsHasFetched && !competitions.length) {
        return <Loader></Loader>;
    }

    return (
        <View>
            <FloatBackButton backHandle={backHandle} />
            <List
                competitions={competitions}
                competitionsIsFetching={competitionsIsFetching}
                fetchClubCompetitions={fetchClubCompetitions}
                openCompetitionDetails={openCompetitionDetailsHandle}
            />
        </View>
    );
}
