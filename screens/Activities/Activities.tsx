import React from 'react';

import { View } from 'react-native';

import { useActivity } from 'hooks';
import { List } from './components';

import { Styles } from './styles';

export function Activities() {
    const { activities, fetchActivity, activitiesFetchingState, loadMore, onActivityClickHandle } = useActivity();
    return (
        <View style={Styles.contentContainer}>
            <List
                activityHandle={onActivityClickHandle}
                activities={activities}
                fetch={fetchActivity}
                isFetching={activitiesFetchingState}
                loadMore={loadMore}
            />
        </View>
    );
}
