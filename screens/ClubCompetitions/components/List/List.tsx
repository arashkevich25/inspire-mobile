import { Competition } from '@inspire/types';
import React from 'react';
import { ListItem } from '../ListItem';

import { FlatList } from 'react-native';

import { CustomRefreshControl } from 'components';

import { Styles } from './styles';

interface ListProps {
    competitions: Competition[];
    competitionsIsFetching: boolean;
    openCompetitionDetails: (competitionId: number) => void;
    fetchClubCompetitions: () => void;
}

export function List(props: ListProps) {
    function renderItem({ item }: any) {
        return <ListItem key={item.id} competition={item.competition} openDetails={props.openCompetitionDetails} />;
    }

    const preparedArr = props.competitions.map((competition: Competition, index: number) => ({
        key: index.toString(),
        competition,
    }));

    return (
        <FlatList
            refreshControl={
                <CustomRefreshControl
                    refreshing={props.competitionsIsFetching}
                    onRefresh={props.fetchClubCompetitions}
                />
            }
            data={preparedArr}
            contentContainerStyle={Styles.contentContainer}
            style={Styles.itemBox}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            keyboardDismissMode={'none'}
            keyboardShouldPersistTaps={'always'}
        />
    );
}
